"use client";
import { useEffect, useState } from "react";
import { FaClock } from 'react-icons/fa';

export default function UserDateDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const formatDate = currentTime.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric' 
  });

  const formatTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
      <FaClock className="text-green-300 text-sm" />
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
        <span className="text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
          {formatDate}
        </span>
        <span className="hidden sm:inline text-gray-400">•</span>
        <span className="text-xs sm:text-sm font-mono text-green-200 whitespace-nowrap">
          {formatTime}
        </span>
      </div>
    </div>
  );
}
