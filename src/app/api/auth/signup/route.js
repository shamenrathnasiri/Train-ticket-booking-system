import { NextResponse } from "next/server";
import { createUser } from "@/lib/auth";
import { ensureDatabaseSetup } from "@/lib/init";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    // Ensure database is initialized before handling auth
    await ensureDatabaseSetup();

    const body = await request.json();
    const { email, password, fullName, phone } = body;

    // Validate input
    if (!email || !password || !fullName) {
      return NextResponse.json(
        { error: "Email, password, and full name are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Create user (no automatic login)
    const user = await createUser({ email, password, fullName, phone });

    // Respond without token; client will redirect to /signin
    return NextResponse.json({
      success: true,
      message: "Account created successfully. Please sign in.",
      user: {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        phone: user.phone
      }
    }, { status: 201 });

  } catch (error) {
    console.error("Signup error:", error);
    
    if (error.message === 'Email already exists') {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create account" },
      { status: 500 }
    );
  }
}
