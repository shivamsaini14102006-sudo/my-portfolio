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

      {/* 🧭 Top-Right Navigation Bar */}
      <nav className="fixed top-6 right-6 z-50">
        <div className="border border-gray-800 bg-neutral-950/80 backdrop-blur-md px-6 py-2.5 rounded-full flex items-center gap-6 text-xs tracking-wider font-semibold shadow-xl">
          <a href="#about" className="text-gray-400 hover:text-green-400 transition uppercase">
            ABOUT
          </a>
          <a href="#projects" className="text-gray-400 hover:text-green-400 transition uppercase">
            PROJECTS
          </a>
          <a
            href="https://github.com/shivamsaini14102006-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition uppercase flex items-center gap-1.5"
          >
            <span>GITHUB</span>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </nav>

      <div className="relative z-10">

        {/* HERO */}
        <section id="about" className="max-w-5xl mx-auto pt-8">
          <p className="text-gray-500 text-sm tracking-wider flex items-center gap-2">
            <span className="text-red-500 animate-pulse font-bold">[ 404 ERROR faah!]</span>
            <span>[ SYSTEM convicted ]</span>
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight text-white">
            Building <span className="text-white">intelligent systems</span>
            <br /> for real-world uncertainty.
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl">
            I am Shivam — focused on AI/ML systems, cognitive architectures for AI agents, and intelligent evaluation pipelines. Currently engineering agent memory layers (ContextOS) and candidate ranking systems.
          </p>
        </section>

        {/* CORE FOCUS */}
        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-xl text-gray-500 mb-6">CORE FOCUS</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "ML Pipeline Evaluator",
              "ARC-AGI Development",
              "RAG & Data-Driven Systems",
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

        {/* PROJECTS */}
        <section id="projects" className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-xl text-gray-500 mb-6">PROJECTS</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Candidate Ranking & Hiring System",
                area: "ML / Ranking",
                description:
                  "A system for processing candidate datasets and ranking candidates according to configurable criteria, using ML-assisted scoring.",
                link: "https://qwertpassd.streamlit.app/",
                github: "https://github.com/shivamsaini14102006-sudo/gonnawork",
              },
              {
                title: "ContextOS",
                area: "AI Agents / AI Infrastructure",
                description:
                  "A long-term memory and cognitive-state layer for AI agents that maintains goals, decisions, constraints, reasoning state, and continuity across long-running tasks.",
              },
              {
                title: "CourseExporter",
                area: "Browser Automation / Data Extraction",
                description:
                  "A GUI-based tool for processing course reading URLs through a real browser session and exporting the corresponding JSON content into a structured local dataset.",
              },
              {
                title: "Course Library",
                area: "Backend / Data Engineering",
                description:
                  "A structured course-management system that converts large course datasets into a searchable hierarchy of courses → modules → topics → resources.",
              },
            ].map((proj) => (
              <div
                key={proj.title}
                className="border border-gray-800 p-6 rounded-xl h-full
                transform transition duration-300 ease-out
                hover:-translate-y-2 hover:scale-[1.01]
                hover:border-green-400 
                hover:shadow-[0_10px_30px_rgba(34,197,94,0.2)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-semibold hover:text-green-400 transition">
                      {proj.title}
                    </h3>
                    <div className="flex items-center gap-3 shrink-0 mt-1">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub Repository"
                          className="text-gray-400 hover:text-green-400 transition"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      )}
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live App"
                          className="text-gray-400 hover:text-green-400 transition"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>
                <p className="mt-4 text-xs text-green-400 font-semibold tracking-wide uppercase">
                  Area: {proj.area}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-xl text-gray-500 mb-6">STACK</h2>

          <div className="flex flex-wrap gap-3">
            {["Python", "C++", "Prolog", "NumPy", "pandas", "PyTorch", "MLflow", "LLM APIs", "FastAPI", "PostgreSQL", "Docker", "Cloud", "Git"].map((s) => (
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
        <section className="mt-24 max-w-5xl mx-auto text-center">
          <h2 className="text-xl text-gray-500 mb-4">CONTACT</h2>

          <div className="flex gap-6 justify-center">
            <a
              href="mailto:shivamsaini14102006@email.com"
              title="Send Email"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <a
              href="https://www.kaggle.com/shivam98saini"
              target="_blank"
              rel="noopener noreferrer"
              title="Kaggle"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.825 23.859a1.49 1.49 0 01-1.066-.444l-5.946-6.349-1.85 1.947v4.126a1.49 1.49 0 01-2.979 0V.72a1.49 1.49 0 012.979 0v11.09l7.573-7.87a1.49 1.49 0 012.14 2.077l-5.19 5.387 5.49 5.862a1.49 1.49 0 01-1.15 2.593z"/>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/shivam-saini-96815b292/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="text-gray-400 hover:text-green-400 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}