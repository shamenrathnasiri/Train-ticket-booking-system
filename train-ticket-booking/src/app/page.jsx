"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import bgimage1 from '../app/images/homebg1.jpg';
import UserDateDisplay from "../components/UserDateDisplay";
import { FaTicketAlt, FaTrain } from 'react-icons/fa';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/signin");
    }
    setName(localStorage.getItem("name") || "");
  }, []);

  return (
    <><div className="relative flex flex-col items-center justify-center min-h-screen w-full">
      
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bgimage1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.5)"
          }} />
        <div className="absolute top-4 left-4 z-20">
          <UserDateDisplay />
        </div>
        <div className="absolute top-4 right-6 z-20">
          <button
            className=" px-5 py-1 rounded-full font-bold text-white bg-gradient-to-r from-red-500 to-red-600 shadow-lg hover:from-red-800 hover:to-red-900 transition-colors duration-300"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");
              router.push("/signin");
            } }
          >
            Logout
          </button>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg text-center animate-fade-in-up">
            Welcome to Train Ticket Booking System - Sri lankan Railway
          </h1>
          <p className="text-2xl font-semibold mb-8 text-gray-200 drop-shadow text-center animate-fade-in">
            Hello, {name}
          </p>

          <div className="flex gap-10">
            <button className={`bg-transparent border-2 border-white text-white rounded-3xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 w-36 h-64 flex flex-col items-center justify-center shadow-lg`} onClick={() => router.push('/booking')}>
            <FaTicketAlt size={100} color="currentColor" />
            <p className="font-semibold">Book Tickets</p>
            </button>
            <button className={`bg-transparent border-2 border-white text-white rounded-3xl hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 w-36 h-64 flex flex-col items-center justify-center shadow-lg`} onClick={() => router.push('/shedule')}>
            <FaTrain size={100} color="currentColor" />
            <p className="font-semibold">Train Schedules</p>
            </button>
          </div>
          <div className="mt-8 text-center text-white">
            <p>Choose an option to get started with your journey.</p>
          </div>
          
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
      </div></>
  );
}
