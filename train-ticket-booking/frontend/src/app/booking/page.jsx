"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Booking() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    from: "",
    to: "",
    date: "",
    travelClass: "",
    tickets: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);

    // Get token from localStorage (assuming you store it after login)
    const token = localStorage.getItem("token");

    fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        router.push("/confirmation");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Train Ticket Booking</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Passenger Details */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="text"
          name="contact"
          placeholder="Contact Number / Email"
          value={formData.contact}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />

        {/* Journey Details */}
        <input
          type="text"
          name="from"
          placeholder="From Station"
          value={formData.from}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          name="to"
          placeholder="To Station"
          value={formData.to}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        />
        <select
          name="travelClass"
          value={formData.travelClass}
          onChange={handleChange}
          className="w-full border rounded p-2"
          required
        >
          <option value="">Select Class</option>
          <option value="First">First Class</option>
          <option value="Second">Second Class</option>
          <option value="Third">Third Class</option>
        </select>
        <input
          type="number"
          name="tickets"
          placeholder="Number of Tickets"
          value={formData.tickets}
          onChange={handleChange}
          className="w-full border rounded p-2"
          min="1"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Book Ticket
        </button>
      </form>
    </div>
  );
}
