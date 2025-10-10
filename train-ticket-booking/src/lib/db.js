import mysql from "mysql2/promise";

let pool;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'train_ticket_booking',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
}

// Test database connection
export async function testConnection() {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT 1 as test');
    return { success: true, message: 'Database connected' };
  } catch (error) {
    console.error('Database connection error:', error);
    return { success: false, message: error.message };
  }
}

export default getPool();
