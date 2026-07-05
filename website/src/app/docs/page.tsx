"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Terminal, 
  Copy, 
  Check, 
  ChevronRight, 
  Menu, 
  X, 
  BookOpen, 
  Code, 
  Layers, 
  Settings, 
  ExternalLink,
  ChevronDown,
  Info
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sidebar navigation items
const SECTIONS = [
  { id: "getting-started", label: "Getting Started" },
  { id: "installation", label: "Installation" },
  { id: "quick-start", label: "Quick Start" },
  { id: "project-structure", label: "Project Structure" },
  { id: "features", label: "Features" },
  { id: "commands", label: "Commands" },
  { id: "templates", label: "Templates" },
  { id: "environment-variables", label: "Environment Variables" },
  { id: "deployment", label: "Deployment" },
  { id: "faq", label: "FAQ" }
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Scrollspy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // offset for sticky header

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 80; // account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setActiveSection(id);
      setSidebarOpen(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <div className="relative min-h-screen bg-background text-primary-text flex flex-col">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent pointer-events-none z-0" />

      {/* Main Navbar */}
      <Navbar />

      {/* Docs Layout */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-4 pt-20 pb-16 flex flex-col md:flex-row gap-8 relative z-10">
        
        {/* Mobile Sidebar Toggle - sticky below navbar */}
        <div className="md:hidden sticky top-14 left-0 right-0 z-30 bg-background/95 backdrop-blur-md border-b border-border-custom/50 py-3 mb-4 flex items-center justify-between">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border-custom bg-surface text-xs font-semibold text-zinc-300 hover:text-white"
            aria-label="Toggle documentation navigation menu"
          >
            <Menu size={14} />
            <span>Table of Contents</span>
          </button>
          <span className="text-xs font-mono text-zinc-500">
            {SECTIONS.find(s => s.id === activeSection)?.label || "Getting Started"}
          </span>
        </div>

        {/* Left Sidebar - Fixed on desktop, overlay on mobile */}
        <aside 
          className={`
            fixed md:sticky md:top-24 z-40 md:z-10
            top-0 bottom-0 left-0 w-72 md:w-64
            bg-background/98 md:bg-transparent border-r md:border-r-0 border-border-custom/50 p-6 md:p-0
            transition-transform duration-300 ease-in-out md:transform-none md:h-[calc(100vh-120px)] md:overflow-y-auto no-scrollbar
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          {/* Mobile sidebar header close button */}
          <div className="flex items-center justify-between mb-6 md:hidden">
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-sky-400" />
              <span className="font-bold text-sm">Documentation</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="p-1 rounded-lg border border-border-custom hover:bg-zinc-900"
              aria-label="Close sidebar"
            >
              <X size={16} />
            </button>
          </div>

          <div className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-4 hidden md:block">
            Documentation
          </div>

          <nav className="space-y-1.5" role="navigation" aria-label="Documentation sidebar">
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    w-full text-left px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-between group
                    ${isActive 
                      ? "bg-zinc-900 text-white border border-border-custom shadow-sm font-semibold" 
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/30 border border-transparent"}
                  `}
                >
                  <span>{section.label}</span>
                  {isActive && <ChevronRight size={14} className="text-sky-400" />}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Sidebar backdrop */}
        {sidebarOpen && (
          <div 
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
            aria-hidden="true"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 max-w-3xl min-w-0 md:pl-4" role="main">
          
          {/* Introduction / Getting Started */}
          <section id="getting-started" className="scroll-mt-24 border-b border-border-custom/30 pb-12 mb-12 text-left">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">
              <span>Docs</span>
              <ChevronRight size={10} />
              <span>Getting Started</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Introduction
            </h1>

            <p className="text-zinc-300 leading-relaxed mb-6">
              NovaStack CLI is a modern MERN stack scaffolding tool that lets developers bootstrap production-ready applications within seconds.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-8">
              It generates a clean, scalable project structure with best practices already configured so developers can focus on building products instead of configuring projects.
            </p>

            {/* Announcement Highlight Box */}
            <div className="relative p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm overflow-hidden group">
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-indigo-500" />
              
              <h4 className="text-sm font-semibold text-white mb-3.5 flex items-center gap-2">
                <span>🚀</span> New in v1.0.0
              </h4>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">✦</span> Interactive project creation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">✦</span> MERN templates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">✦</span> TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">✦</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">✦</span> ESLint + Prettier
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">✦</span> Environment setup
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <span className="text-sky-400 font-bold">✦</span> Ready-to-deploy structure
                </li>
              </ul>
            </div>
          </section>

          {/* Installation */}
          <section id="installation" className="scroll-mt-24 border-b border-border-custom/30 pb-12 mb-12 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
              Installation
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Install the CLI globally on your machine using npm. This will add the global <code className="text-sky-400 bg-zinc-900 px-1.5 py-0.5 rounded font-mono text-xs border border-border-custom">novastack</code> executable to your PATH.
            </p>

            {/* Code Block */}
            <div className="bg-black border border-border-custom rounded-xl p-4 font-mono text-xs sm:text-sm flex items-center justify-between group relative hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="text-zinc-600 select-none">$</span>
                <span className="text-white">npm</span>
                <span className="text-zinc-400">install</span>
                <span className="text-zinc-400">-g</span>
                <span className="text-sky-400">@novastack/cli</span>
              </div>
              
              <button
                onClick={() => handleCopy("npm install -g @novastack/cli")}
                className={`transition-all duration-200 p-1.5 rounded bg-zinc-900 border text-secondary-text hover:text-white cursor-pointer shrink-0 ${
                  copiedText === "npm install -g @novastack/cli"
                    ? "border-emerald-500/40 text-emerald-400"
                    : "border-border-custom hover:border-zinc-700"
                }`}
                title="Copy Command"
                aria-label="Copy installation command"
              >
                {copiedText === "npm install -g @novastack/cli" ? (
                  <Check size={14} className="text-emerald-400" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
          </section>

          {/* Quick Start */}
          <section id="quick-start" className="scroll-mt-24 border-b border-border-custom/30 pb-12 mb-12 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
              Quick Start
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Follow these simple steps to bootstrap and launch your first application:
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-none w-6 h-6 rounded-full bg-sky-950 border border-sky-800 text-sky-400 flex items-center justify-center font-mono text-xs font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-1.5">Scaffold a new project</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-3">
                    Run the interactive installer. You can specify a name directly or let the CLI prompt you.
                  </p>
                  <div className="bg-black border border-border-custom rounded-xl p-4 font-mono text-xs sm:text-sm flex items-center justify-between group relative hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span className="text-zinc-600 select-none">$</span>
                      <span className="text-purple-400 font-bold">npx</span>
                      <span className="text-sky-400">@novastack/cli</span>
                      <span className="text-emerald-400">create</span>
                      <span className="text-zinc-400">my-app</span>
                    </div>
                    <button
                      onClick={() => handleCopy("npx @novastack/cli create my-app")}
                      className={`transition-all duration-200 p-1.5 rounded bg-zinc-900 border text-secondary-text hover:text-white cursor-pointer shrink-0 ${
                        copiedText === "npx @novastack/cli create my-app"
                          ? "border-emerald-500/40 text-emerald-400"
                          : "border-border-custom hover:border-zinc-700"
                      }`}
                      aria-label="Copy step 1 command"
                    >
                      {copiedText === "npx @novastack/cli create my-app" ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-none w-6 h-6 rounded-full bg-sky-950 border border-sky-800 text-sky-400 flex items-center justify-center font-mono text-xs font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-1.5">Navigate to your folder</h4>
                  <div className="bg-black border border-border-custom rounded-xl p-4 font-mono text-xs sm:text-sm flex items-center justify-between group relative hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span className="text-zinc-600 select-none">$</span>
                      <span className="text-white">cd</span>
                      <span className="text-zinc-400">my-app</span>
                    </div>
                    <button
                      onClick={() => handleCopy("cd my-app")}
                      className={`transition-all duration-200 p-1.5 rounded bg-zinc-900 border text-secondary-text hover:text-white cursor-pointer shrink-0 ${
                        copiedText === "cd my-app"
                          ? "border-emerald-500/40 text-emerald-400"
                          : "border-border-custom hover:border-zinc-700"
                      }`}
                      aria-label="Copy step 2 command"
                    >
                      {copiedText === "cd my-app" ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-none w-6 h-6 rounded-full bg-sky-950 border border-sky-800 text-sky-400 flex items-center justify-center font-mono text-xs font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-1.5">Start local development</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mb-3">
                    Launch the dev server and view the project in your browser at <code className="text-sky-400 font-mono">http://localhost:3000</code>.
                  </p>
                  <div className="bg-black border border-border-custom rounded-xl p-4 font-mono text-xs sm:text-sm flex items-center justify-between group relative hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span className="text-zinc-600 select-none">$</span>
                      <span className="text-white">npm</span>
                      <span className="text-zinc-400">run</span>
                      <span className="text-emerald-400">dev</span>
                    </div>
                    <button
                      onClick={() => handleCopy("npm run dev")}
                      className={`transition-all duration-200 p-1.5 rounded bg-zinc-900 border text-secondary-text hover:text-white cursor-pointer shrink-0 ${
                        copiedText === "npm run dev"
                          ? "border-emerald-500/40 text-emerald-400"
                          : "border-border-custom hover:border-zinc-700"
                      }`}
                      aria-label="Copy step 3 command"
                    >
                      {copiedText === "npm run dev" ? (
                        <Check size={14} className="text-emerald-400" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Structure */}
          <section id="project-structure" className="scroll-mt-24 border-b border-border-custom/30 pb-12 mb-12 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
              Project Structure
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              NovaStack CLI generates a clean, scalable folder structure configured with industry-standard patterns:
            </p>

            <div className="bg-zinc-950 border border-border-custom rounded-xl p-5 font-mono text-xs sm:text-sm text-zinc-400 space-y-2 mb-6">
              <div>my-app/</div>
              <div className="pl-4 text-zinc-500">├── prisma/ <span className="text-zinc-600 font-sans italic ml-2"># Database schema & seeders</span></div>
              <div className="pl-4 text-zinc-500">├── public/ <span className="text-zinc-600 font-sans italic ml-2"># Static files & assets</span></div>
              <div className="pl-4 text-zinc-300">├── src/</div>
              <div className="pl-8 text-zinc-500">├── app/ <span className="text-zinc-600 font-sans italic ml-2"># Next.js App Router (Routes & Pages)</span></div>
              <div className="pl-8 text-zinc-500">├── components/ <span className="text-zinc-600 font-sans italic ml-2"># Reusable custom UI components</span></div>
              <div className="pl-8 text-zinc-500">├── lib/ <span className="text-zinc-600 font-sans italic ml-2"># Auth clients, prisma client, utils</span></div>
              <div className="pl-8 text-zinc-500">├── styles/ <span className="text-zinc-600 font-sans italic ml-2"># Global CSS & Tailwind imports</span></div>
              <div className="pl-4 text-zinc-500">├── .env.example <span className="text-zinc-600 font-sans italic ml-2"># Template environment variables</span></div>
              <div className="pl-4 text-zinc-500">├── docker-compose.yml <span className="text-zinc-600 font-sans italic ml-2"># Docker config for local DB setup</span></div>
              <div className="pl-4 text-zinc-500">└── Dockerfile <span className="text-zinc-600 font-sans italic ml-2"># Multi-stage production container build</span></div>
            </div>
            
            <p className="text-zinc-300 leading-relaxed">
              This layout separates routing, styling, database management, and helper scripts, making the project intuitive to scale from day one.
            </p>
          </section>

          {/* Features */}
          <section id="features" className="scroll-mt-24 border-b border-border-custom/30 pb-12 mb-12 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
              Core Features
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              NovaStack isn&apos;t just a simple boilerplate generator. It acts as an orchestrator that connects modern tools with optimized defaults:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border-custom bg-surface/30">
                <h4 className="font-semibold text-white mb-1.5 text-sm">TypeScript Native</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every file, component, configuration, and API endpoint is strictly typed.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border-custom bg-surface/30">
                <h4 className="font-semibold text-white mb-1.5 text-sm">Better Auth Pre-integrated</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Comes with pre-configured secure authentication handlers for email/password and OAuth.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border-custom bg-surface/30">
                <h4 className="font-semibold text-white mb-1.5 text-sm">Prisma Database Layer</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Pre-configured PostgreSQL connection, models, migrations, and a database seeding script.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border-custom bg-surface/30">
                <h4 className="font-semibold text-white mb-1.5 text-sm">Tailwind CSS Styling</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Responsive design tokens and customizable variables ready to use with custom UI systems.
                </p>
              </div>
            </div>
          </section>

          {/* Commands */}
          <section id="commands" className="scroll-mt-24 border-b border-border-custom/30 pb-12 mb-12 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
              Command Directory
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              A comprehensive reference of commands available in the NovaStack CLI:
            </p>

            <div className="overflow-x-auto border border-border-custom rounded-xl bg-zinc-950/50">
              <table className="w-full text-left text-xs sm:text-sm border-collapse" role="table">
                <thead>
                  <tr className="border-b border-border-custom bg-surface/50 font-mono text-zinc-400">
                    <th className="p-4 font-semibold">Command</th>
                    <th className="p-4 font-semibold">Description</th>
                    <th className="p-4 font-semibold">Options / Flags</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-custom/50 font-mono text-zinc-300">
                  <tr>
                    <td className="p-4 font-semibold text-sky-400">create [name]</td>
                    <td className="p-4 text-zinc-400 font-sans">Bootstraps a new workspace from the golden stack.</td>
                    <td className="p-4 text-zinc-500">--yes, --template</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-sky-400">--version</td>
                    <td className="p-4 text-zinc-400 font-sans">Display the installed CLI version.</td>
                    <td className="p-4 text-zinc-500">-v</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-sky-400">--help</td>
                    <td className="p-4 text-zinc-400 font-sans">Prints support documentation and command descriptions.</td>
                    <td className="p-4 text-zinc-500">-h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Templates */}
          <section id="templates" className="scroll-mt-24 border-b border-border-custom/30 pb-12 mb-12 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
              Templates
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              NovaStack CLI generates high-performance MERN Stack boilerplate applications. By focusing on Next.js 15 as the React core layer, our templates bridge client-side rendering with backend route handlers and DB actions seamlessly.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Templates contain built-in setup guidelines, ESLint configs, TypeScript configurations, Prettier styling configurations, and dockerized local services to minimize friction.
            </p>
          </section>

          {/* Environment Variables */}
          <section id="environment-variables" className="scroll-mt-24 border-b border-border-custom/30 pb-12 mb-12 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
              Environment Variables
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              When scaffolding a project, NovaStack generates two files:
            </p>

            <ul className="space-y-4 text-zinc-300 mb-6 list-disc pl-5">
              <li>
                <strong className="text-white">.env.example</strong> — A safe template listing all required variables. This is checked into git.
              </li>
              <li>
                <strong className="text-white">.env.local</strong> — Contains actual credentials (e.g. database password, auth secret key) and is automatically added to <code className="text-zinc-400 font-mono bg-zinc-900 px-1 py-0.5 rounded text-xs">.gitignore</code>.
              </li>
            </ul>

            <div className="p-4 rounded-xl border border-border-custom bg-surface/30 mb-4">
              <div className="text-xs font-mono text-zinc-500 mb-2">Key variables to configure:</div>
              <div className="space-y-2 font-mono text-xs text-zinc-400">
                <div><code className="text-white">DATABASE_URL</code> = Connection string to your database instance (PostgreSQL).</div>
                <div><code className="text-white">BETTER_AUTH_SECRET</code> = Used to encrypt session cookies and auth tokens.</div>
                <div><code className="text-white">BETTER_AUTH_URL</code> = Absolute URL of your application (e.g., http://localhost:3000).</div>
              </div>
            </div>
          </section>

          {/* Deployment */}
          <section id="deployment" className="scroll-mt-24 border-b border-border-custom/30 pb-12 mb-12 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
              Deployment
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              NovaStack templates produce completely standard Next.js applications, which means you have zero vendor lock-in. You can host them anywhere:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1 flex-none text-sky-400">✓</div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Serverless Platforms</h4>
                  <p className="text-xs sm:text-sm text-zinc-400">Deploy directly to Vercel, Netlify, or AWS Amplify by importing your GitHub repository. Environment variables can be added directly via their settings panel.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-none text-sky-400">✓</div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Containerized Hosting</h4>
                  <p className="text-xs sm:text-sm text-zinc-400">Build the multi-stage production container using the included <code className="text-zinc-400 font-mono text-xs">Dockerfile</code>. Deploy to AWS ECS, Google Cloud Run, Railway, or Render.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 flex-none text-sky-400">✓</div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Database Hosting</h4>
                  <p className="text-xs sm:text-sm text-zinc-400">Connect to managed Postgres providers such as Neon, Supabase, AWS RDS, or Aiven. Run database migrations on deployment using <code className="text-zinc-400 font-mono text-xs">npx prisma db push</code>.</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24 pb-12 text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base mb-2">Q: Does NovaStack lock me into a runtime?</h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  No. The generated project uses pure Next.js code with standard node_modules. Once scaffolded, you can delete NovaStack CLI, and the project will continue building and running exactly as normal.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base mb-2">Q: Can I customize the database or styling frameworks?</h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Yes. You own 100% of the generated codebase. Feel free to replace Prisma with Drizzle, or swap Tailwind CSS out for another styling library.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base mb-2">Q: How do I upgrade my dependencies?</h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  You can update your packages manually in your project&apos;s <code className="text-zinc-400 font-mono text-xs">package.json</code> file and run <code className="text-zinc-400 font-mono text-xs">npm install</code>, or use package updates utilities like <code className="text-zinc-400 font-mono text-xs">npm-check-updates</code>.
                </p>
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
