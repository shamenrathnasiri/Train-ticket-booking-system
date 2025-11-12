import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export const dynamic = "force-dynamic";

const API_ERROR_MESSAGE = "Unable to process request";

const formatDate = (value) => {
  if (!value) return "";
  if (typeof value === "string") {
    return value.slice(0, 10);
  }
  try {
    return value.toISOString().slice(0, 10);
  } catch (err) {
    return "";
  }
};

const formatTime = (value) => {
  if (!value) return "";
  if (typeof value === "string") {
    return value.slice(0, 5);
  }
  try {
    return value.toISOString().slice(11, 16);
  } catch (err) {
    return "";
  }
};

const clampNumber = (value, min, max) => {
  const n = Number(value);
  if (!Number.isFinite(n)) return min;
  return Math.max(min, Math.min(max, Math.floor(n)));
};

const toCapacity = (config) => config.carriages * config.rows * config.cols;

const parseUnavailableSeats = (value) => {
  if (!value) return {};
  if (typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch (err) {
    console.warn("Failed to parse unavailable seats", err);
    return {};
  }
};

const mapRowsToSchedules = (rows) => {
  const map = new Map();
  rows.forEach((row) => {
    const id = String(row.id);
    if (!map.has(id)) {
      map.set(id, {
        id,
        trainName: row.train_name,
        date: formatDate(row.travel_date),
        departureTime: formatTime(row.departure_time),
        arrivalTime: formatTime(row.arrival_time),
        startStation: row.start_station,
        stopStation: row.stop_station,
        classes: {},
        unavailableSeats: parseUnavailableSeats(row.unavailable_seats),
      });
    }

    if (row.class_name) {
      map.get(id).classes[row.class_name] = {
        carriages: Number(row.carriages) || 0,
        rows: Number(row.seat_rows) || 0,
        cols: Number(row.seat_cols) || 0,
        capacity: Number(row.capacity) || 0,
      };
    }
  });

  return Array.from(map.values());
};

export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.query(
      `SELECT ts.id, ts.train_name, ts.travel_date, ts.departure_time, ts.arrival_time,
              ts.start_station, ts.stop_station, ts.unavailable_seats,
              tc.class_name, tc.carriages, tc.seat_rows, tc.seat_cols, tc.capacity
         FROM train_schedules ts
         LEFT JOIN train_classes tc ON tc.train_id = ts.id
        ORDER BY ts.travel_date ASC, ts.departure_time ASC, tc.class_name ASC`
    );

    const data = mapRowsToSchedules(rows);
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching schedules:", error);
    return NextResponse.json({ message: API_ERROR_MESSAGE }, { status: 500 });
  }
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const requiredFields = ["trainName", "date", "startStation", "stopStation"];
  const missing = requiredFields.filter((key) => !body?.[key]);
  if (missing.length > 0) {
    return NextResponse.json(
      { message: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 }
    );
  }

  const trainName = String(body.trainName).trim();
  const travelDate = String(body.date);
  const departureTime = body.departureTime ? String(body.departureTime) : null;
  const arrivalTime = body.arrivalTime ? String(body.arrivalTime) : null;
  const startStation = String(body.startStation).trim();
  const stopStation = String(body.stopStation).trim();

  if (!trainName || !startStation || !stopStation) {
    return NextResponse.json({ message: "Train name and stations are required" }, { status: 400 });
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(travelDate)) {
    return NextResponse.json({ message: "Invalid travel date format" }, { status: 400 });
  }

  const firstInput = body.first || {};
  const secondInput = body.second || {};

  const first = {
    carriages: clampNumber(firstInput.carriages ?? 1, 1, 50),
    rows: clampNumber(firstInput.rows ?? 1, 1, 26),
    cols: clampNumber(firstInput.cols ?? 1, 1, 10),
  };
  first.capacity = toCapacity(first);

  const second = {
    carriages: clampNumber(secondInput.carriages ?? 1, 1, 50),
    rows: clampNumber(secondInput.rows ?? 1, 1, 26),
    cols: clampNumber(secondInput.cols ?? 1, 1, 10),
  };
  second.capacity = toCapacity(second);

  const pool = getPool();
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [scheduleResult] = await connection.query(
      `INSERT INTO train_schedules (train_name, travel_date, departure_time, arrival_time, start_station, stop_station, unavailable_seats)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        trainName,
        travelDate,
        departureTime || null,
        arrivalTime || null,
        startStation,
        stopStation,
        JSON.stringify(body.unavailableSeats || {}),
      ]
    );

    const trainId = scheduleResult.insertId;

    const classPayload = [
      ["First", first],
      ["Second", second],
    ];

    for (const [className, config] of classPayload) {
      await connection.query(
        `INSERT INTO train_classes (train_id, class_name, carriages, seat_rows, seat_cols, capacity)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [trainId, className, config.carriages, config.rows, config.cols, config.capacity]
      );
    }

    await connection.commit();

    const responsePayload = {
      id: String(trainId),
      trainName,
      date: travelDate,
      departureTime: departureTime || "",
      arrivalTime: arrivalTime || "",
      startStation,
      stopStation,
      classes: {
        First: first,
        Second: second,
      },
      unavailableSeats: body.unavailableSeats || {},
    };

    return NextResponse.json({ data: responsePayload }, { status: 201 });
  } catch (error) {
    await connection.rollback();
    console.error("Error creating schedule:", error);
    return NextResponse.json({ message: API_ERROR_MESSAGE }, { status: 500 });
  } finally {
    connection.release();
  }
}
