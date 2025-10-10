"use client";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { FaPlus, FaArrowRight, FaTrash, FaStar, FaChair } from 'react-icons/fa';

/**
 * Schedule page allows configuring a train with:
 * - Train name/number and date
 * - First and Second class only
 * - Number of carriages per class
 * - Seats per carriage (rows x cols)
 * Stores the configuration to localStorage under key: TRAIN_SCHEDULE
 */
export default function Shedule() {
  const router = useRouter();
  const [form, setForm] = useState({
    trainName: "",
    date: "",
    departureTime: "", // HH:mm
    arrivalTime: "", // HH:mm
    startStation: "",
    stopStation: "",
    first: { carriages: 1, rows: 10, cols: 6 },
    second: { carriages: 1, rows: 10, cols: 6 },
  });
  const [message, setMessage] = useState("");
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Load existing schedules list
    try {
      const listRaw = localStorage.getItem("TRAIN_SCHEDULES");
      const list = listRaw ? JSON.parse(listRaw) : [];
      const norm = Array.isArray(list) ? list : [];
      setTrains(norm);
    } catch {}
  }, []);

  const totalSeats = useMemo(() => {
    const calc = (o) => Number(o.carriages || 0) * Number(o.rows || 0) * Number(o.cols || 0);
    return {
      first: calc(form.first),
      second: calc(form.second),
      all: calc(form.first) + calc(form.second),
    };
  }, [form]);

  const onNum = (v, min = 0, max = 999) => {
    const n = Number(v);
    if (Number.isNaN(n)) return min;
    return Math.max(min, Math.min(max, n));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (!form.trainName || !form.date || !form.startStation || !form.stopStation) {
      setMessage("Please provide train name, date, start and stop stations.");
      return;
    }

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const schedule = {
      id,
      trainName: form.trainName,
      date: form.date,
      departureTime: form.departureTime || "",
      arrivalTime: form.arrivalTime || "",
      startStation: form.startStation,
      stopStation: form.stopStation,
      classes: {
        First: {
          carriages: onNum(form.first.carriages, 1, 50),
          rows: onNum(form.first.rows, 1, 26),
          cols: onNum(form.first.cols, 1, 10),
          capacity: totalSeats.first,
        },
        Second: {
          carriages: onNum(form.second.carriages, 1, 50),
          rows: onNum(form.second.rows, 1, 26),
          cols: onNum(form.second.cols, 1, 10),
          capacity: totalSeats.second,
        },
      },
      // In a real app, availability would be per-trip from backend. For demo, empty.
      unavailableSeats: {}, // e.g., { First: ["A1", ...], Second: ["B3", ...] }
    };

    const next = [...trains, schedule];
    localStorage.setItem("TRAIN_SCHEDULES", JSON.stringify(next));
    setTrains(next);
    setMessage("Train added to schedule. You can now proceed to booking.");
    // Reset form after adding
    setForm({
      trainName: "",
      date: "",
      departureTime: "",
      arrivalTime: "",
      startStation: "",
      stopStation: "",
      first: { carriages: 1, rows: 10, cols: 6 },
      second: { carriages: 1, rows: 10, cols: 6 },
    });
  };

  const removeTrain = (id) => {
    try {
      const next = trains.filter((t) => t.id !== id);
      setTrains(next);
      localStorage.setItem("TRAIN_SCHEDULES", JSON.stringify(next));
    } catch (e) {
      console.error('Error removing train:', e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border border-blue-100">
      <div className="mb-3">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-slate-100 border border-slate-300 text-slate-700 hover:bg-slate-200 transition-colors"
        >
          ← Back to Home
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-2 text-center text-teal-800">Schedule Trains</h1>
      <p className="text-center text-sm text-slate-600 mb-6">Create train schedules with times and seat layouts. You can add multiple trains.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">Train Name/Number</label>
            <input
              type="text"
              value={form.trainName}
              onChange={(e) => setForm({ ...form, trainName: e.target.value })}
              className="w-full rounded-md border border-slate-300 bg-white p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
              placeholder="e.g., IC-101"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">Departure Time</label>
            <input
              type="time"
              value={form.departureTime}
              onChange={(e) => setForm({ ...form, departureTime: e.target.value })}
              className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">Arrival Time</label>
            <input
              type="time"
              value={form.arrivalTime}
              onChange={(e) => setForm({ ...form, arrivalTime: e.target.value })}
              className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">Start Station</label>
            <input
              type="text"
              value={form.startStation}
              onChange={(e) => setForm({ ...form, startStation: e.target.value })}
              className="w-full rounded-md border border-slate-300 bg-white p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
              placeholder="e.g., Colombo"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-slate-700">Stop Station</label>
            <input
              type="text"
              value={form.stopStation}
              onChange={(e) => setForm({ ...form, stopStation: e.target.value })}
              className="w-full rounded-md border border-slate-300 bg-white p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
              placeholder="e.g., Kandy"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <fieldset className="rounded-xl border border-slate-200 p-4 bg-white ring-1 ring-blue-50">
            <legend className="px-2 text-sm font-semibold text-blue-700 inline-flex items-center gap-2"><FaStar /> First Class</legend>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <label className="text-sm text-slate-700">Carriages</label>
                <input
                  type="number"
                  min={1}
                  value={form.first.carriages}
                  onChange={(e) => setForm({ ...form, first: { ...form.first, carriages: onNum(e.target.value, 1, 50) } })}
                  className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="text-sm text-slate-700">Rows per carriage</label>
                <input
                  type="number"
                  min={1}
                  value={form.first.rows}
                  onChange={(e) => setForm({ ...form, first: { ...form.first, rows: onNum(e.target.value, 1, 26) } })}
                  className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="text-sm text-slate-700">Seats per row (cols)</label>
                <input
                  type="number"
                  min={1}
                  value={form.first.cols}
                  onChange={(e) => setForm({ ...form, first: { ...form.first, cols: onNum(e.target.value, 1, 10) } })}
                  className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
              <p className="text-sm text-slate-600">Total First Class seats: <span className="font-medium">{totalSeats.first}</span></p>
            </div>
          </fieldset>

          <fieldset className="rounded-xl border border-slate-200 p-4 bg-white ring-1 ring-blue-50">
            <legend className="px-2 text-sm font-semibold text-blue-700 inline-flex items-center gap-2"><FaChair /> Second Class</legend>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <label className="text-sm text-slate-700">Carriages</label>
                <input
                  type="number"
                  min={1}
                  value={form.second.carriages}
                  onChange={(e) => setForm({ ...form, second: { ...form.second, carriages: onNum(e.target.value, 1, 50) } })}
                  className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="text-sm text-slate-700">Rows per carriage</label>
                <input
                  type="number"
                  min={1}
                  value={form.second.rows}
                  onChange={(e) => setForm({ ...form, second: { ...form.second, rows: onNum(e.target.value, 1, 26) } })}
                  className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <label className="text-sm text-slate-700">Seats per row (cols)</label>
                <input
                  type="number"
                  min={1}
                  value={form.second.cols}
                  onChange={(e) => setForm({ ...form, second: { ...form.second, cols: onNum(e.target.value, 1, 10) } })}
                  className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                />
              </div>
              <p className="text-sm text-slate-600">Total Second Class seats: <span className="font-medium">{totalSeats.second}</span></p>
            </div>
          </fieldset>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-600">Grand total seats: <span className="font-semibold">{totalSeats.all}</span></p>
          <div className="space-x-2">
            <button type="button" onClick={() => router.push("/booking")} className="px-4 py-2 rounded-md border border-slate-300 hover:bg-slate-50 inline-flex items-center gap-2"><FaArrowRight /> Go to Booking</button>
            <button type="submit" className="px-4 py-2 rounded-md bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 inline-flex items-center gap-2"><FaPlus /> Add Train</button>
          </div>
        </div>

        {message && (
          <div className="p-3 rounded-md bg-green-50 text-green-700 text-sm border border-green-200" role="status">{message}</div>
        )}
      </form>

      {/* Existing scheduled trains */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3 text-blue-700">Scheduled Trains</h2>
        {trains.length === 0 ? (
          <p className="text-sm text-slate-600">No trains scheduled yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-2.5 text-left">Train</th>
                  <th className="px-4 py-2.5 text-left">Date</th>
                  <th className="px-4 py-2.5 text-left">Departure</th>
                  <th className="px-4 py-2.5 text-left">Arrival</th>
                  <th className="px-4 py-2.5 text-left">Route</th>
                  <th className="px-4 py-2.5 text-left">First cap.</th>
                  <th className="px-4 py-2.5 text-left">Second cap.</th>
                  <th className="px-4 py-2.5 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {trains.map((t) => (
                  <tr key={t.id} className="border-t hover:bg-slate-50">
                    <td className="px-4 py-2.5 font-medium text-slate-800">{t.trainName}</td>
                    <td className="px-4 py-2.5">{t.date}</td>
                    <td className="px-4 py-2.5">{t.departureTime || '-'}</td>
                    <td className="px-4 py-2.5">{t.arrivalTime || '-'}</td>
                    <td className="px-4 py-2.5">{t.startStation} → {t.stopStation}</td>
                    <td className="px-4 py-2.5">{t.classes?.First?.capacity ?? '-'}</td>
                    <td className="px-4 py-2.5">{t.classes?.Second?.capacity ?? '-'}</td>
                    <td className="px-4 py-2.5">
                      <button onClick={() => removeTrain(t.id)} className="px-2 py-1 rounded-md text-xs border border-red-200 text-red-700 hover:bg-red-50 inline-flex items-center gap-2"><FaTrash /> Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

