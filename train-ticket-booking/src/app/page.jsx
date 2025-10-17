"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import bgimage1 from '../app/images/homebg1.jpg';
import UserDateDisplay from "../components/UserDateDisplay";
import { FaTicketAlt, FaTrain, FaSignOutAlt } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
      return;
    }
    
    setName(localStorage.getItem("name") || "");
    setMounted(true);

    // Fetch user full name from database
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/auth/me", {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          if (data.user && data.user.fullName) {
            setFullName(data.user.fullName);
          }
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!mounted) return null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    router.push("/signin");
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${bgimage1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/40 to-slate-900/60" />

      {/* Top Navigation Bar */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-r from-slate-900/80 via-green-900/70 to-slate-900/80 backdrop-blur-md border-b border-green-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
              <FaTrain className="text-white text-lg" />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-lg font-bold text-white">Sri Lankan Railway</h2>
              <p className="text-xs text-green-300">Ticket Booking System</p>
            </div>
          </div>
          
          <UserDateDisplay />
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <FaSignOutAlt className="text-sm" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center w-full min-h-screen pt-24 pb-12 px-4 sm:px-6">
        
        {/* Welcome Section */}
        <div className="text-center mb-12 lg:mb-16 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 text-white drop-shadow-lg leading-tight animate-fade-in-up">
            Welcome to Train Ticket Booking
          </h1>
          <p className="text-lg sm:text-xl text-green-200 mb-2 drop-shadow animate-fade-in">
            Hello, <span className="font-bold text-green-300">{fullName || name || "Traveler"}</span>
          </p>
          <p className="text-sm sm:text-base text-gray-300 drop-shadow">
            Your journey starts here. Choose an option below to continue.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mb-12">
          
          {/* Book Tickets Card */}
          <button
            onClick={() => router.push('/booking')}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-blue-400/30 hover:border-blue-300/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="mb-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <FaTicketAlt className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Book Tickets</h3>
              <p className="text-blue-100 text-sm">Search and book your train tickets easily</p>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-transparent bg-gradient-to-r from-blue-300 to-green-300 p-[2px]" />
          </button>

          {/* Train Schedules Card */}
          <button
            onClick={() => router.push('/shedule')}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-600 to-green-800 p-8 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 border border-green-400/30 hover:border-green-300/50"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full">
              <div className="mb-6 p-4 rounded-xl bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300">
                <FaTrain className="text-5xl text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Train Schedules</h3>
              <p className="text-green-100 text-sm">Check train timings and availability</p>
            </div>

            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-transparent bg-gradient-to-r from-green-300 to-blue-300 p-[2px]" />
          </button>
        </div>

        {/* Info Section */}
        <div className="text-center text-gray-200 max-w-md">
          <p className="text-sm sm:text-base leading-relaxed">
            <span className="block mb-2">✓ Quick and easy booking process</span>
            <span className="block">✓ Real-time train availability</span>
          </p>
        </div>
      </div>

      {/* Animated gradient elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.2s backwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
