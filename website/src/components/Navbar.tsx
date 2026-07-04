"use client";

import Link from "next/link";
import { Terminal, Github } from "lucide-react";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass h-14">
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black font-bold text-sm transition-transform group-hover:scale-105">
            N
          </div>
          <span className="font-sans font-bold text-sm tracking-tight text-primary-text">
            NovaStack
          </span>
          <span className="text-[10px] bg-zinc-800 text-secondary-text px-1.5 py-0.5 rounded font-mono border border-border-custom">
            v0.1.0
          </span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium text-secondary-text">
          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-primary-text transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("installation")}
            className="hover:text-primary-text transition-colors cursor-pointer"
          >
            Installation
          </button>
          <button
            onClick={() => scrollToSection("commands")}
            className="hover:text-primary-text transition-colors cursor-pointer"
          >
            Commands
          </button>
          <button
            onClick={() => scrollToSection("architecture")}
            className="hover:text-primary-text transition-colors cursor-pointer"
          >
            Architecture
          </button>
          <button
            onClick={() => scrollToSection("roadmap")}
            className="hover:text-primary-text transition-colors cursor-pointer"
          >
            Roadmap
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Hrithik-05-Roshan/NovaStack"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary-text hover:text-primary-text transition-colors flex items-center gap-1.5 text-xs font-medium"
          >
            <Github size={15} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <button
            onClick={() => scrollToSection("installation")}
            className="bg-white text-black hover:bg-zinc-200 transition-colors px-3 py-1.5 rounded text-xs font-semibold cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
