"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/signin");
    } else {
      setMsg(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-emerald-100 to-teal-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-emerald-700 animate-fade-in-up">Create an Account 📝</h2>

        {msg && <p className="text-red-500 text-center text-sm mb-4 animate-fade-in">{msg}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 animate-fade-in"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 animate-fade-in"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 animate-fade-in"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-lg transition duration-200 animate-fade-in-up"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700 animate-fade-in">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/signin")}
            className="text-emerald-700 font-semibold hover:underline animate-fade-in-up"
          >
            Sign In
          </button>
        </p>
      </div>
      {/* Tailwind custom animation styles */}
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </div>
  );
}
