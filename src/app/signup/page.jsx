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
        setMsg("Account created successfully! Please sign in.");
        // No auto-login; redirect to sign in page
        setTimeout(() => router.push("/signin"), 1200);
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
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      {/* Left Side - Details and Image with Bubbles */}
      <div className="w-1/2 relative overflow-hidden flex flex-col justify-center items-center p-8 animate-fade-in-left"
        style={{
          backgroundImage: `url('/images/signinup.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Bubble Animations */}
        <div className="absolute inset-0">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="bubble bubble-4"></div>
          <div className="bubble bubble-5"></div>
          <div className="bubble bubble-6"></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-blue-600/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full shadow-lg mb-6 animate-bounce-slow">
            <MdTrain className="text-white text-6xl" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 text-shadow">
            Sri Lanka Railway
          </h1>
          <p className="text-white text-lg mb-6 max-w-md text-shadow">
            Embark on your journey with ease. Book train tickets seamlessly and travel comfortably across Sri Lanka.
          </p>
          <div className="text-white font-semibold text-shadow">
            Join thousands of satisfied travelers
          </div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-1/2 flex items-center justify-center p-8 animate-fade-in-right">
        <div className="w-full max-w-md">
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
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
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
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(34, 197, 94, 0.3));
          animation: float linear infinite;
        }
        .bubble-1 {
          width: 40px;
          height: 40px;
          left: 10%;
          animation-duration: 15s;
          animation-delay: 0s;
        }
        .bubble-2 {
          width: 60px;
          height: 60px;
          left: 20%;
          animation-duration: 20s;
          animation-delay: 2s;
        }
        .bubble-3 {
          width: 30px;
          height: 30px;
          left: 40%;
          animation-duration: 18s;
          animation-delay: 4s;
        }
        .bubble-4 {
          width: 50px;
          height: 50px;
          left: 60%;
          animation-duration: 22s;
          animation-delay: 1s;
        }
        .bubble-5 {
          width: 35px;
          height: 35px;
          left: 80%;
          animation-duration: 16s;
          animation-delay: 3s;
        }
        .bubble-6 {
          width: 45px;
          height: 45px;
          left: 90%;
          animation-duration: 19s;
          animation-delay: 5s;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.5s both;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </div>
  );
}
