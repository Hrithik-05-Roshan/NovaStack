"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";

// Premium Custom SVG for X (formerly Twitter)
const XIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export interface Contributor {
  name: string;
  role: string;
  avatar: string;
  links: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

interface ContributorProfileProps {
  contributor: Contributor;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export default function ContributorProfile({
  contributor,
  isOpen,
  onToggle,
  onClose,
}: ContributorProfileProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Clickable Contributor Inline Button */}
      <button
        onClick={onToggle}
        className="relative flex items-center justify-center rounded-full border border-white/10 hover:border-zinc-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 group overflow-hidden cursor-pointer w-10 h-10 shrink-0"
        aria-label={`View profile of ${contributor.name}`}
        aria-expanded={isOpen}
      >
        <Image
          src={contributor.avatar}
          alt={contributor.name}
          fill
          sizes="500px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </button>

      {/* Popover Card */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile-only backdrop overlay to close popover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 md:hidden"
              aria-hidden="true"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={`${contributor.name} links`}
              initial={{ opacity: 0, scale: 0.92, x: "-50%", y: 8 }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: 0 }}
              exit={{ opacity: 0, scale: 0.92, x: "-50%", y: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed md:absolute bottom-6 md:bottom-full left-1/2 md:mb-2.5 z-50 w-[calc(100vw-2rem)] max-w-[200px] md:w-[160px] p-2 bg-transparent border border-transparent flex flex-col items-center justify-center"
            >
              {/* Social Icons row (No name, no role, no avatar) */}
              <div className="flex items-center justify-center gap-4">
                {contributor.links.github && (
                  <motion.a
                    href={contributor.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black shadow-md hover:shadow-lg transition-all duration-200 border border-transparent cursor-pointer"
                    aria-label="GitHub profile"
                  >
                    <Github size={15} className="stroke-[2.25]" />
                  </motion.a>
                )}

                {contributor.links.twitter && (
                  <motion.a
                    href={contributor.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black shadow-md hover:shadow-lg transition-all duration-200 border border-transparent cursor-pointer"
                    aria-label="X profile"
                  >
                    <XIcon className="w-3 h-3 text-black" />
                  </motion.a>
                )}

                {contributor.links.linkedin && (
                  <motion.a
                    href={contributor.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black shadow-md hover:shadow-lg transition-all duration-200 border border-transparent cursor-pointer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={15} className="stroke-[2.25] fill-black" />
                  </motion.a>
                )}
              </div>

              {/* Decorative down arrow (Desktop only) */}
              <div className="hidden md:block absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-950 border-r border-b border-white/[0.08] rotate-45" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
