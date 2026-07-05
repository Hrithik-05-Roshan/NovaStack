"use client";

import { X, Check } from "lucide-react";

interface ComparisonItem {
  feature: string;
  manual: string;
  novaStack: string;
}

const ITEMS: ComparisonItem[] = [
  {
    feature: "Initial Setup Time",
    manual: "Typically 1 to 2 hours of copy-pasting configs",
    novaStack: "30 seconds with a single command",
  },
  {
    feature: "Decision Fatigue",
    manual: "Evaluating multiple ORMs, auth providers, and template frameworks",
    novaStack: "Pre-selected golden stack of industry-standard tools",
  },
  {
    feature: "Version Compatibility",
    manual: "Debugging peer dependency conflicts between Next.js, Prisma, and React 19",
    novaStack: "Guaranteed lockfile compilation with verified, tested packages",
  },
  {
    feature: "Authentication Integration",
    manual: "Setting up custom tables, JWT sessions, and client hooks manually",
    novaStack: "Ready-to-use Better Auth configuration with login, schema, and API routes",
  },
  {
    feature: "Container Configuration",
    manual: "Writing optimal multi-stage Dockerfiles and compose setups manually",
    novaStack: "Production-ready Docker build stages pre-configured from start",
  },
  {
    feature: "Folder Architecture",
    manual: "Ad-hoc structuring of app/ routes, components, and library client files",
    novaStack: "Consistent layout optimized for performance and team scaling",
  },
];

/* Feature comparison table data */
const TABLE_FEATURES = [
  { name: "Prisma ORM", novastack: true, createNextApp: false },
  { name: "PostgreSQL", novastack: true, createNextApp: false },
  { name: "Docker", novastack: true, createNextApp: false },
  { name: "Better Auth", novastack: true, createNextApp: false },
  { name: "Production Defaults", novastack: true, createNextApp: false },
  { name: "One Command", novastack: true, createNextApp: true },
  { name: "TypeScript", novastack: true, createNextApp: true },
  { name: "Tailwind CSS", novastack: true, createNextApp: true },
];

export default function Comparison() {
  return (
    <div className="w-full space-y-16">
      {/* Side-by-side comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {/* Manual Setup Column */}
        <div className="border border-border-custom bg-black/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between card-hover">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-6 h-6 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
                <X size={13} />
              </div>
              <h3 className="text-base font-bold text-secondary-text font-sans">
                Manual Integration
              </h3>
            </div>
            <div className="space-y-5">
              {ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="border-b border-border-custom/50 pb-4 last:border-b-0 last:pb-0 text-left"
                >
                  <div className="text-[10px] uppercase font-mono text-zinc-500 mb-1.5 tracking-wider">
                    {item.feature}
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
                    {item.manual}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-border-custom/40 text-left text-xs text-zinc-500 italic">
            Result: High configuration latency, context switching, brittle setup.
          </div>
        </div>

        {/* NovaStack Column */}
        <div className="border border-white/20 bg-surface rounded-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden card-hover">
          {/* Subtle accent indicator */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center text-black">
                <Check size={13} />
              </div>
              <h3 className="text-base font-bold text-primary-text font-sans">
                NovaStack Golden Path
              </h3>
            </div>
            <div className="space-y-5">
              {ITEMS.map((item, idx) => (
                <div
                  key={idx}
                  className="border-b border-border-custom/50 pb-4 last:border-b-0 last:pb-0 text-left"
                >
                  <div className="text-[10px] uppercase font-mono text-zinc-400 mb-1.5 tracking-wider">
                    {item.feature}
                  </div>
                  <p className="text-xs sm:text-sm text-primary-text font-medium leading-relaxed">
                    {item.novaStack}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-border-custom/40 text-left text-xs text-zinc-400 font-medium">
            Result: Zero latency, ready for production instantly, clean builds.
          </div>
        </div>
      </div>

      {/* Feature comparison table */}
      <div className="border border-border-custom rounded-xl overflow-hidden bg-surface/50">
        <div className="px-6 py-4 border-b border-border-custom/50 bg-black/20">
          <h3 className="text-sm font-bold text-primary-text font-sans">
            Feature Comparison
          </h3>
          <p className="text-xs text-secondary-text mt-1">
            NovaStack vs create-next-app out of the box
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left" role="table">
            <thead>
              <tr className="border-b border-border-custom/50">
                <th className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-6 py-3 font-medium">
                  Feature
                </th>
                <th className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-6 py-3 font-medium text-center">
                  NovaStack
                </th>
                <th className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 px-6 py-3 font-medium text-center">
                  create-next-app
                </th>
              </tr>
            </thead>
            <tbody>
              {TABLE_FEATURES.map((row, idx) => (
                <tr
                  key={row.name}
                  className={`border-b border-border-custom/30 last:border-b-0 transition-colors hover:bg-white/[0.02] ${
                    idx % 2 === 0 ? "bg-transparent" : "bg-black/10"
                  }`}
                >
                  <td className="text-xs sm:text-sm text-primary-text px-6 py-3 font-medium">
                    {row.name}
                  </td>
                  <td className="px-6 py-3 text-center">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-950/60 text-emerald-400">
                      <Check size={12} />
                    </span>
                  </td>
                  <td className="px-6 py-3 text-center">
                    {row.createNextApp ? (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-950/60 text-emerald-400">
                        <Check size={12} />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-zinc-800/60 text-zinc-600">
                        <X size={12} />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
