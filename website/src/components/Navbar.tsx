"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Features", id: "features" },
  { label: "Installation", id: "installation" },
  { label: "Roadmap", id: "roadmap" },
  { label: "Docs", id: "docs", href: "/docs" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto h-full px-6 sm:px-8 flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="NovaStack home">
            <Image
              src="/icon.png"
              alt="NovaStack logo"
              width={26}
              height={26}
              className="rounded transition-transform duration-200 group-hover:scale-105"
              priority
            />
            <span className="font-sans font-bold text-[15px] tracking-tight text-white">
              NovaStack
            </span>
            <span className="text-[10px] bg-zinc-800/80 text-zinc-300 px-1.5 py-0.5 rounded font-mono border border-border-custom">
              v0.1.0
            </span>
          </Link>

          {/* Center Links — Desktop (Absolutely Centered) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-9 text-[13.5px] font-semibold text-zinc-400">
            {NAV_LINKS.map((link) => 
              link.href ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white/50 after:transition-all after:duration-200 hover:after:w-full"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-white transition-colors duration-200 cursor-pointer relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-white/50 after:transition-all after:duration-200 hover:after:w-full"
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </button>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.npmjs.com/package/@novastack/cli"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-950/40 bg-red-950/20 hover:bg-red-900/30 hover:border-red-500/30 text-red-400/90 hover:text-red-300 transition-all duration-200 flex items-center gap-1.5 px-3.5 py-1 rounded-md text-[12.5px] font-semibold"
              aria-label="View NovaStack on NPM"
            >
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
              </svg>
              <span className="hidden sm:inline">NPM</span>
            </a>
            <a
              href="https://github.com/Hrithik-05-Roshan/NovaStack"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/10 bg-white/5 hover:bg-white/10 hover:border-zinc-500 text-zinc-300 hover:text-white transition-all duration-200 flex items-center gap-1.5 px-3.5 py-1 rounded-md text-[12.5px] font-semibold"
              aria-label="View NovaStack on GitHub"
            >
              <Github size={14} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <button
              onClick={() => scrollToSection("installation")}
              className="bg-white text-black hover:bg-zinc-200 transition-all duration-200 px-4 py-1 rounded-md text-[12.5px] font-semibold cursor-pointer hidden sm:block"
              aria-label="Get started with NovaStack"
            >
              Get Started
            </button>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-secondary-text hover:text-primary-text transition-colors p-1"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute top-14 left-0 right-0 bg-background border-b border-border-custom p-4 space-y-1 shadow-xl">
            {NAV_LINKS.map((link) => 
              link.href ? (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-sm text-secondary-text hover:text-primary-text hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-4 py-3 text-sm text-secondary-text hover:text-primary-text hover:bg-zinc-900 rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              )
            )}
            <div className="pt-2 border-t border-border-custom/50 mt-2">
              <button
                onClick={() => scrollToSection("installation")}
                className="w-full text-center bg-white text-black py-2.5 rounded-lg text-sm font-semibold cursor-pointer hover:bg-zinc-200 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
