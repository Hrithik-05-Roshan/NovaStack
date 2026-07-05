"use client";

import { Github, Shield, Users, Heart, Code2, Scale } from "lucide-react";

export default function OpenSource() {
  return (
    <div className="w-full border border-border-custom bg-black/40 rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch">
      {/* Left side - Information */}
      <div className="flex-1 p-6 sm:p-8 text-left flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-1.5 rounded-lg bg-black/40 border border-border-custom text-white">
              <Github size={16} />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
              GitHub Repository
            </span>
          </div>

          <h3 className="text-2xl font-bold font-sans text-primary-text mb-3">
            100% Open Source & Community-First
          </h3>

          <p className="text-sm sm:text-base text-secondary-text leading-relaxed mb-8">
            NovaStack is licensed under the permissive MIT License. We believe in transparency, local ownership of code, and community-driven expansion. No proprietary lock-ins or telemetry tracking.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg border border-border-custom mt-0.5 text-white shrink-0">
                <Shield size={14} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-primary-text">
                  MIT License
                </h4>
                <p className="text-xs text-secondary-text mt-0.5">
                  Free for commercial and personal use.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg border border-border-custom mt-0.5 text-white shrink-0">
                <Users size={14} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-primary-text">
                  Contributors Welcome
                </h4>
                <p className="text-xs text-secondary-text mt-0.5">
                  PRs, issues, and template proposals open.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-custom/40">
          <a
            href="https://github.com/Hrithik-05-Roshan/NovaStack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-white/20 bg-surface px-6 text-xs font-semibold hover:border-white hover:bg-zinc-900 transition-all duration-200"
            aria-label="View NovaStack on GitHub"
          >
            <Github size={14} className="mr-2" />
            View on GitHub
          </a>
        </div>
      </div>

      {/* Right side - Trust signals (replaces fake stats) */}
      <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-border-custom bg-black/20 p-6 sm:p-8 flex flex-col justify-center gap-5 shrink-0 text-left">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
            Project Details
          </span>
          <div className="text-lg font-bold text-primary-text">
            @novastack/cli
          </div>
          <div className="text-xs text-zinc-500 font-mono mt-1">
            v0.1.0 — Initial Release
          </div>
        </div>

        <div className="space-y-3.5">
          {[
            { icon: Scale, label: "MIT License", value: "Open Source" },
            { icon: Code2, label: "Language", value: "TypeScript" },
            { icon: Shield, label: "Runtime", value: "Node.js ≥ 18" },
            { icon: Heart, label: "Maintained by", value: "Hrithik Burnwal" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center justify-between border-b border-border-custom/40 pb-3 last:border-b-0 last:pb-0"
              >
                <div className="flex items-center gap-2 text-secondary-text text-xs">
                  <Icon size={14} />
                  <span>{item.label}</span>
                </div>
                <span className="font-mono text-xs text-primary-text font-medium">
                  {item.value}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-2 pt-3 border-t border-border-custom/30">
          <a
            href="https://github.com/Hrithik-05-Roshan/NovaStack/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-zinc-400 hover:text-primary-text transition-colors"
          >
            Report an issue →
          </a>
        </div>
      </div>
    </div>
  );
}
