"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import ContributorProfile, { Contributor } from "./ContributorProfile";

const CREATOR_INFO: Contributor = {
  name: "Hrithik Burnwal",
  role: "Creator",
  avatar: "/gojo.png",
  links: {
    github: "https://github.com/Hrithik-05-Roshan/",
    twitter: "https://x.com/HrithikBurnwal",
    linkedin: "https://www.linkedin.com/in/hrithik-burnwal/",
  },
};

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Installation", href: "#installation" },
    { label: "Commands", href: "/docs#commands" },
    { label: "Docs", href: "/docs" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  Resources: [
    {
      label: "GitHub",
      href: "https://github.com/Hrithik-05-Roshan/NovaStack",
      external: true,
    },
    {
      label: "NPM",
      href: "https://www.npmjs.com/package/@novastack/cli",
      external: true,
    },
    {
      label: "Issues",
      href: "https://github.com/Hrithik-05-Roshan/NovaStack/issues",
      external: true,
    },
    {
      label: "Changelog",
      href: "https://github.com/Hrithik-05-Roshan/NovaStack/blob/main/CHANGELOG.md",
      external: true,
    },
    {
      label: "Contributing",
      href: "https://github.com/Hrithik-05-Roshan/NovaStack/blob/main/CONTRIBUTING.md",
      external: true,
    },
  ],
  Legal: [
    {
      label: "MIT License",
      href: "https://github.com/Hrithik-05-Roshan/NovaStack/blob/main/LICENSE",
      external: true,
    },
    {
      label: "Security",
      href: "https://github.com/Hrithik-05-Roshan/NovaStack/blob/main/SECURITY.md",
      external: true,
    },
    {
      label: "Privacy",
      href: "https://github.com/Hrithik-05-Roshan/NovaStack#privacy",
      external: true,
    },
    {
      label: "Code of Conduct",
      href: "https://github.com/Hrithik-05-Roshan/NovaStack/blob/main/CODE_OF_CONDUCT.md",
      external: true,
    },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeContributor, setActiveContributor] = useState<string | null>(null);

  return (
    <footer
      className="w-full border-t border-border-custom bg-black/40 backdrop-blur-md"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-[1280px] mx-auto px-6 pt-12 pb-6 md:pt-16 md:pb-8">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-12 items-start">
          {/* Brand Column (takes 2 columns on desktop) */}
          <div className="flex flex-col items-start gap-3.5 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt="NovaStack logo"
                width={20}
                height={20}
                className="rounded"
              />
              <span className="font-sans font-bold text-sm tracking-tight text-white">
                NovaStack
              </span>
              <span className="text-[10px] bg-zinc-800/80 text-zinc-300 px-1.5 py-0.5 rounded font-mono border border-white/[0.04] select-none">
                v0.1.0
              </span>
            </div>
            <p className="text-[12px] text-zinc-400 leading-relaxed max-w-sm">
              Scaffold production-ready Next.js applications in seconds. Zero configuration, zero decision fatigue. Fully optimized, production-grade template generator.
            </p>
            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-1" role="list" aria-label="Project attributes">
              {[
                { label: "Open Source", color: "bg-emerald-500" },
                { label: "TypeScript", color: "bg-blue-500" },
                { label: "MIT License", color: "bg-amber-500" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  role="listitem"
                  className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-mono bg-zinc-900/60 text-zinc-300 border border-white/[0.04]"
                >
                  <span
                    className={`w-1 h-1 rounded-full ${badge.color}`}
                    aria-hidden="true"
                  />
                  {badge.label}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-white/[0.04] w-full max-w-xs font-mono">
              <div className="flex items-center gap-1.5 select-none text-[12px] text-zinc-200 font-semibold">
                <span>Made with</span>
                <Heart
                  size={13}
                  className="text-red-500 fill-red-500 shrink-0 animate-pulse"
                  aria-label="love"
                />
                <span>by</span>
                <ContributorProfile
                  contributor={CREATOR_INFO}
                  isOpen={activeContributor === "hrithik"}
                  onToggle={() =>
                    setActiveContributor(
                      activeContributor === "hrithik" ? null : "hrithik"
                    )
                  }
                  onClose={() => setActiveContributor(null)}
                />
              </div>
              <div className="text-[11px] text-zinc-500 text-left">
                © {currentYear} NovaStack. All rights reserved.
              </div>
            </div>
          </div>

          {/* Links Columns (each takes 1 column) */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3.5">
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-bold">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="text-xs text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
