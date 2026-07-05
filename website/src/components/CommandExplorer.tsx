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
    description: "Scaffold a full-stack Next.js project with the golden stack.",
    usage: "npx @novastack/cli create [project-name] [options]",
    output: `Creating project: my-app
✔ Rendering templates
✔ Writing files
✔ Installing dependencies
✔ Initializing git
Project is ready! Run "cd my-app && npm run dev" to start.`,
    flags: [
      { name: "[name]", desc: "Project directory name (optional)" },
      { name: "--no-install", desc: "Skip dependency installation" },
      { name: "--no-git", desc: "Skip initializing git" },
    ],
  },
  {
    name: "novastack doctor",
    description: "Diagnose project health: env vars, Docker, schema, linting.",
    usage: "npx @novastack/cli doctor",
    output: `🔍 Analyzing project health...
✔ Environment variables: OK
✔ Database connection: OK
⚠ Prettier configuration: Warnings found (run format)
✔ Docker Compose: OK
Health checks complete.`,
    flags: [
      { name: "--fix", desc: "Auto-resolve simple warnings" },
    ],
  },
  {
    name: "novastack generate",
    description: "Generate models, components, API routes, or pages.",
    usage: "npx @novastack/cli generate <type> <name>",
    output: `Generating API route for "users"...
✔ Created src/app/api/users/route.ts
✔ Added Prisma schema modifications
✔ Regenerated Prisma Client`,
    flags: [
      { name: "api", desc: "Generate a typed API route" },
      { name: "model", desc: "Generate a database model" },
      { name: "component", desc: "Generate a UI component" },
      { name: "page", desc: "Generate a page layout" },
    ],
  },
  {
    name: "novastack add",
    description: "Add optional modules or third-party integrations.",
    usage: "npx @novastack/cli add <module>",
    output: `Installing module "resend"...
✔ Configured Resend client in src/lib/email.ts
✔ Added API endpoint at src/app/api/send/route.ts
✔ Package resend installed successfully`,
    flags: [
      { name: "resend", desc: "Resend email configuration" },
      { name: "stripe", desc: "Stripe payment integration" },
      { name: "redis", desc: "Redis cache client" },
    ],
  },
  {
    name: "novastack update",
    description: "Check and upgrade core stack dependencies safely.",
    usage: "npx @novastack/cli update",
    output: `Checking for updates...
✔ Prisma: Up to date (v6.2.0)
✔ Next.js: Up to date (v15.1.0)
Updates complete.`,
    flags: [
      { name: "--force", desc: "Force updates ignoring warnings" },
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
    <div className="w-full bg-surface border border-border-custom rounded-xl overflow-hidden flex flex-col md:flex-row min-h-[420px]">
      {/* Sidebar - commands list */}
      <div
        className="w-full md:w-1/3 border-r-0 md:border-r border-b md:border-b-0 border-border-custom bg-black/20 p-2 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar shrink-0"
        role="tablist"
        aria-label="CLI Commands"
      >
        {COMMANDS.map((cmd) => {
          const isSelected = selectedCommand.name === cmd.name;
          return (
            <button
              key={cmd.name}
              onClick={() => setSelectedCommand(cmd)}
              role="tab"
              aria-selected={isSelected}
              className={`px-4 py-3.5 text-left rounded-lg text-xs font-mono transition-all whitespace-nowrap md:whitespace-normal cursor-pointer ${
                isSelected
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-secondary-text hover:text-primary-text hover:bg-zinc-900"
              }`}
            >
              {cmd.name}
            </button>
          );
        })}
      </div>

      {/* Details pane */}
      <div
        className="w-full md:w-2/3 p-6 sm:p-8 flex flex-col justify-between text-left"
        role="tabpanel"
      >
        <div>
          <div className="flex items-center justify-between border-b border-border-custom pb-4 mb-5">
            <h3 className="text-lg font-bold font-sans text-primary-text">
              {selectedCommand.name}
            </h3>
            <span className="text-[10px] uppercase tracking-wider text-secondary-text font-mono border border-border-custom px-2 py-0.5 rounded">
              Command
            </span>
          </div>

          <p className="text-sm text-secondary-text mb-6 leading-relaxed">
            {selectedCommand.description}
          </p>

          {/* Usage block */}
          <div className="mb-6">
            <div className="text-[10px] uppercase tracking-widest text-secondary-text font-mono mb-2">
              Usage
            </div>
            <div className="bg-black border border-border-custom rounded-lg px-4 py-3 flex items-center justify-between font-mono text-xs hover:border-zinc-700 transition-colors">
              <span className="text-primary-text">{selectedCommand.usage}</span>
              <button
                onClick={handleCopy}
                className={`transition-all duration-200 p-1.5 rounded text-secondary-text hover:text-primary-text cursor-pointer ${
                  copied ? "text-emerald-400" : ""
                }`}
                title="Copy Command"
                aria-label="Copy usage command"
              >
                {copied ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
          </div>

          {/* Flags */}
          {selectedCommand.flags.length > 0 && (
            <div className="mb-6">
              <div className="text-[10px] uppercase tracking-widest text-secondary-text font-mono mb-3">
                Options
              </div>
              <div className="space-y-2">
                {selectedCommand.flags.map((flag) => (
                  <div
                    key={flag.name}
                    className="flex justify-between items-start border-b border-border-custom/40 pb-2.5 text-xs"
                  >
                    <span className="font-mono text-white min-w-[120px]">
                      {flag.name}
                    </span>
                    <span className="text-secondary-text text-right flex-1">
                      {flag.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Output simulator */}
        <div>
          <div className="text-[10px] uppercase tracking-widest text-secondary-text font-mono mb-2">
            Output
          </div>
          <pre className="bg-black/60 border border-border-custom/80 rounded-lg p-4 font-mono text-xs text-secondary-text overflow-x-auto whitespace-pre-wrap leading-relaxed">
            {selectedCommand.output}
          </pre>
        </div>
      </div>
    </div>
  );
}
