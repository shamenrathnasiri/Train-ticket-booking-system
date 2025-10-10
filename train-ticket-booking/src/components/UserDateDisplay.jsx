"use client";
import { useEffect, useState } from "react";

export default function UserDateDisplay() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [name, setName] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setName(localStorage.getItem("name") || "");
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center text-white">
      <span className="ml-2 font-semibold">{name}</span>
      <span className="ml-4 text-sm">|</span>
      <span className="ml-4 text-sm">
        {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
      </span>
      <span className="ml-2 text-sm font-mono">{currentTime.toLocaleTimeString()}</span>
    </div>
  );
}
