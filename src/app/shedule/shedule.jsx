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
    <div className="min-h-screen bg-[url('/images/bg2-booking.jpg')] bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 bg-white/85"></div>
      <div className="relative min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
            <button
              type="button"
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors font-medium"
            >
              ← Back to Home
            </button>
            <h1 className="text-3xl font-bold text-white text-center mt-4">Train Schedule Management</h1>
            <p className="text-center text-blue-100 mt-2">Create and manage train schedules with detailed seat configurations</p>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Train Details Section */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <FaPlus className="text-blue-600" /> Train Details
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Train Name/Number</label>
                    <input
                      type="text"
                      value={form.trainName}
                      onChange={(e) => setForm({ ...form, trainName: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., IC-101"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Departure Time</label>
                    <input
                      type="time"
                      value={form.departureTime}
                      onChange={(e) => setForm({ ...form, departureTime: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Arrival Time</label>
                    <input
                      type="time"
                      value={form.arrivalTime}
                      onChange={(e) => setForm({ ...form, arrivalTime: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Start Station</label>
                    <input
                      type="text"
                      value={form.startStation}
                      onChange={(e) => setForm({ ...form, startStation: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., Colombo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination Station</label>
                    <input
                      type="text"
                      value={form.stopStation}
                      onChange={(e) => setForm({ ...form, stopStation: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="e.g., Kandy"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Seat Configuration Section */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                    <FaStar className="text-amber-600" /> First Class Configuration
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-amber-700 mb-1">Number of Carriages</label>
                        <input
                          type="number"
                          min={1}
                          max={50}
                          value={form.first.carriages}
                          onChange={(e) => setForm({ ...form, first: { ...form.first, carriages: onNum(e.target.value, 1, 50) } })}
                          className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-amber-700 mb-1">Rows per Carriage</label>
                        <input
                          type="number"
                          min={1}
                          max={26}
                          value={form.first.rows}
                          onChange={(e) => setForm({ ...form, first: { ...form.first, rows: onNum(e.target.value, 1, 26) } })}
                          className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-amber-700 mb-1">Seats per Row</label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={form.first.cols}
                        onChange={(e) => setForm({ ...form, first: { ...form.first, cols: onNum(e.target.value, 1, 10) } })}
                        className="w-full rounded-lg border border-amber-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div className="bg-amber-200 rounded-lg px-4 py-3">
                      <p className="text-sm font-medium text-amber-800">
                        Total First Class Seats: <span className="font-bold text-lg">{totalSeats.first}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                    <FaChair className="text-green-600" /> Second Class Configuration
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-1">Number of Carriages</label>
                        <input
                          type="number"
                          min={1}
                          max={50}
                          value={form.second.carriages}
                          onChange={(e) => setForm({ ...form, second: { ...form.second, carriages: onNum(e.target.value, 1, 50) } })}
                          className="w-full rounded-lg border border-green-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-green-700 mb-1">Rows per Carriage</label>
                        <input
                          type="number"
                          min={1}
                          max={26}
                          value={form.second.rows}
                          onChange={(e) => setForm({ ...form, second: { ...form.second, rows: onNum(e.target.value, 1, 26) } })}
                          className="w-full rounded-lg border border-green-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-700 mb-1">Seats per Row</label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={form.second.cols}
                        onChange={(e) => setForm({ ...form, second: { ...form.second, cols: onNum(e.target.value, 1, 10) } })}
                        className="w-full rounded-lg border border-green-300 bg-white px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      />
                    </div>
                    <div className="bg-green-200 rounded-lg px-4 py-3">
                      <p className="text-sm font-medium text-green-800">
                        Total Second Class Seats: <span className="font-bold text-lg">{totalSeats.second}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Summary and Actions */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="bg-blue-100 rounded-lg px-6 py-4">
                    <p className="text-lg font-semibold text-blue-800">
                      Grand Total Seats: <span className="text-2xl font-bold text-blue-900">{totalSeats.all}</span>
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => router.push("/booking")}
                      className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors inline-flex items-center gap-2"
                    >
                      <FaArrowRight /> Go to Booking
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors inline-flex items-center gap-2"
                    >
                      <FaPlus /> Add Train Schedule
                    </button>
                  </div>
                </div>
              </div>

              {message && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 font-medium" role="status">
                  {message}
                </div>
              )}
            </form>

            {/* Scheduled Trains Table */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Scheduled Trains</h2>
              {trains.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                  <p className="text-gray-500 text-lg">No trains scheduled yet.</p>
                  <p className="text-gray-400 text-sm mt-2">Add your first train schedule above.</p>
                </div>
              ) : (
                <div className="overflow-x-auto bg-white rounded-xl border border-gray-200 shadow-sm">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Train</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Class</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Second Class</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {trains.map((t, index) => (
                        <tr key={t.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{t.trainName}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.departureTime || '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.arrivalTime || '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.startStation} → {t.stopStation}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.classes?.First?.capacity ?? '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{t.classes?.Second?.capacity ?? '-'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => removeTrain(t.id)}
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium bg-red-100 text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                            >
                              <FaTrash /> Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

