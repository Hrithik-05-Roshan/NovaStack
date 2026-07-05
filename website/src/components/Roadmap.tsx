"use client";

import { CheckCircle2, Circle } from "lucide-react";

interface Milestone {
  version: string;
  name: string;
  desc: string;
  status: "complete" | "in-progress" | "planned";
}

const MILESTONES: Milestone[] = [
  {
    version: "v0.1",
    name: "Create Command Scaffolding",
    desc: "Scaffolding of the Next.js core, Prisma schema definitions, Better Auth adapters, and Tailwind v4 setup.",
    status: "complete",
  },
  {
    version: "v0.2",
    name: "Doctor System Diagnostics",
    desc: "Configuration checks, connection pooling testing, environment variable validation, and local container auditing.",
    status: "in-progress",
  },
  {
    version: "v0.3",
    name: "Module Generator Tools",
    desc: "Interactive boilerplate generation of CRUD API endpoints, client components, and database models mapped inline.",
    status: "planned",
  },
  {
    version: "v0.4",
    name: "NovaStack Module Registry",
    desc: "Shared community module installation platform to easily add Stripe, Redis, Resend, and standard helper libraries.",
    status: "planned",
  },
  {
    version: "v1.0",
    name: "Cloud Dashboard Platform",
    desc: "Cloud sync configurations, remote templates, team standard share features, and telemetry analytics options.",
    status: "planned",
  },
];

export default function Roadmap() {
  return (
    <div className="w-full relative">
      <div className="flex flex-col space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-4 lg:gap-6 relative">
        {/* Horizontal connector line for desktop */}
        <div className="hidden md:block absolute top-[18px] left-[5%] right-[5%] h-0.5 bg-zinc-800 z-0" />

        {MILESTONES.map((stone) => {
          const isComplete = stone.status === "complete";
          const isInProgress = stone.status === "in-progress";

          return (
            <div
              key={stone.version}
              className="flex flex-col items-start text-left relative z-10"
            >
              {/* Timeline dot */}
              <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-0 mb-3">
                <div
                  className={`shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-background border relative z-10 md:mb-4 transition-colors ${
                    isComplete
                      ? "border-emerald-700/50"
                      : isInProgress
                      ? "border-blue-700/50"
                      : "border-border-custom"
                  }`}
                >
                  {isComplete ? (
                    <CheckCircle2
                      size={16}
                      className="text-emerald-400"
                    />
                  ) : isInProgress ? (
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                  ) : (
                    <Circle size={14} className="text-zinc-600" />
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block md:hidden">
                    {stone.version}
                  </span>
                  <h4 className="text-xs sm:text-sm font-mono font-bold text-primary-text block md:hidden">
                    {stone.name}
                  </h4>
                </div>
              </div>

              {/* Version & details */}
              <div className="pl-12 md:pl-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 hidden md:block">
                  {stone.version}
                </span>
                <h4 className="text-xs sm:text-sm font-sans font-bold text-primary-text mt-1 mb-2 hidden md:block">
                  {stone.name}
                </h4>
                <p className="text-xs text-secondary-text leading-relaxed">
                  {stone.desc}
                </p>

                {/* Status Badge */}
                <span
                  className={`inline-block text-[9px] font-mono mt-3 px-2.5 py-0.5 rounded-full ${
                    isComplete
                      ? "bg-emerald-950/60 text-emerald-400 border border-emerald-900/50"
                      : isInProgress
                      ? "bg-blue-950/60 text-blue-400 border border-blue-900/50"
                      : "bg-black/30 text-zinc-600 border border-border-custom/50"
                  }`}
                >
                  {stone.status.replace("-", " ")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
