"use client";

import { useState } from "react";
import { Copy, Check, Terminal, Globe, HardDrive, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const handleCopy = (text: string, key: keyof CopyState) => {
    navigator.clipboard.writeText(text);
    setCopied((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopied((prev) => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8">
      {/* Explanation of npx vs Global */}
      <div className="mb-10 p-5 rounded-xl border border-border-custom bg-surface/30 flex items-start gap-4 text-left">
        <div className="p-2 rounded bg-zinc-900 border border-border-custom text-white shrink-0">
          <Info size={16} />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary-text mb-1">
            Understanding your Installation Options
          </h4>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed">
            NovaStack CLI package is scoped on npm as <code className="text-white bg-zinc-900 px-1 py-0.5 rounded font-mono text-xs">@novastack/cli</code>. You can run it instantly using <code className="text-white bg-zinc-900 px-1 py-0.5 rounded font-mono text-xs">npx</code> without polluting your environment, or install it globally to bind the <code className="text-white bg-zinc-900 px-1 py-0.5 rounded font-mono text-xs">novastack</code> executable directly to your system path for offline scaffolding.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Option 1: Run Instantly */}
        <div className="border border-border-custom bg-surface/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left hover:border-zinc-500 transition-all duration-300 relative group overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-full blur-2xl group-hover:bg-white/[0.03] transition-all duration-500 pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 border border-emerald-950 bg-emerald-950/20 px-2.5 py-1 rounded-full">
                Option 1 — Recommended
              </span>
              <Globe size={16} className="text-zinc-500" />
            </div>

            <h3 className="text-lg font-bold text-primary-text mb-2">Run Instantly (npx)</h3>
            <p className="text-xs sm:text-sm text-secondary-text leading-relaxed mb-6">
              Scaffold your project without installing packages permanently. This command downloads the latest version of the CLI directly from npm and executes it in one step.
            </p>

            {/* Command Display */}
            <div className="mb-4">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Command</div>
              <div className="bg-black border border-border-custom rounded-lg p-4 flex items-center justify-between font-mono text-xs sm:text-sm select-all relative overflow-hidden group/cmd">
                <span className="flex items-center gap-2 text-zinc-300">
                  <span className="text-zinc-600 select-none">$</span>
                  <span className="font-semibold text-white">npx</span>
                  <span className="text-zinc-300">@novastack/cli</span>
                  <span className="text-emerald-400">create</span>
                </span>
                
                <button
                  onClick={() => handleCopy("npx @novastack/cli create", "npx")}
                  className="text-secondary-text hover:text-primary-text transition-colors p-1.5 rounded bg-zinc-900 border border-border-custom hover:border-zinc-700 cursor-pointer shrink-0"
                  title="Copy Command"
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
            * Leaves zero local node_modules footprint on your system.
          </div>
        </div>

        {/* Option 2: Install Globally */}
        <div className="border border-border-custom bg-surface/60 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left hover:border-zinc-500 transition-all duration-300 relative group overflow-hidden">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-full blur-2xl group-hover:bg-white/[0.03] transition-all duration-500 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 border border-border-custom bg-zinc-900/50 px-2.5 py-1 rounded-full">
                Option 2
              </span>
              <HardDrive size={16} className="text-zinc-500" />
            </div>

            <h3 className="text-lg font-bold text-primary-text mb-2">Global Installation</h3>
            <p className="text-xs sm:text-sm text-secondary-text leading-relaxed mb-6">
              Install the CLI globally on your system to run the generator offline and use the short, native command directly from any folder.
            </p>

            {/* Step 1 Command */}
            <div className="mb-4">
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Step 1 — Global Install</div>
              <div className="bg-black border border-border-custom rounded-lg p-4 flex items-center justify-between font-mono text-xs sm:text-sm select-all relative overflow-hidden group/cmd">
                <span className="flex items-center gap-2 text-zinc-300">
                  <span className="text-zinc-600 select-none">$</span>
                  <span className="font-semibold text-white">npm</span>
                  <span className="text-zinc-300">install</span>
                  <span className="text-zinc-400">-g</span>
                  <span className="text-zinc-300">@novastack/cli</span>
                </span>
                
                <button
                  onClick={() => handleCopy("npm install -g @novastack/cli", "globalInstall")}
                  className="text-secondary-text hover:text-primary-text transition-colors p-1.5 rounded bg-zinc-900 border border-border-custom hover:border-zinc-700 cursor-pointer shrink-0"
                  title="Copy Command"
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
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2">Step 2 — Run Binary</div>
              <div className="bg-black border border-border-custom rounded-lg p-4 flex items-center justify-between font-mono text-xs sm:text-sm select-all relative overflow-hidden group/cmd">
                <span className="flex items-center gap-2 text-zinc-300">
                  <span className="text-zinc-600 select-none">$</span>
                  <span className="font-semibold text-emerald-400">novastack</span>
                  <span className="text-zinc-300">create</span>
                </span>
                
                <button
                  onClick={() => handleCopy("novastack create", "globalRun")}
                  className="text-secondary-text hover:text-primary-text transition-colors p-1.5 rounded bg-zinc-900 border border-border-custom hover:border-zinc-700 cursor-pointer shrink-0"
                  title="Copy Command"
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
            * CLI binary runs under the original alias "novastack" even when scoped.
          </div>
        </div>
      </div>
    </div>
  );
}
