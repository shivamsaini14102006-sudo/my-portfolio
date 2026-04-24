"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="relative bg-black text-white min-h-screen px-6 py-16 font-mono overflow-hidden">

      {/* 🌌 Dynamic Background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            600px at ${position.x}px ${position.y}px,
            rgba(59, 180, 85, 0.25),
          
            transparent 90%
          )`
        }}
      />

      <div className="relative z-10">

        {/* HERO */}
        <section className="max-w-5xl mx-auto">
          <p className="text-gray-500 text-sm tracking-wider">
            [ SYSTEM INITIALIZED ]
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight transition duration-300 hover:text-purple-400">
            Building <span className="text-purple-400">intelligent systems</span>
            <br /> for real-world uncertainty.
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl">
            I am Shivam — focused on AI/ML systems and market prediction models.
            Currently engineering a trading intelligence system for Indian markets.
          </p>
        </section>

        {/* CORE FOCUS */}
        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-xl text-gray-500 mb-6">CORE FOCUS</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "AI System Design",
              "Market Prediction Models",
              "Data-driven Decision Systems",
            ].map((item) => (
              <div
                key={item}
                className="border border-gray-800 p-5 rounded-xl 
                hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] 
                transition duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT */}
        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-xl text-gray-500 mb-6">ACTIVE PROJECT</h2>

<div
  className="border border-gray-800 p-6 rounded-xl 
  transform transition duration-300 ease-out
  hover:-translate-y-2 hover:scale-[1.02]
  hover:border-green-300 
  hover:shadow-[0_20px_40px_rgba(34,197,94,0.25)]"
>
  <h3 className="text-2xl font-semibold hover:text-green-400 transition">
    AI Trading System
  </h3>

  <p className="mt-4 text-gray-400">
    Developing a system that interprets market structure, identifies patterns,
    and produces high-confidence predictions using technical indicators
    and probabilistic reasoning.
  </p>

  <p className="mt-4 text-gray-300 text-sm">
    Focus: Indian Industrial Market • Accuracy-Oriented Design
  </p>
</div>
        </section>

        {/* SKILLS */}
        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-xl text-gray-500 mb-6">STACK</h2>

          <div className="flex flex-wrap gap-3">
            {["C", "Python", "Machine Learning", "Data Analysis", "Git"].map((s) => (
              <span
                key={s}
                className="border border-gray-700 px-3 py-1 text-sm rounded-md 
                hover:border-green-400 hover:text-green-400 transition"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-xl text-gray-500 mb-4">CONTACT</h2>

          <p className="text-gray-400 hover:text-green-400 transition">
            shivamsaini14102006@email.com
          </p>
        </section>

      </div>
    </main>
  );
}