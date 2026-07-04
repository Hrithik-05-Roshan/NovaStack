"use client";

import { Terminal, Shield, FileCode, CheckCircle, Database, Package } from "lucide-react";

interface Node {
  id: string;
  name: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NODES: Node[] = [
  {
    id: "cli",
    name: "CLI Interface",
    desc: "Captures user input and overrides flags.",
    icon: Terminal,
  },
  {
    id: "blueprint",
    name: "Blueprint Engine",
    desc: "Resolves dependency lockfiles and core targets.",
    icon: Shield,
  },
  {
    id: "modules",
    name: "Modules",
    desc: "Configures settings for Auth, DB, Docker, and UI.",
    icon: Package,
  },
  {
    id: "renderer",
    name: "Template Renderer",
    desc: "Compiles TypeScript template source files.",
    icon: FileCode,
  },
  {
    id: "generator",
    name: "Project Gen",
    desc: "Writes project workspace files to local disk.",
    icon: Database,
  },
  {
    id: "app",
    name: "Production App",
    desc: "A fully runnable, production-ready system.",
    icon: CheckCircle,
  },
];

export default function ArchitectureDiagram() {
  return (
    <div className="w-full border border-border-custom bg-black/40 rounded-lg p-6 sm:p-8 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/2 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 relative z-10">
        {NODES.map((node, idx) => {
          const Icon = node.icon;
          return (
            <div key={node.id} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
              {/* Node Card */}
              <div className="bg-surface border border-border-custom hover:border-zinc-500 transition-all rounded p-4 text-left w-full sm:w-64 lg:w-44 shrink-0">
                <div className="flex items-center gap-2 mb-2 text-zinc-300">
                  <div className="p-1 rounded bg-black/40 border border-border-custom">
                    <Icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                    Step 0{idx + 1}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-primary-text mb-1">
                  {node.name}
                </h4>
                <p className="text-[11px] text-secondary-text leading-snug">
                  {node.desc}
                </p>
              </div>

              {/* Connector line (desktop: right arrow, mobile: down arrow) */}
              {idx < NODES.length - 1 && (
                <div className="flex items-center justify-center my-3 lg:my-0 lg:mx-2 shrink-0">
                  <div className="h-6 w-0.5 lg:h-0.5 lg:w-8 bg-zinc-800 relative">
                    <div className="absolute bottom-0 lg:bottom-auto lg:right-0 w-1.5 h-1.5 bg-zinc-600 rounded-full -translate-x-[25%] translate-y-[25%] lg:translate-x-0 lg:translate-y-[-50%]" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 pt-6 border-t border-border-custom/40 text-left flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
        <div className="text-secondary-text max-w-xl leading-relaxed">
          The NovaStack compiler pipelines user requirements through a structured assembly layer, compiling dynamic templates directly to local system directories with zero external runtime overhead.
        </div>
        <span className="font-mono text-zinc-500 text-[10px] whitespace-nowrap">
          Compiler pipeline version 1.0.0
        </span>
      </div>
    </div>
  );
}
