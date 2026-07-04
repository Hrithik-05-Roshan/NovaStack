"use client";

import { useState } from "react";
import { ArrowDown, Layers, Terminal, ShieldCheck, Database, Compass, Container } from "lucide-react";

interface StackItem {
  id: string;
  name: string;
  description: string;
  badge: string;
  details: string;
}

const ITEMS: StackItem[] = [
  {
    id: "next",
    name: "Next.js 15",
    description: "Framework Layer",
    badge: "Framework",
    details: "Configured with App Router, server actions, optimized layouts, and standard error boundaries. Zero runtime configuration needed.",
  },
  {
    id: "ts",
    name: "TypeScript",
    description: "Typing Layer",
    badge: "Language",
    details: "Strict compiler settings pre-configured. Direct integration with Prisma types, Better Auth schemas, and API handlers.",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS v4",
    description: "Styling Layer",
    badge: "CSS",
    details: "Pure styling without CSS configurations. Leverages native PostCSS bundling and modern design token variables.",
  },
  {
    id: "prisma",
    name: "Prisma Client",
    description: "Database ORM",
    badge: "ORM",
    details: "Initialized client singleton with query logging. Prevents connection leaks in development hot reloads.",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    description: "Database Engine",
    badge: "Database",
    details: "Battle-tested SQL container ready out of the box with schema migrations and development seeding options.",
  },
  {
    id: "auth",
    name: "Better Auth",
    description: "Identity / Security",
    badge: "Authentication",
    details: "Self-hosted sessions, password hashing, and user tables built directly into your database schema. Custom hooks included.",
  },
  {
    id: "docker",
    name: "Docker Setup",
    description: "Containerization",
    badge: "Deployment",
    details: "Multi-stage production build script separating build assets from runtime. Runs on any container engine or host platform.",
  },
];

export default function GoldenStack() {
  const [activeItem, setActiveItem] = useState<string>("next");

  const selected = ITEMS.find((item) => item.id === activeItem) || ITEMS[0];

  return (
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
      {/* Left side - Visual Ladder */}
      <div className="flex-1 flex flex-col justify-between max-w-lg mx-auto lg:mx-0 w-full space-y-4">
        {ITEMS.map((item, idx) => {
          const isActive = item.id === activeItem;
          return (
            <div key={item.id} className="flex flex-col items-center">
              <button
                onMouseEnter={() => setActiveItem(item.id)}
                onClick={() => setActiveItem(item.id)}
                className={`w-full py-4 px-6 rounded border text-left transition-all relative cursor-pointer ${
                  isActive
                    ? "bg-white text-black border-white shadow-lg"
                    : "bg-surface text-secondary-text border-border-custom hover:border-zinc-500 hover:text-primary-text"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${isActive ? "text-zinc-600" : "text-zinc-500"}`}>
                      {item.description}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold mt-0.5">{item.name}</h4>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${isActive ? "border-zinc-400 bg-zinc-100" : "border-border-custom bg-black/40"}`}>
                    {item.badge}
                  </span>
                </div>
              </button>

              {idx < ITEMS.length - 1 && (
                <div className="my-2 text-zinc-700 flex items-center justify-center h-4">
                  <ArrowDown size={14} className="animate-pulse" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right side - Technical Spec */}
      <div className="flex-1 border border-border-custom bg-black/40 rounded-lg p-6 sm:p-8 flex flex-col justify-between text-left">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 border border-border-custom px-2 py-0.5 rounded">
              Blueprint Spec
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </div>

          <h3 className="text-2xl font-bold font-sans text-primary-text mb-2">
            {selected.name}
          </h3>
          
          <div className="text-[10px] font-mono text-zinc-400 mb-6 uppercase tracking-wider">
            Layer Type: {selected.description}
          </div>

          <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
            {selected.details}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border-custom/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-zinc-500">
            <ShieldCheck size={14} />
            <span>Audited & verified dependency configuration</span>
          </div>
          <span className="font-mono text-zinc-400 text-[10px]">
            {"Target: node >= 18.0.0"}
          </span>
        </div>
      </div>
    </div>
  );
}
