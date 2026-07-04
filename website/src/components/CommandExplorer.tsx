"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CommandDetail {
  name: string;
  description: string;
  usage: string;
  output: string;
  flags: { name: string; desc: string }[];
}

const COMMANDS: CommandDetail[] = [
  {
    name: "novastack create",
    description: "Initialize and scaffold a new full-stack Next.js project with the pre-configured golden stack.",
    usage: "npx novastack create [project-name] [options]",
    output: `Creating project: my-app
✔ Rendering templates
✔ Writing files
✔ Installing dependencies
✔ Initializing git
Project is ready! Run "cd my-app && npm run dev" to start.`,
    flags: [
      { name: "[name]", desc: "Name of the project directory (optional)" },
      { name: "--no-install", desc: "Skip dependency installation" },
      { name: "--no-git", desc: "Skip initializing git repository" },
    ],
  },
  {
    name: "novastack doctor",
    description: "Run diagnostic checks on your project to detect missing files, environment variable configuration errors, database connection status, and linting problems.",
    usage: "npx novastack doctor",
    output: `🔍 Analyzing project health...
✔ Environment variables: OK
✔ Database connection: OK
⚠ Prettier configuration: Warnings found (run format)
✔ Docker Compose: OK
Health checks complete.`,
    flags: [
      { name: "--fix", desc: "Attempt to automatically resolve simple warnings" },
    ],
  },
  {
    name: "novastack generate",
    description: "Create standard boilerplate models, components, API endpoints, or full pages directly mapped to your active architecture.",
    usage: "npx novastack generate <type> <name>",
    output: `Generating API route for "users"...
✔ Created src/app/api/users/route.ts
✔ Added Prisma schema modifications
✔ Regenerated Prisma Client`,
    flags: [
      { name: "api", desc: "Generate a fully typed API route" },
      { name: "model", desc: "Generate a database model and push migrations" },
      { name: "component", desc: "Generate a client/server UI component" },
      { name: "page", desc: "Generate a page layout with routes" },
    ],
  },
  {
    name: "novastack add",
    description: "Integrate optional features, third-party libraries, or plugins into your project after creation.",
    usage: "npx novastack add <module>",
    output: `Installing additional module "resend"...
✔ Configured Resend email client in src/lib/email.ts
✔ Added API endpoint at src/app/api/send/route.ts
✔ Package resend installed successfully`,
    flags: [
      { name: "resend", desc: "Add Resend email configuration" },
      { name: "stripe", desc: "Integrate Stripe payment system" },
      { name: "redis", desc: "Add Redis cache connection and client" },
    ],
  },
  {
    name: "novastack update",
    description: "Detect updates for Next.js, Prisma, Tailwind, and Better Auth. Performs safe dependency upgrades.",
    usage: "npx novastack update",
    output: `Checking for updates...
✔ Prisma: Up to date (v6.2.0)
✔ Next.js: Up to date (v15.1.0)
Updates complete.`,
    flags: [
      { name: "--force", desc: "Force dependency updates ignoring warnings" },
    ],
  },
];

export default function CommandExplorer() {
  const [selectedCommand, setSelectedCommand] = useState<CommandDetail>(COMMANDS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedCommand.usage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-surface border border-border-custom rounded-lg overflow-hidden flex flex-col md:flex-row min-h-[400px]">
      {/* Sidebar - commands list */}
      <div className="w-full md:w-1/3 border-r-0 md:border-r border-b md:border-b-0 border-border-custom bg-black/20 p-2 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar shrink-0">
        {COMMANDS.map((cmd) => {
          const isSelected = selectedCommand.name === cmd.name;
          return (
            <button
              key={cmd.name}
              onClick={() => setSelectedCommand(cmd)}
              className={`px-4 py-3 text-left rounded text-xs font-mono transition-all whitespace-nowrap md:whitespace-normal cursor-pointer ${
                isSelected
                  ? "bg-white text-black font-semibold"
                  : "text-secondary-text hover:text-primary-text hover:bg-zinc-900"
              }`}
            >
              {cmd.name}
            </button>
          );
        })}
      </div>

      {/* Details pane */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-between text-left">
        <div>
          <div className="flex items-center justify-between border-b border-border-custom pb-4 mb-4">
            <h3 className="text-lg font-bold font-sans text-primary-text">
              {selectedCommand.name}
            </h3>
            <span className="text-[10px] uppercase tracking-wider text-secondary-text font-mono border border-border-custom px-2 py-0.5 rounded">
              Command
            </span>
          </div>

          <p className="text-sm text-secondary-text mb-6">
            {selectedCommand.description}
          </p>

          {/* Usage block */}
          <div className="mb-6">
            <div className="text-[11px] uppercase tracking-wider text-secondary-text font-mono mb-2">
              Usage
            </div>
            <div className="bg-black border border-border-custom rounded px-4 py-3 flex items-center justify-between font-mono text-xs">
              <span className="text-primary-text">{selectedCommand.usage}</span>
              <button
                onClick={handleCopy}
                className="text-secondary-text hover:text-primary-text transition-colors p-1"
                title="Copy Command"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Flags */}
          {selectedCommand.flags.length > 0 && (
            <div className="mb-6">
              <div className="text-[11px] uppercase tracking-wider text-secondary-text font-mono mb-2">
                Options / Flags
              </div>
              <div className="space-y-2">
                {selectedCommand.flags.map((flag) => (
                  <div
                    key={flag.name}
                    className="flex justify-between items-start border-b border-border-custom/50 pb-2 text-xs"
                  >
                    <span className="font-mono text-white min-w-[120px]">{flag.name}</span>
                    <span className="text-secondary-text text-right flex-1">{flag.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Output simulator */}
        <div>
          <div className="text-[11px] uppercase tracking-wider text-secondary-text font-mono mb-2">
            Output
          </div>
          <pre className="bg-black/60 border border-border-custom/80 rounded p-4 font-mono text-xs text-secondary-text overflow-x-auto whitespace-pre-wrap">
            {selectedCommand.output}
          </pre>
        </div>
      </div>
    </div>
  );
}
