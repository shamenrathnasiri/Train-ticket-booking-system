"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SeatSelector from "@/components/SeatSelector";

export default function Booking() {
  const router = useRouter();
  const [schedules, setSchedules] = useState([]); // all from storage
  const [upcoming, setUpcoming] = useState([]); // filtered
  const [selectedTrainId, setSelectedTrainId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    from: "",
    to: "",
    date: "",
    travelClass: "First",
    tickets: 1,
  });
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [error, setError] = useState("");
  const [schedule, setSchedule] = useState(null);
  const [carriageIndex, setCarriageIndex] = useState(1); // 1-based index

  // Helpers to parse and filter schedules by time
  const toDateTime = (dateStr, timeStr) => {
    if (!dateStr) return null;
    const t = timeStr && /^\d{2}:\d{2}$/.test(timeStr) ? timeStr : "23:59"; // default end of day if missing
    const iso = `${dateStr}T${t}:00`;
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return null;
    return d;
  };
  const isUpcoming = (sc) => {
    const dt = toDateTime(sc?.date, sc?.departureTime);
    if (!dt) return true; // if no date, keep
    return dt.getTime() >= Date.now();
  };

  // Load schedules from localStorage if available
  useEffect(() => {
    try {
      const listRaw = localStorage.getItem("TRAIN_SCHEDULES");
      const list = listRaw ? JSON.parse(listRaw) : [];
      const norm = Array.isArray(list) ? list : [];
      setSchedules(norm);
      const ups = norm.filter(isUpcoming);
      setUpcoming(ups);
    } catch {}
  }, []);

  // Clamp ticket count to available capacity when class or schedule changes
  useEffect(() => {
    const cls = formData.travelClass || "First";
    const cap = schedule?.classes?.[cls]?.capacity;
    if (cap) {
      setFormData((prev) => ({
        ...prev,
        tickets: Math.max(1, Math.min(Number(prev.tickets || 1), cap)),
      }));
    }
  }, [formData.travelClass, schedule]);

  // Reset seat selections and carriage when class changes
  useEffect(() => {
    setSelectedSeats([]);
    setCarriageIndex(1);
  }, [formData.travelClass]);

  // If ticket count is reduced, trim selected seats to fit the new limit
  useEffect(() => {
    const max = Number(formData.tickets || 0);
    if (selectedSeats.length > max) {
      setSelectedSeats((prev) => prev.slice(0, max));
    }
  }, [formData.tickets]);

  // Clear error automatically when counts match
  useEffect(() => {
    const max = Number(formData.tickets || 0);
    if (selectedSeats.length === max && error) {
      setError("");
    }
  }, [selectedSeats, formData.tickets, error]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleTrainChange = (e) => {
    const id = e.target.value;
    setSelectedTrainId(id);
    if (id === "") {
      setSchedule(null);
      setSelectedSeats([]);
      setFormData((prev) => ({
        ...prev,
        from: "",
        to: "",
        date: "",
      }));
      return;
    }
    const found = upcoming.find((t) => t.id === id) || schedules.find((t) => t.id === id);
    if (found) {
      // Clamp rows to A-Z
      const clampRows = (n) => Math.max(1, Math.min(Number(n || 1), 26));
      if (found?.classes?.First) found.classes.First.rows = clampRows(found.classes.First.rows);
      if (found?.classes?.Second) found.classes.Second.rows = clampRows(found.classes.Second.rows);
      setSchedule(found);
      setCarriageIndex(1);
      setSelectedSeats([]);
      setFormData((prev) => ({
        ...prev,
        date: found.date || prev.date,
        from: found.startStation || prev.from,
        to: found.stopStation || prev.to,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!schedule) {
      setError("Please select a train before booking.");
      return;
    }

    // Basic validation: seat count must equal tickets
    const ticketCount = Number(formData.tickets || 0);
    if (selectedSeats.length !== ticketCount) {
      setError(`Please select exactly ${ticketCount} seat${ticketCount === 1 ? "" : "s"}.`);
      return;
    }

    // Ensure selected seats don't exceed capacity
    const cls = formData.travelClass || "First";
    const classCfg = schedule?.classes?.[cls];
    if (classCfg) {
      const capacity = classCfg.capacity;
      if (ticketCount < 1 || ticketCount > capacity) {
        setError(`Invalid ticket count. Available capacity for ${cls} is ${capacity}.`);
        return;
      }
    }

    const payload = {
      ...formData,
      tickets: ticketCount,
      seats: selectedSeats,
      trainId: schedule?.id,
      trainName: schedule?.trainName,
      departureTime: schedule?.departureTime,
      arrivalTime: schedule?.arrivalTime,
      startStation: schedule?.startStation,
      stopStation: schedule?.stopStation,
    };
    console.log("Booking Data:", payload);

    // Get token from localStorage (assuming you store it after login)
    const token = localStorage.getItem("token");
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const endpoint = `${API_BASE}/api/bookings`;

    const headers = {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      Accept: "application/json",
    };

    fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) {
          const contentType = res.headers.get("content-type") || "";
          const bodyText = await res.text().catch(() => "");
          // Prefer JSON error message if available
          if (contentType.includes("application/json")) {
            try {
              const json = JSON.parse(bodyText);
              const msg = json?.message || JSON.stringify(json);
              throw new Error(`Server error (${res.status}): ${msg}`);
            } catch {
              // fallthrough to text
            }
          }
          throw new Error(`Server error (${res.status}): ${bodyText || "Unexpected response"}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Success:", data);
        router.push("/confirmation");
      })
      .catch((err) => {
        console.error("Booking error:", err);
        setError(err.message || "An error occurred while booking. Please try again.");
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 pb-24">
      <div className="mb-3">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
        >
          ← Back to Home
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">Train Ticket Booking</h1>

      {upcoming.length === 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold text-amber-800">No Trains Available</h3>
          <p className="text-amber-700">There are no upcoming trains scheduled. Please visit the <a href="/shedule" className="underline hover:text-amber-900">Schedule page</a> to add train schedules before booking tickets.</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Passenger & Journey details */}
          <div className="space-y-4 bg-white rounded-xl shadow-md p-4 ring-1 ring-blue-100">
            {/* Train selection */}
            <div>
              <label className="block text-sm font-medium mb-1">Select Train</label>
              <select
                className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                value={selectedTrainId}
                onChange={handleTrainChange}
              >
                {upcoming.length === 0 ? (
                  <option value="">No upcoming trains available</option>
                ) : (
                  <option value="">Select a train</option>
                )}
                {upcoming.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.trainName}
                  </option>
                ))}
              </select>
              {schedule ? (
                <p className="mt-1 text-xs text-slate-600">
                  Train: <span className="font-medium text-slate-800">{schedule.trainName}</span>
                  <span className="mx-1">•</span>
                  {schedule.date}{schedule.departureTime ? ` ${schedule.departureTime}` : ''}
                  {schedule.arrivalTime ? ` → ${schedule.arrivalTime}` : ''}
                  <span className="mx-1">•</span>
                  Route: {schedule.startStation || '—'} → {schedule.stopStation || '—'}
                  <span className="mx-1">•</span>
                  Capacities: First {schedule.classes?.First?.capacity ?? '—'}, Second {schedule.classes?.Second?.capacity ?? '—'}
                </p>
              ) : (
                <p className="mt-1 text-xs text-amber-700">Please add trains in the schedule page or pick an upcoming train.</p>
              )}
            </div>
            {/* Passenger Details */}
            <h2 className="text-lg font-semibold text-blue-700">Passenger Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 bg-white p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
              required
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 bg-white p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                required
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <input
              type="text"
              name="contact"
              placeholder="Contact Number / Email"
              value={formData.contact}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 bg-white p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
              required
            />

            {/* Journey Details */}
            <h2 className="text-lg font-semibold pt-2 text-blue-700">Journey Details</h2>
            <label className="text-sm text-slate-600">Arrival :</label>
            <input
              type="text"
              name="from"
              placeholder="From Station"
              value={formData.from}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 bg-white p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
              required
            />
            <label className="text-sm text-slate-600">Depature :</label>
            <input
              type="text"
              name="to"
              placeholder="To Station"
              value={formData.to}
              onChange={handleChange}
              className="w-full rounded-md border border-slate-300 bg-white p-2 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
              required
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                required
              />
              <select
                name="travelClass"
                value={formData.travelClass}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData({ ...formData, travelClass: value });
                  // Reset selected seats when class changes
                  setSelectedSeats([]);
                }}
                className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                required
              >
                <option value="First">First Class</option>
                <option value="Second">Second Class</option>
              </select>
            </div>
            {schedule && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-slate-600">Departure Time</label>
                  <p className="text-sm font-medium text-slate-800">{schedule.departureTime || '—'}</p>
                </div>
                <div>
                  <label className="text-sm text-slate-600">Arrival Time</label>
                  <p className="text-sm font-medium text-slate-800">{schedule.arrivalTime || '—'}</p>
                </div>
              </div>
            )}
            <div>
              <input
                type="number"
                name="tickets"
                placeholder="Number of Tickets"
                value={formData.tickets}
                onChange={(e) => {
                  const cls = formData.travelClass || "First";
                  const cap = schedule?.classes?.[cls]?.capacity;
                  const val = Number(e.target.value || 1);
                  const next = cap ? Math.max(1, Math.min(val, cap)) : Math.max(1, val);
                  setFormData({ ...formData, tickets: next });
                }}
                className="w-full rounded-md border border-slate-300 bg-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                min={1}
                max={schedule?.classes?.[formData.travelClass || "First"]?.capacity || undefined}
                required
              />
              {schedule?.classes?.[formData.travelClass || "First"]?.capacity ? (
                <p className="text-xs text-blue-700 mt-1">
                  Capacity for {formData.travelClass}: {schedule.classes[formData.travelClass].capacity}
                </p>
              ) : null}
            </div>
          </div>

          {/* Right column: Seat selection */}
          <div className="space-y-3 bg-white rounded-xl shadow-md p-4 ring-1 ring-blue-100 md:sticky md:top-4 h-fit">
            {schedule ? (
              <>
                <h2 className="text-lg font-semibold text-blue-700">Seat Selection</h2>
                {(() => {
                  const maxSelectable = Number(formData.tickets || 0);
                  const count = selectedSeats.length;
                  const ready = count === maxSelectable && maxSelectable > 0;
                  return (
                    <div className={`inline-block text-xs px-2 py-1 rounded-full ${ready ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {count} / {maxSelectable} selected
                    </div>
                  );
                })()}
                {(() => {
                  const cls = formData.travelClass || "First";
                  const carriages = schedule?.classes?.[cls]?.carriages || 1;
                  return (
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-blue-700">Carriage:</span>
                      <select
                        className="rounded-md border border-slate-300 bg-white p-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition"
                        value={carriageIndex}
                        onChange={(e) => {
                          setCarriageIndex(Number(e.target.value || 1));
                          setSelectedSeats([]);
                        }}
                      >
                        {Array.from({ length: carriages }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                  );
                })()}
                {(() => {
                  const cls = formData.travelClass || "First";
                  const cfg = schedule?.classes?.[cls];
                  const rows = cfg?.rows ?? 10;
                  const cols = cfg?.cols ?? 6;
                  const maxSelectable = Number(formData.tickets || 0);
                  const prefix = `${cls[0]}C${carriageIndex}-`; // e.g., F C1-A1
                  const unavailable = (schedule?.unavailableSeats?.[cls] || []).filter((id) => id?.startsWith(prefix));
                  return (
                    <div className="border border-slate-200 rounded-lg p-2 bg-white">
                      <SeatSelector
                        rows={rows}
                        cols={cols}
                        maxSelectable={maxSelectable}
                        selectedSeats={selectedSeats}
                        onChange={(ids) => {
                          // ensure we keep the prefix in selected ids
                          const normalized = ids.map((id) => (id.startsWith(prefix) ? id : `${prefix}${id}`));
                          setSelectedSeats(normalized);
                        }}
                        unavailableSeats={unavailable}
                        idPrefix={prefix}
                      />
                    </div>
                  );
                })()}
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-slate-500">Please select a train first to view seat selection.</p>
              </div>
            )}
            {error && (
              <div className="text-sm text-red-700 bg-red-50 border-l-4 border-red-400 px-3 py-2 rounded" role="alert">
                {error}
              </div>
            )}
          </div>

          {/* Submit (hidden in-content; replaced by fixed footer action bar) */}
          <div className="md:col-span-2 hidden" aria-hidden="true">
            <button type="submit" className="hidden">Book Ticket</button>
          </div>
        </div>
        {/* Fixed bottom action bar */}
        <div className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {(() => {
                const need = Number(formData.tickets || 0);
                const have = selectedSeats.length;
                const ok = have === need && need > 0;
                const cls = formData.travelClass || "First";
                return (
                  <div className="flex-1 w-full text-sm text-slate-700">
                    <span className={`inline-block px-2 py-1 rounded-full mr-2 ${ok ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>{have}/{need} seats</span>
                    <span className="text-slate-600">Class: </span>
                    <span className="font-medium text-slate-800">{cls}</span>
                    {schedule?.date ? (
                      <>
                        <span className="mx-2 text-slate-400">•</span>
                        <span className="text-slate-600">Date: </span>
                        <span className="font-medium text-slate-800">{formData.date || schedule.date}</span>
                      </>
                    ) : null}
                  </div>
                );
              })()}
              <button
                type="submit"
                className="w-full sm:w-auto min-w-[180px] bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition disabled:opacity-80 disabled:bg-blue-300 disabled:cursor-not-allowed"
                disabled={!schedule || upcoming.length === 0 || !formData.travelClass || Number(formData.tickets || 0) < 1}
              >
                Book Ticket
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
