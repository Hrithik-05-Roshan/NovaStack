"use client";

import { CheckCircle2, CircleDot, Terminal, Settings, ShieldAlert, Cpu, Sparkles, FolderKanban } from "lucide-react";

interface Feature {
  title: string;
  highlights: string[];
  status: "current" | "upcoming";
  icon: React.ComponentType<{ className?: string }>;
}

const FEATURES: Feature[] = [
  {
    title: "Project Scaffolding",
    highlights: [
      "App Router with layouts",
      "TypeScript strict mode",
      "API route handlers",
      "Ready in seconds",
    ],
    status: "current",
    icon: FolderKanban,
  },
  {
    title: "Production Defaults",
    highlights: [
      "Error boundaries pre-configured",
      "Loading states included",
      "Environment templates",
      "Strict TypeScript config",
    ],
    status: "current",
    icon: Settings,
  },
  {
    title: "Docker Support",
    highlights: [
      "Multi-stage Dockerfile",
      "Optimized compose setup",
      "Dev Postgres container",
      "Zero manual config",
    ],
    status: "current",
    icon: Cpu,
  },
  {
    title: "Better Auth Integration",
    highlights: [
      "Email & password auth",
      "Prisma schema included",
      "Session management",
      "Custom auth hooks",
    ],
    status: "current",
    icon: ShieldAlert,
  },
  {
    title: "Prisma Integration",
    highlights: [
      "Client singleton pattern",
      "Schema definitions",
      "Connection pooling",
      "Migration ready",
    ],
    status: "current",
    icon: CircleDot,
  },
  {
    title: "Strict TypeScript",
    highlights: [
      "End-to-end type safety",
      "Database client types",
      "Auth helper types",
      "Environment validation",
    ],
    status: "current",
    icon: Terminal,
  },
  {
    title: "Doctor Diagnosis CLI",
    highlights: [
      "Environment variable checks",
      "Docker container auditing",
      "Schema validation",
      "Lint standard analysis",
    ],
    status: "upcoming",
    icon: Sparkles,
  },
  {
    title: "Module Generators",
    highlights: [
      "Scaffold database models",
      "Generate API routes",
      "Create UI components",
      "Convention-aligned output",
    ],
    status: "upcoming",
    icon: Cpu,
  },
  {
    title: "Plugin System",
    highlights: [
      "Custom CLI rules",
      "Template overrides",
      "Shareable presets",
      "Team standardization",
    ],
    status: "upcoming",
    icon: Settings,
  },
];

export default function Features() {
  return (
    <div className="w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {FEATURES.map((feat, idx) => {
          const isCurrent = feat.status === "current";
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className={`border rounded-xl p-6 text-left flex flex-col justify-between min-h-[200px] card-hover ${
                isCurrent
                  ? "bg-surface border-border-custom hover:border-zinc-500"
                  : "bg-black/10 border-border-custom/40 opacity-70"
              }`}
              role="article"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`p-2 rounded-lg bg-black/40 border ${
                      isCurrent
                        ? "border-border-custom text-white"
                        : "border-border-custom/50 text-zinc-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[9px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      isCurrent
                        ? "bg-emerald-950/60 text-emerald-400 border border-emerald-900/50"
                        : "bg-zinc-900/60 text-zinc-500 border border-zinc-800/50"
                    }`}
                  >
                    {feat.status}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-primary-text mb-3">
                  {feat.title}
                </h4>
                <ul className="space-y-1.5">
                  {feat.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-xs sm:text-sm text-secondary-text"
                    >
                      <span
                        className={`w-1 h-1 rounded-full shrink-0 ${
                          isCurrent ? "bg-zinc-500" : "bg-zinc-700"
                        }`}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
