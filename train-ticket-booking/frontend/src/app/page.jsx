"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import bgimage1 from '../app/images/homebg1.jpg';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    }
  }, []);

  const name = typeof window !== "undefined" ? localStorage.getItem("name") : "";

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full">
      {/* Background image with reduced brightness */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgimage1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)"
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg text-center animate-fade-in-up">
          Welcome to Train Ticket Booking System - Sri lankan Railway
        </h1>
        <p className="text-2xl font-semibold mb-8 text-gray-200 drop-shadow text-center animate-fade-in">
          Hello, {name}
        </p>
        <button
          className="px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r from-green-900 to-blue-800 shadow-lg hover:from-red-900 hover:to-pink-900 transition-colors duration-300"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("name");
            router.push("/signin");
          }}
        >
          Logout
        </button>
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
