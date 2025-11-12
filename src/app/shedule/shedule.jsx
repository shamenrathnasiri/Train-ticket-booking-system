"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { FaPlus, FaArrowRight, FaTrash, FaStar, FaChair, FaTrain, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";
const SCHEDULES_ENDPOINT = `${API_BASE}/api/schedules`;

const buildInitialForm = () => ({
  trainName: "",
  date: "",
  departureTime: "",
  arrivalTime: "",
  startStation: "",
  stopStation: "",
  first: { carriages: 1, rows: 10, cols: 6 },
  second: { carriages: 1, rows: 10, cols: 6 },
});

/**
 * Schedule page allows configuring a train with:
 * - Train name/number and date
 * - First and Second class only
 * - Number of carriages per class
 * - Seats per carriage (rows x cols)
 * Persists the configuration via the schedules API so data is shared with the booking flow.
 */
export default function Shedule() {
  const router = useRouter();
  const [form, setForm] = useState(buildInitialForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [removingId, setRemovingId] = useState(null);

  const loadSchedules = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(SCHEDULES_ENDPOINT, { cache: "no-store" });
      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Failed to load train schedules.");
      }
      const payload = await response.json();
      const list = Array.isArray(payload?.data) ? payload.data : [];
      setTrains(list);
      setError("");
    } catch (err) {
      console.error("Error loading schedules:", err);
      setError(err.message || "Failed to load train schedules. Please try again.");
      setTrains([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSchedules();
  }, [loadSchedules]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!form.trainName || !form.date || !form.startStation || !form.stopStation) {
      setError("Please provide train name, date, start and stop stations.");
      return;
    }

    const payload = {
      trainName: form.trainName,
      date: form.date,
      departureTime: form.departureTime || "",
      arrivalTime: form.arrivalTime || "",
      startStation: form.startStation,
      stopStation: form.stopStation,
      first: {
        carriages: onNum(form.first.carriages, 1, 50),
        rows: onNum(form.first.rows, 1, 26),
        cols: onNum(form.first.cols, 1, 10),
      },
      second: {
        carriages: onNum(form.second.carriages, 1, 50),
        rows: onNum(form.second.rows, 1, 26),
        cols: onNum(form.second.cols, 1, 10),
      },
      unavailableSeats: {},
    };

    setIsSubmitting(true);
    try {
      const response = await fetch(SCHEDULES_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type") || "";
        const bodyText = await response.text();
        if (contentType.includes("application/json")) {
          try {
            const parsed = JSON.parse(bodyText);
            throw new Error(parsed?.message || bodyText);
          } catch (_) {
            throw new Error(bodyText || "Failed to create schedule.");
          }
        }
        throw new Error(bodyText || "Failed to create schedule.");
      }

      await loadSchedules();
      setMessage("Train added to schedule. You can now proceed to booking.");
      setForm(buildInitialForm());
    } catch (err) {
      console.error("Error creating schedule:", err);
      setError(err.message || "Could not create train schedule. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeTrain = async (id) => {
    setMessage("");
    setError("");
    setRemovingId(id);
    try {
      const response = await fetch(`${SCHEDULES_ENDPOINT}/${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        const bodyText = await response.text();
        throw new Error(bodyText || "Failed to remove schedule.");
      }
      setTrains((prev) => prev.filter((t) => t.id !== id));
    } catch (e) {
      console.error("Error removing train:", e);
      setError(e.message || "Failed to remove schedule. Please try again.");
    } finally {
      setRemovingId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      <div className="container mx-auto py-8 px-4 max-w-7xl">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => router.push("/")}
            className="mb-4 border-primary/20 hover:bg-primary/5"
          >
            â† Back to Home
          </Button>
          
          <Card className="border-primary/20 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FaTrain className="text-4xl text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Train Schedule Management
              </CardTitle>
              <CardDescription className="text-base">
                Create and manage train schedules with detailed seat configurations
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="border-primary/20 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <FaTrain /> Train Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="trainName" className="flex items-center gap-2">
                    <FaTrain className="text-primary text-sm" /> Train Name/Number
                  </Label>
                  <Input
                    id="trainName"
                    type="text"
                    value={form.trainName}
                    onChange={(e) => setForm({ ...form, trainName: e.target.value })}
                    placeholder="e.g., IC-101"
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date">Travel Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    required
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="departureTime" className="flex items-center gap-2">
                    <FaClock className="text-primary text-sm" /> Departure Time
                  </Label>
                  <Input
                    id="departureTime"
                    type="time"
                    value={form.departureTime}
                    onChange={(e) => setForm({ ...form, departureTime: e.target.value })}
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="arrivalTime" className="flex items-center gap-2">
                    <FaClock className="text-primary text-sm" /> Arrival Time
                  </Label>
                  <Input
                    id="arrivalTime"
                    type="time"
                    value={form.arrivalTime}
                    onChange={(e) => setForm({ ...form, arrivalTime: e.target.value })}
                    className="border-primary/20 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="startStation" className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary text-sm" /> Start Station
                  </Label>
                  <Input
                    id="startStation"
                    type="text"
                    value={form.startStation}
                    onChange={(e) => setForm({ ...form, startStation: e.target.value })}
                    placeholder="e.g., Colombo"
                    required
                    className="border-secondary/20 focus:border-secondary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="stopStation" className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary text-sm" /> Destination Station
                  </Label>
                  <Input
                    id="stopStation"
                    type="text"
                    value={form.stopStation}
                    onChange={(e) => setForm({ ...form, stopStation: e.target.value })}
                    placeholder="e.g., Kandy"
                    required
                    className="border-secondary/20 focus:border-secondary"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-amber-400/30 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-700">
                  <FaStar /> First Class Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstCarriages" className="text-amber-700">Carriages</Label>
                    <Input
                      id="firstCarriages"
                      type="number"
                      min={1}
                      max={50}
                      value={form.first.carriages}
                      onChange={(e) => setForm({ ...form, first: { ...form.first, carriages: onNum(e.target.value, 1, 50) } })}
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="firstRows" className="text-amber-700">Rows</Label>
                    <Input
                      id="firstRows"
                      type="number"
                      min={1}
                      max={26}
                      value={form.first.rows}
                      onChange={(e) => setForm({ ...form, first: { ...form.first, rows: onNum(e.target.value, 1, 26) } })}
                      className="border-amber-300 focus:border-amber-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="firstCols" className="text-amber-700">Seats per Row</Label>
                  <Input
                    id="firstCols"
                    type="number"
                    min={1}
                    max={10}
                    value={form.first.cols}
                    onChange={(e) => setForm({ ...form, first: { ...form.first, cols: onNum(e.target.value, 1, 10) } })}
                    className="border-amber-300 focus:border-amber-500"
                  />
                </div>
                <Separator className="bg-amber-200" />
                <div className="bg-amber-100 rounded-lg p-4 text-center">
                  <p className="text-sm text-amber-700 font-medium">Total Seats</p>
                  <p className="text-3xl font-bold text-amber-800">{totalSeats.first}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-400/30 bg-gradient-to-br from-green-50/50 to-emerald-50/50 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <FaChair /> Second Class Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="secondCarriages" className="text-green-700">Carriages</Label>
                    <Input
                      id="secondCarriages"
                      type="number"
                      min={1}
                      max={50}
                      value={form.second.carriages}
                      onChange={(e) => setForm({ ...form, second: { ...form.second, carriages: onNum(e.target.value, 1, 50) } })}
                      className="border-green-300 focus:border-green-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="secondRows" className="text-green-700">Rows</Label>
                    <Input
                      id="secondRows"
                      type="number"
                      min={1}
                      max={26}
                      value={form.second.rows}
                      onChange={(e) => setForm({ ...form, second: { ...form.second, rows: onNum(e.target.value, 1, 26) } })}
                      className="border-green-300 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="secondCols" className="text-green-700">Seats per Row</Label>
                  <Input
                    id="secondCols"
                    type="number"
                    min={1}
                    max={10}
                    value={form.second.cols}
                    onChange={(e) => setForm({ ...form, second: { ...form.second, cols: onNum(e.target.value, 1, 10) } })}
                    className="border-green-300 focus:border-green-500"
                  />
                </div>
                <Separator className="bg-green-200" />
                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <p className="text-sm text-green-700 font-medium">Total Seats</p>
                  <p className="text-3xl font-bold text-green-800">{totalSeats.second}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 shadow-md bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg px-6 py-4 border border-primary/20">
                  <p className="text-sm font-medium text-muted-foreground mb-1">Grand Total Seats</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {totalSeats.all}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    type="button"
                    onClick={() => router.push("/booking")}
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <FaArrowRight className="mr-2" /> Go to Booking
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    <FaPlus className="mr-2" /> {isSubmitting ? "Saving..." : "Add Train Schedule"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {message && (
            <Card className="border-green-500/50 bg-green-50">
              <CardContent className="pt-6">
                <p className="text-green-800 font-medium">{message}</p>
              </CardContent>
            </Card>
          )}
          {error && (
            <Card className="border-red-500/50 bg-red-50">
              <CardContent className="pt-6">
                <p className="text-red-800 font-medium">{error}</p>
              </CardContent>
            </Card>
          )}
        </form>

        <Card className="mt-8 border-primary/20 shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl">Scheduled Trains</CardTitle>
            <CardDescription>View and manage all scheduled train services</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12 text-muted-foreground">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
                <p>Loading train schedules...</p>
              </div>
            ) : trains.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-muted rounded-lg bg-muted/5">
                <FaTrain className="mx-auto text-4xl text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground text-lg font-medium">No trains scheduled yet</p>
                <p className="text-muted-foreground/70 text-sm mt-2">Add your first train schedule above</p>
              </div>
            ) : (
              <div className="rounded-lg border border-primary/10 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-primary/5">
                      <TableHead>Train</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Departure</TableHead>
                      <TableHead>Arrival</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead className="text-center">First Class</TableHead>
                      <TableHead className="text-center">Second Class</TableHead>
                      <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trains.map((t) => (
                      <TableRow key={t.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          <Badge variant="outline" className="bg-primary/5 border-primary/30 text-primary">
                            {t.trainName}
                          </Badge>
                        </TableCell>
                        <TableCell>{t.date}</TableCell>
                        <TableCell>{t.departureTime || '-'}</TableCell>
                        <TableCell>{t.arrivalTime || '-'}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-sm">
                            <span>{t.startStation}</span>
                            <FaArrowRight className="text-xs text-muted-foreground" />
                            <span>{t.stopStation}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="secondary" className="bg-amber-100 text-amber-700 border-amber-300">
                            {t.classes?.First?.capacity ?? '-'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-300">
                            {t.classes?.Second?.capacity ?? '-'}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Button
                            onClick={() => removeTrain(t.id)}
                            disabled={removingId === t.id}
                            variant="destructive"
                            size="sm"
                            className="gap-1"
                          >
                            <FaTrash /> {removingId === t.id ? "Removing..." : "Remove"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
