"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-custom bg-black/40 py-12 text-left">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded bg-white flex items-center justify-center text-black font-bold text-xs">
              N
            </div>
            <span className="font-sans font-bold text-xs tracking-tight text-primary-text">
              NovaStack
            </span>
          </div>
          <p className="text-[11px] text-zinc-500 max-w-sm">
            Scaffold production-ready Next.js applications in minutes. Zero configuration, zero decision fatigue.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-4 text-[11px] text-zinc-400 font-medium">
          <a
            href="https://github.com/novastack/novastack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-text transition-colors"
          >
            GitHub
          </a>
          <a href="#features" className="hover:text-primary-text transition-colors">
            Features
          </a>
          <a href="#commands" className="hover:text-primary-text transition-colors">
            Commands
          </a>
          <a href="#roadmap" className="hover:text-primary-text transition-colors">
            Roadmap
          </a>
          <a href="#faq" className="hover:text-primary-text transition-colors">
            FAQ
          </a>
          <a
            href="https://github.com/novastack/novastack/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-text transition-colors"
          >
            MIT License
          </a>
          <a
            href="https://github.com/sponsors/novastack"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-text transition-colors"
          >
            Sponsor
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-border-custom/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] text-zinc-600 font-mono">
        <span>© {currentYear} NovaStack. All rights reserved.</span>
        <span>Crafted by developers for developers.</span>
      </div>
    </footer>
  );
}
