import { NextResponse } from "next/server";
import { testConnection } from "@/lib/db";
import { ensureDatabaseSetup } from "@/lib/init";

export const runtime = "nodejs";

export async function GET() {
  // Auto-initialize database if needed
  await ensureDatabaseSetup();
  
  const dbStatus = await testConnection();
  
  return NextResponse.json({
    status: "ok",
    time: new Date().toISOString(),
    env: process.env.NODE_ENV,
    database: dbStatus
  });
}
