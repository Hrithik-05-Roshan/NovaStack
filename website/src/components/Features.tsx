"use client";

import { CheckCircle2, CircleDot, Terminal, Settings, ShieldAlert, Cpu, Sparkles, FolderKanban } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  status: "current" | "upcoming";
  icon: React.ComponentType<{ className?: string }>;
}

const FEATURES: Feature[] = [
  {
    title: "Project Scaffolding",
    description: "Initialize full-stack structure with standard Next.js layouts, App Router endpoints, client utils, and models instantly.",
    status: "current",
    icon: FolderKanban,
  },
  {
    title: "Production Defaults",
    description: "Comes with standard setups for error handling, global loading views, environment variable templates, and strict TypeScript configurations.",
    status: "current",
    icon: Settings,
  },
  {
    title: "Docker Support",
    description: "Includes a production-ready multi-stage Dockerfile and an optimized compose file for development Postgres instances.",
    status: "current",
    icon: Cpu,
  },
  {
    title: "Better Auth Integration",
    description: "Includes predefined Prisma schemas and Next.js handlers for email and password authentication out of the box.",
    status: "current",
    icon: ShieldAlert,
  },
  {
    title: "Prisma Integration",
    description: "Database connection pools, seeding setups, schema structures, and client singletons prepared for high scale.",
    status: "current",
    icon: CircleDot,
  },
  {
    title: "Strict TypeScript",
    description: "Types defined for database clients, scaffolding pipelines, env validations, and authentication helpers.",
    status: "current",
    icon: Terminal,
  },
  {
    title: "Doctor Diagnosis CLI",
    description: "Analyze environment variable setup, Docker container status, schema validity, and linting standards directly in the terminal.",
    status: "upcoming",
    icon: Sparkles,
  },
  {
    title: "Module Generators",
    description: "Execute short commands to scaffold database tables, API routes, layout pages, and UI modules inline with project conventions.",
    status: "upcoming",
    icon: Cpu,
  },
  {
    title: "NovaStack Plugin System",
    description: "Build, distribute, and install custom CLI rules and template overrides to share project standards across teams.",
    status: "upcoming",
    icon: Settings,
  },
];

export default function Features() {
  return (
    <div className="w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feat, idx) => {
          const isCurrent = feat.status === "current";
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className={`border rounded-lg p-6 text-left flex flex-col justify-between min-h-[180px] transition-all ${
                isCurrent
                  ? "bg-surface border-border-custom hover:border-zinc-500"
                  : "bg-black/10 border-border-custom/40 opacity-75"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded bg-black/40 border ${isCurrent ? "border-border-custom text-white" : "border-border-custom/50 text-zinc-600"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                      isCurrent
                        ? "bg-emerald-950/60 text-emerald-400 border border-emerald-900/50"
                        : "bg-zinc-900/60 text-zinc-500 border border-zinc-800/50"
                    }`}
                  >
                    {feat.status}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-primary-text mb-2">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
