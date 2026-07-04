"use client";

import { Github, Star, GitFork, Shield, Users, Download } from "lucide-react";

export default function OpenSource() {
  return (
    <div className="w-full border border-border-custom bg-black/40 rounded-lg overflow-hidden flex flex-col md:flex-row items-stretch">
      {/* Left side - Information */}
      <div className="flex-1 p-6 sm:p-8 text-left flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-1 rounded bg-black/40 border border-border-custom text-white">
              <Github size={16} />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
              GitHub Repository
            </span>
          </div>

          <h3 className="text-2xl font-bold font-sans text-primary-text mb-3">
            100% Open Source & Community-First
          </h3>
          
          <p className="text-sm sm:text-base text-secondary-text leading-relaxed mb-6">
            NovaStack is licensed under the permissive MIT License. We believe in transparency, local ownership of code, and community-driven expansion. There are no proprietary lock-ins or telemetry tracking scripts active in core commands.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="p-1 rounded border border-border-custom mt-0.5 text-white">
                <Shield size={14} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-primary-text">MIT License</h4>
                <p className="text-xs text-secondary-text mt-0.5">Use it in commercial or personal projects freely.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 rounded border border-border-custom mt-0.5 text-white">
                <Users size={14} />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-primary-text">Contributors Welcome</h4>
                <p className="text-xs text-secondary-text mt-0.5">Submit pull requests, issue fixes, or template proposals.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border-custom/40">
          <a
            href="https://github.com/novastack/novastack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded border border-white/20 bg-surface px-6 text-xs font-semibold hover:border-white transition-colors"
          >
            Join the GitHub Community
          </a>
        </div>
      </div>

      {/* Right side - Stats display panel */}
      <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-border-custom bg-black/20 p-6 sm:p-8 flex flex-col justify-center gap-6 shrink-0 text-left">
        <div>
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-1">
            CLI Statistics
          </span>
          <div className="text-lg font-bold text-primary-text">novastack@0.1.0</div>
        </div>

        <div className="space-y-4">
          {/* Star stat */}
          <div className="flex items-center justify-between border-b border-border-custom/40 pb-3">
            <div className="flex items-center gap-2 text-secondary-text text-xs">
              <Star size={14} />
              <span>GitHub Stars</span>
            </div>
            <span className="font-mono text-xs text-primary-text font-bold">1.2k</span>
          </div>

          {/* Fork stat */}
          <div className="flex items-center justify-between border-b border-border-custom/40 pb-3">
            <div className="flex items-center gap-2 text-secondary-text text-xs">
              <GitFork size={14} />
              <span>Forks</span>
            </div>
            <span className="font-mono text-xs text-primary-text font-bold">84</span>
          </div>

          {/* Download stat */}
          <div className="flex items-center justify-between border-b border-border-custom/40 pb-3">
            <div className="flex items-center gap-2 text-secondary-text text-xs">
              <Download size={14} />
              <span>NPM Downloads</span>
            </div>
            <span className="font-mono text-xs text-primary-text font-bold">12.5k / week</span>
          </div>
        </div>

        <div className="text-[10px] text-zinc-500 italic leading-snug">
          Updated live from the package registry and open git hooks.
        </div>
      </div>
    </div>
  );
}
