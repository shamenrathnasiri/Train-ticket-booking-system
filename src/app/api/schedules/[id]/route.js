import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";

const API_ERROR_MESSAGE = "Unable to process request";

export async function DELETE(request, { params }) {
  const rawId = params?.id;
  const scheduleId = Number(rawId);

  if (!rawId || !Number.isInteger(scheduleId) || scheduleId <= 0) {
    return NextResponse.json({ message: "Invalid schedule id" }, { status: 400 });
  }

  try {
    const pool = getPool();
    const [result] = await pool.query("DELETE FROM train_schedules WHERE id = ?", [scheduleId]);

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Schedule not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting schedule:", error);
    return NextResponse.json({ message: API_ERROR_MESSAGE }, { status: 500 });
  }
}
