"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdTrain } from "react-icons/md";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiOutlineLock } from "react-icons/ai";

export default function SignUp() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "", phone: "" });
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("error");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMsgType("success");
        setMsg("Account created successfully! Redirecting...");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        
        setTimeout(() => router.push("/"), 1500);
      } else {
        setMsgType("error");
        setMsg(data.error || "Failed to create account");
      }
    } catch (error) {
      setMsgType("error");
      setMsg("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50 py-8 px-4">
      <div className="w-full max-w-md">
        {/* Decorative header with train icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-lg mb-4 animate-bounce-slow">
            <MdTrain className="text-white text-4xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Sri Lanka Railway
            </span>
          </h1>
          <p className="text-gray-600 text-sm">Book your journey with ease</p>
        </div>

        {/* Main form card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500"></div>

          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Create Account</h2>
            <p className="text-center text-gray-500 text-sm mb-6">Join millions of travelers</p>

            {/* Message Alert */}
            {msg && (
              <div
                className={`mb-6 p-4 rounded-lg text-sm font-medium animate-slide-down ${
                  msgType === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {msg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name Input */}
              <div className="relative">
                <div className="flex items-center bg-gray-50 rounded-lg border-2 border-gray-200 focus-within:border-blue-500 focus-within:bg-blue-50 transition-all duration-300">
                  <AiOutlineUser className="ml-4 text-gray-400 text-xl" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm font-medium"
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    value={form.fullName}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="flex items-center bg-gray-50 rounded-lg border-2 border-gray-200 focus-within:border-blue-500 focus-within:bg-blue-50 transition-all duration-300">
                  <AiOutlineMail className="ml-4 text-gray-400 text-xl" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm font-medium"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    value={form.email}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="relative">
                <div className="flex items-center bg-gray-50 rounded-lg border-2 border-gray-200 focus-within:border-green-500 focus-within:bg-green-50 transition-all duration-300">
                  <AiOutlinePhone className="ml-4 text-gray-400 text-xl" />
                  <input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm font-medium"
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    value={form.phone}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="flex items-center bg-gray-50 rounded-lg border-2 border-gray-200 focus-within:border-teal-500 focus-within:bg-teal-50 transition-all duration-300">
                  <AiOutlineLock className="ml-4 text-gray-400 text-xl" />
                  <input
                    type="password"
                    placeholder="Password (Min 6 characters)"
                    className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm font-medium"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    value={form.password}
                    required
                    disabled={loading}
                    minLength={6}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none text-base mt-2"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Sign In Link */}
            <div className="mt-8 text-center border-t border-gray-200 pt-6">
              <p className="text-gray-600 text-sm">
                Already have an account?{" "}
                <button
                  onClick={() => router.push("/signin")}
                  className="text-blue-600 font-bold hover:text-green-600 transition-colors duration-300"
                >
                  Sign In
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-500 text-xs mt-6">
          By creating an account, you agree to our Terms & Conditions
        </p>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
