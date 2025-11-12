import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { getPool } from './db';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production-min-32-chars';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// Hash password
export async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

// Verify password
export async function verifyPassword(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}

// Generate JWT token
export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

// Verify JWT token
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

// Create user
export async function createUser({ email, password, fullName, phone }) {
  const pool = getPool();
  const hashedPassword = await hashPassword(password);
  
  try {
    const [result] = await pool.execute(
      'INSERT INTO users (email, password, full_name, phone) VALUES (?, ?, ?, ?)',
      [email, hashedPassword, fullName, phone || null]
    );
    
    return {
      id: result.insertId,
      email,
      fullName,
      phone
    };
  } catch (error) {
    if (error.code === 'ER_DUP_ENTRY') {
      throw new Error('Email already exists');
    }
    throw error;
  }
}

// Find user by email
export async function findUserByEmail(email) {
  const pool = getPool();
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0] || null;
}

// Find user by ID
export async function findUserById(id) {
  const pool = getPool();
  const [rows] = await pool.execute(
    'SELECT id, email, full_name, phone, created_at FROM users WHERE id = ?',
    [id]
  );
  return rows[0] || null;
}

// Authenticate user
export async function authenticateUser(email, password) {
  const user = await findUserByEmail(email);
  
  if (!user) {
    return null;
  }
  
  const isValid = await verifyPassword(password, user.password);
  
  if (!isValid) {
    return null;
  }
  
  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

// Get user from request (verify token from cookies or headers)
export async function getUserFromRequest(request) {
  // Try to get token from cookie
  const cookieHeader = request.headers.get('cookie');
  let token = null;
  
  if (cookieHeader) {
    const cookies = cookieHeader.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {});
    token = cookies.token;
  }
  
  // If no cookie, try Authorization header
  if (!token) {
    const authHeader = request.headers.get('authorization');
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.substring(7);
    }
  }
  
  if (!token) {
    return null;
  }
  
  const payload = verifyToken(token);
  
  if (!payload) {
    return null;
  }
  
  const user = await findUserById(payload.userId);
  return user;
}
