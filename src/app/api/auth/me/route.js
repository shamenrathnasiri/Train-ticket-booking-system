import { NextResponse } from "next/server";
import { getUserFromRequest } from "@/lib/auth";
import { ensureDatabaseSetup } from "@/lib/init";

export const runtime = "nodejs";

export async function GET(request) {
  try {
    // Ensure database is initialized before reading
    await ensureDatabaseSetup();

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
    console.error("Get user error:", error);
    return NextResponse.json(
      { error: "Failed to get user" },
      { status: 500 }
    );
  }
}
