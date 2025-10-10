import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import { getUserFromRequest, hashPassword } from "@/lib/auth";

export const runtime = "nodejs";

// GET /api/profile
export async function GET(request) {
  try {
    const user = await getUserFromRequest(request);

    if (!user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        phone: user.phone,
        createdAt: user.created_at
      }
    });

  } catch (error) {
    console.error("Get profile error:", error);
    return NextResponse.json(
      { error: "Failed to fetch profile" },
      { status: 500 }
    );
  }
}

// PATCH /api/profile - Update user profile
export async function PATCH(request) {
  try {
    const user = await getUserFromRequest(request);

    if (!user) {
      return NextResponse.json(
        { error: "Not authenticated" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { fullName, phone, password } = body;

    const pool = getPool();
    const updates = [];
    const values = [];

    if (fullName) {
      updates.push('full_name = ?');
      values.push(fullName);
    }

    if (phone !== undefined) {
      updates.push('phone = ?');
      values.push(phone || null);
    }

    if (password) {
      if (password.length < 6) {
        return NextResponse.json(
          { error: "Password must be at least 6 characters" },
          { status: 400 }
        );
      }
      const hashedPassword = await hashPassword(password);
      updates.push('password = ?');
      values.push(hashedPassword);
    }

    if (updates.length === 0) {
      return NextResponse.json(
        { error: "No fields to update" },
        { status: 400 }
      );
    }

    values.push(user.id);

    await pool.query(
      `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
      values
    );

    // Fetch updated user
    const [updatedUsers] = await pool.query(
      'SELECT id, email, full_name, phone, created_at FROM users WHERE id = ?',
      [user.id]
    );

    return NextResponse.json({
      success: true,
      user: {
        id: updatedUsers[0].id,
        email: updatedUsers[0].email,
        fullName: updatedUsers[0].full_name,
        phone: updatedUsers[0].phone,
        createdAt: updatedUsers[0].created_at
      }
    });

  } catch (error) {
    console.error("Update profile error:", error);
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
}
