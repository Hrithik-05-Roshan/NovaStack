"use client";

import { useState } from "react";
import { Copy, Check, Github, Terminal, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import InteractiveTerminal from "@/components/InteractiveTerminal";
import TrustedTech from "@/components/TrustedTech";
import Comparison from "@/components/Comparison";
import GoldenStack from "@/components/GoldenStack";
import Features from "@/components/Features";
import CommandExplorer from "@/components/CommandExplorer";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Roadmap from "@/components/Roadmap";
import OpenSource from "@/components/OpenSource";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const commandText = "npx novastack create";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      <section id="hero" className="relative pt-32 pb-20 px-4 max-w-6xl mx-auto w-full text-center flex flex-col items-center z-10">
        {/* Release tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border-custom bg-black/40 text-[10px] font-mono text-zinc-400 mb-8 select-none">
          <Terminal size={11} className="text-zinc-500" />
          <span>NovaStack CLI MVP is officially live</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary-text max-w-3xl leading-[1.1] mb-6 font-sans">
          Build production-ready applications before your coffee gets cold.
        </h1>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base lg:text-lg text-secondary-text max-w-xl leading-relaxed mb-10">
          Opinionated open-source CLI that scaffolds modern full-stack Next.js applications with optimal configuration and production defaults.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button
            onClick={() => scrollToSection("features")}
            className="h-10 px-6 rounded bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors cursor-pointer"
          >
            Get Started
            <ArrowRight size={13} />
          </button>
          <a
            href="https://github.com/novastack/novastack"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-6 rounded border border-border-custom bg-surface text-primary-text font-semibold text-xs flex items-center justify-center gap-2 hover:border-zinc-500 transition-colors"
          >
            <Github size={14} />
            View GitHub
          </a>
        </div>

        {/* Copyable Code Command */}
        <div className="flex items-center justify-between gap-3 bg-surface border border-border-custom rounded-md px-4 py-2 text-xs font-mono max-w-xs w-full mb-16 select-all">
          <span className="text-zinc-400">$</span>
          <span className="text-primary-text text-left flex-1 font-semibold pl-1">
            {commandText}
          </span>
          <button
            onClick={handleCopy}
            className="text-secondary-text hover:text-primary-text transition-colors p-1 cursor-pointer"
            title="Copy Command"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
        </div>

        {/* Interactive Terminal Demo */}
        <div className="w-full flex justify-center mt-4">
          <InteractiveTerminal />
        </div>
      </section>

      {/* Core foundations logo list */}
      <TrustedTech />

      {/* Why NovaStack (Comparison) */}
      <section id="comparison" className="py-20 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50">
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
            Comparison
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            Why NovaStack?
          </h2>
        </div>
        <Comparison />
      </section>

      {/* Golden Stack visualization */}
      <section id="golden-stack" className="py-20 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50">
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
            The Stack Blueprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            The Golden Stack
          </h2>
        </div>
        <GoldenStack />
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50">
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
            Core Features
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            Engineered for DX
          </h2>
        </div>
        <Features />
      </section>

      {/* Commands Explorer */}
      <section id="commands" className="py-20 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50">
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
            CLI reference
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            Command Directory
          </h2>
        </div>
        <CommandExplorer />
      </section>

      {/* System Architecture */}
      <section id="architecture" className="py-20 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50">
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
            System Assembly
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            Internal Pipeline Architecture
          </h2>
        </div>
        <ArchitectureDiagram />
      </section>

      {/* Roadmap timeline */}
      <section id="roadmap" className="py-20 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50">
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
            Timeline
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            Development Milestones
          </h2>
        </div>
        <Roadmap />
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 max-w-6xl mx-auto w-full border-b border-border-custom/50">
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            Questions & Answers
          </h2>
        </div>
        <FAQ />
      </section>

      {/* Open Source / Community */}
      <section id="open-source" className="py-20 px-4 max-w-6xl mx-auto w-full mb-12">
        <div className="text-left mb-12">
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
            Open Source
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary-text">
            Built in Public
          </h2>
        </div>
        <OpenSource />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
