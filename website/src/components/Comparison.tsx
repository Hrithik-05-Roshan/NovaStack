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

export default function Comparison() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Manual Setup Column */}
      <div className="border border-border-custom bg-black/40 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
              <X size={12} />
            </div>
            <h3 className="text-base font-bold text-secondary-text font-sans">
              Manual Integration
            </h3>
          </div>
          <div className="space-y-6">
            {ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-border-custom/50 pb-4 last:border-b-0 last:pb-0 text-left">
                <div className="text-[10px] uppercase font-mono text-zinc-500 mb-1">
                  {item.feature}
                </div>
                <p className="text-xs sm:text-sm text-secondary-text">
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
      <div className="border border-white/20 bg-surface rounded-lg p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
        {/* Subtle accent indicator */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/2 rounded-full blur-3xl pointer-events-none" />
        
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 rounded bg-white flex items-center justify-center text-black">
              <Check size={12} />
            </div>
            <h3 className="text-base font-bold text-primary-text font-sans">
              NovaStack Golden path
            </h3>
          </div>
          <div className="space-y-6">
            {ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-border-custom/50 pb-4 last:border-b-0 last:pb-0 text-left">
                <div className="text-[10px] uppercase font-mono text-zinc-400 mb-1">
                  {item.feature}
                </div>
                <p className="text-xs sm:text-sm text-primary-text font-medium">
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
  );
}
