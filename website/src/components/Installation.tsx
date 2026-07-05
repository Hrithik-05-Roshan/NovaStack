"use client";

import { useState } from "react";
import { Copy, Check, Globe, HardDrive, Info, Monitor } from "lucide-react";

interface CopyState {
  npx: boolean;
  globalInstall: boolean;
  globalRun: boolean;
}

export default function Installation() {
  const [copied, setCopied] = useState<CopyState>({
    npx: false,
    globalInstall: false,
    globalRun: false,
  });
  const [showToast, setShowToast] = useState<string | null>(null);

  const handleCopy = (text: string, key: keyof CopyState) => {
    navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [key]: true }));
    setShowToast(text);
    setTimeout(() => {
      setCopied((prev) => ({ ...prev, [key]: false }));
    }, 2000);
    setTimeout(() => setShowToast(null), 2500);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8">
      {/* Explanation of npx vs Global */}
      <div className="mb-10 p-5 rounded-xl border border-border-custom bg-surface/30 flex items-start gap-4 text-left">
        <div className="p-2 rounded-lg bg-zinc-900 border border-border-custom text-white shrink-0">
          <Info size={16} />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary-text mb-1">
            Understanding your Installation Options
          </h4>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
            NovaStack CLI is published as{" "}
            <code className="text-white bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs">
              @novastack/cli
            </code>{" "}
            on npm. Run it instantly with{" "}
            <code className="text-white bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs">
              npx
            </code>{" "}
            or install globally for the{" "}
            <code className="text-white bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs">
              novastack
            </code>{" "}
            command.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Option 1: Run Instantly */}
        <div className="border border-border-custom bg-surface/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left hover:border-zinc-500 transition-all duration-300 relative group overflow-hidden card-hover">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-white/[0.01] rounded-full blur-2xl group-hover:bg-white/[0.03] transition-all duration-500 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-950 bg-emerald-950/20 px-2.5 py-1 rounded-full">
                Recommended
              </span>
              <Globe size={16} className="text-zinc-500" />
            </div>

            <h3 className="text-lg font-bold text-primary-text mb-2">
              Run Instantly (npx)
            </h3>
            <p className="text-xs sm:text-sm text-secondary-text leading-relaxed mb-6">
              Scaffold your project without installing anything permanently. Downloads the latest CLI from npm and runs it.
            </p>

            {/* Command Display */}
            <div className="mb-4">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Command
              </div>
              <div className="bg-black border border-border-custom rounded-lg p-4 flex items-center justify-between font-mono text-xs sm:text-sm select-all relative overflow-hidden group/cmd hover:border-zinc-700 transition-colors">
                <span className="flex items-center gap-2 text-zinc-300">
                  <span className="text-zinc-600 select-none">$</span>
                  <span className="font-semibold text-white">npx</span>
                  <span className="text-sky-400">@novastack/cli</span>
                  <span className="text-emerald-400">create</span>
                </span>

                <button
                  onClick={() =>
                    handleCopy("npx @novastack/cli create", "npx")
                  }
                  className={`transition-all duration-200 p-1.5 rounded bg-zinc-900 border text-secondary-text hover:text-primary-text cursor-pointer shrink-0 ${
                    copied.npx
                      ? "border-emerald-500/40 text-emerald-400"
                      : "border-border-custom hover:border-zinc-700"
                  }`}
                  title="Copy Command"
                  aria-label="Copy npx command"
                >
                  {copied.npx ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-zinc-500 italic mt-4">
            Zero local footprint — no global install needed.
          </div>
        </div>

        {/* Option 2: Install Globally */}
        <div className="border border-border-custom bg-surface/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left hover:border-zinc-500 transition-all duration-300 relative group overflow-hidden card-hover">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-28 h-28 bg-white/[0.01] rounded-full blur-2xl group-hover:bg-white/[0.03] transition-all duration-500 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 border border-border-custom bg-zinc-900/50 px-2.5 py-1 rounded-full">
                Global Install
              </span>
              <HardDrive size={16} className="text-zinc-500" />
            </div>

            <h3 className="text-lg font-bold text-primary-text mb-2">
              Global Installation
            </h3>
            <p className="text-xs sm:text-sm text-secondary-text leading-relaxed mb-6">
              Install globally for offline scaffolding and the short native command.
            </p>

            {/* Step 1 Command */}
            <div className="mb-4">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Step 1 — Install
              </div>
              <div className="bg-black border border-border-custom rounded-lg p-4 flex items-center justify-between font-mono text-xs sm:text-sm select-all relative overflow-hidden group/cmd hover:border-zinc-700 transition-colors">
                <span className="flex items-center gap-2 text-zinc-300">
                  <span className="text-zinc-600 select-none">$</span>
                  <span className="font-semibold text-white">npm</span>
                  <span className="text-zinc-300">install</span>
                  <span className="text-zinc-400">-g</span>
                  <span className="text-sky-400">@novastack/cli</span>
                </span>

                <button
                  onClick={() =>
                    handleCopy(
                      "npm install -g @novastack/cli",
                      "globalInstall"
                    )
                  }
                  className={`transition-all duration-200 p-1.5 rounded bg-zinc-900 border text-secondary-text hover:text-primary-text cursor-pointer shrink-0 ${
                    copied.globalInstall
                      ? "border-emerald-500/40 text-emerald-400"
                      : "border-border-custom hover:border-zinc-700"
                  }`}
                  title="Copy Command"
                  aria-label="Copy global install command"
                >
                  {copied.globalInstall ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </div>

            {/* Step 2 Command */}
            <div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Step 2 — Run
              </div>
              <div className="bg-black border border-border-custom rounded-lg p-4 flex items-center justify-between font-mono text-xs sm:text-sm select-all relative overflow-hidden group/cmd hover:border-zinc-700 transition-colors">
                <span className="flex items-center gap-2 text-zinc-300">
                  <span className="text-zinc-600 select-none">$</span>
                  <span className="font-semibold text-emerald-400">
                    novastack
                  </span>
                  <span className="text-zinc-300">create</span>
                </span>

                <button
                  onClick={() =>
                    handleCopy("novastack create", "globalRun")
                  }
                  className={`transition-all duration-200 p-1.5 rounded bg-zinc-900 border text-secondary-text hover:text-primary-text cursor-pointer shrink-0 ${
                    copied.globalRun
                      ? "border-emerald-500/40 text-emerald-400"
                      : "border-border-custom hover:border-zinc-700"
                  }`}
                  title="Copy Command"
                  aria-label="Copy novastack create command"
                >
                  {copied.globalRun ? (
                    <Check size={14} className="text-emerald-400" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-zinc-500 italic mt-6">
            CLI runs as &quot;novastack&quot; even when scoped as @novastack/cli.
          </div>
        </div>
      </div>

      {/* Platform Support Badges */}
      <div className="mt-10 p-5 rounded-xl border border-border-custom bg-surface/20 text-center">
        <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
          Platform Support
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4" role="list" aria-label="Supported platforms">
          {[
            { name: "Windows", icon: "⊞" },
            { name: "macOS", icon: "⌘" },
            { name: "Linux", icon: "🐧" },
          ].map((platform) => (
            <div
              key={platform.name}
              role="listitem"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 border border-border-custom text-sm text-zinc-300 font-medium"
            >
              <span className="text-emerald-400 text-xs">✓</span>
              <span className="text-base" aria-hidden="true">{platform.icon}</span>
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-zinc-600 mt-4">
          Requires Node.js ≥ 18.0.0
        </p>
      </div>

      {/* Copy toast */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-toast-in">
          <div className="flex items-center gap-2 bg-emerald-950/90 border border-emerald-800/50 text-emerald-300 text-xs font-mono px-4 py-2.5 rounded-lg shadow-lg backdrop-blur-sm">
            <Check size={14} />
            <span>Copied to clipboard</span>
          </div>
        </div>
      )}
    </div>
  );
}
