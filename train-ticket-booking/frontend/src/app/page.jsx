"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

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
    <div>
      <h1>Welcome to Train Ticket Booking</h1>
      <p>Hello, {name}</p>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          router.push("/signin");
        }}
      >
        Logout
      </button>
    </div>
  );
}
