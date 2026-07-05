"use client";

import { useState, useEffect, useRef } from "react";
import { Copy, Check, Github, Terminal, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import Features from "@/components/Features";
import Installation from "@/components/Installation";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

/* ───────────────────────────────────────
   Intersection Observer for fade-in sections
   ─────────────────────────────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function FadeInSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const commandText = "npx @novastack/cli create";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setShowToast(true);
    setTimeout(() => setCopied(false), 2000);
    setTimeout(() => setShowToast(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col bg-background text-primary-text">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-transparent pointer-events-none z-0" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-24 sm:pt-28 pb-16 px-4 max-w-5xl mx-auto w-full text-center flex flex-col items-center z-10"
        aria-label="Hero section"
      >
        {/* Release tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border-custom bg-black/40 text-[11px] font-mono text-zinc-400 mb-10 select-none hover:border-zinc-600 transition-colors">
          <Terminal size={12} className="text-zinc-500" />
          <span>NovaStack CLI v0.1.0 — Now Available</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-primary-text max-w-3xl leading-[1.08] mb-6 font-sans">
          Build production-ready apps{" "}
          <span className="gradient-text">before your coffee gets cold.</span>
        </h1>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base lg:text-lg text-secondary-text max-w-2xl leading-relaxed mb-12">
          Generate production-ready Next.js applications with Prisma, Better
          Auth, PostgreSQL, Docker, Tailwind CSS, and modern best practices —
          using a single command.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          <button
            onClick={() => scrollToSection("installation")}
            className="h-11 px-7 rounded-lg bg-white text-black font-semibold text-sm flex items-center justify-center gap-2.5 hover:bg-zinc-200 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-white/10 focus-visible:outline-white"
            aria-label="Get started with NovaStack"
          >
            Scaffold your first project
            <ArrowRight size={15} />
          </button>
          <a
            href="https://github.com/Hrithik-05-Roshan/NovaStack"
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 px-7 rounded-lg border border-border-custom bg-surface text-primary-text font-semibold text-sm flex items-center justify-center gap-2.5 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-200 cursor-pointer"
            aria-label="View NovaStack on GitHub"
          >
            <Github size={15} />
            View on GitHub
          </a>
        </div>

        {/* Copyable Code Command */}
        <div
          onClick={handleCopy}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleCopy();
          }}
          tabIndex={0}
          role="button"
          aria-label={`Copy command: ${commandText}`}
          className={`flex items-center justify-between gap-3 bg-black/80 border rounded-lg px-5 py-3.5 text-xs sm:text-sm font-mono max-w-sm sm:max-w-md w-full mb-16 select-all cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] relative group overflow-hidden ${
            copied
              ? "border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.08)]"
              : "border-border-custom hover:border-zinc-700"
          }`}
        >
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar flex-1 pr-2">
            <span className="text-zinc-600 select-none mr-1">$</span>
            <span className="text-purple-400 font-bold">npx</span>
            <span className="text-sky-400">@novastack/cli</span>
            <span className="text-emerald-400">create</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className={`transition-all duration-200 p-1.5 rounded bg-zinc-950 border border-border-custom text-secondary-text hover:text-primary-text cursor-pointer shrink-0 ${
              copied
                ? "border-emerald-500/40 text-emerald-400"
                : "hover:border-zinc-700"
            }`}
            title="Copy Command"
            aria-label="Copy command to clipboard"
          >
            {copied ? (
              <Check size={14} className="text-emerald-400" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>

        {/* Copy success toast */}
        {showToast && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-toast-in">
            <div className="flex items-center gap-2 bg-emerald-950/90 border border-emerald-800/50 text-emerald-300 text-xs font-mono px-4 py-2.5 rounded-lg shadow-lg backdrop-blur-sm">
              <Check size={14} />
              <span>Copied to clipboard</span>
            </div>
          </div>
        )}

        {/* Interactive Terminal Demo */}
        <div className="w-full flex justify-center">
          <InteractiveTerminal />
        </div>
      </section>

      {/* Features Grid */}
      <FadeInSection
        id="features"
        className="py-14 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50"
      >
        <div className="text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-3">
              Core Features
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
              Engineered for DX
            </h2>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-2" role="list" aria-label="Project attributes">
            {[
              { label: "Open Source", color: "bg-emerald-500" },
              { label: "TypeScript Native", color: "bg-blue-500" },
              { label: "MIT License", color: "bg-amber-500" },
              { label: "Developer First", color: "bg-indigo-500" },
              { label: "Zero Vendor Lock-in", color: "bg-rose-500" },
            ].map((badge) => (
              <span
                key={badge.label}
                role="listitem"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono bg-zinc-900/60 text-zinc-300 border border-border-custom hover:border-zinc-700 transition-colors duration-300"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${badge.color}`}
                  aria-hidden="true"
                />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
        <Features />
      </FadeInSection>

      {/* Installation Section */}
      <FadeInSection
        id="installation"
        className="py-14 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50"
      >
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-3">
            Installation
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            Get started in seconds.
          </h2>
        </div>
        <Installation />
      </FadeInSection>

      {/* Roadmap timeline */}
      <FadeInSection
        id="roadmap"
        className="py-14 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50"
      >
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block mb-3">
            Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            Development Milestones
          </h2>
        </div>
        <Roadmap />
      </FadeInSection>

      {/* Final CTA Section */}
      <FadeInSection
        id="cta"
        className="py-16 px-4 max-w-6xl mx-auto w-full text-center flex flex-col items-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary-text mb-4 font-sans">
          Ready to accelerate your workflow?
        </h2>
        <p className="text-sm sm:text-base text-secondary-text max-w-lg mb-10 leading-relaxed">
          Get started with NovaStack today. Scaffold a complete production-ready application with a single CLI command.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => scrollToSection("installation")}
            className="h-11 px-7 rounded-lg bg-white text-black font-semibold text-sm flex items-center justify-center gap-2.5 hover:bg-zinc-200 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-white/10"
          >
            Start scaffolding
            <ArrowRight size={15} />
          </button>
          <a
            href="/docs"
            className="h-11 px-7 rounded-lg border border-border-custom bg-surface text-primary-text font-semibold text-sm flex items-center justify-center gap-2.5 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-200"
          >
            Read the docs
          </a>
        </div>
      </FadeInSection>

      {/* Footer */}
      <Footer />
    </div>
  );
}
