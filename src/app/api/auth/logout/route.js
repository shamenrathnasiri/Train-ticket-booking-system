import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request) {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully"
  });

  // Clear the token cookie
  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0
  });

  return response;
}
