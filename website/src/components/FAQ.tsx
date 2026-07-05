"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "what-is-novastack",
    question: "What is NovaStack?",
    answer:
      "NovaStack is an opinionated, zero-config full-stack project generator. It helps developers bypass setup fatigue by instantly bootstrapping a highly polished, fully type-safe stack based on industry best practices.",
  },
  {
    id: "why-single-stack",
    question: "Why does NovaStack enforce a single, zero-choice stack?",
    answer:
      "Decision fatigue slows down developer execution. By picking a single 'Golden Stack' (Next.js, Better Auth, Prisma, PostgreSQL, Tailwind v4, shadcn/ui), we guarantee all pieces fit together perfectly. Every component is optimized, type-safe, and ready for production.",
  },
  {
    id: "is-it-free",
    question: "Is it free and open-source?",
    answer:
      "Yes, NovaStack is 100% free and open-source under the MIT license. You can use it to build personal projects, open-source tools, or commercial SaaS applications without restrictions.",
  },
  {
    id: "how-to-install",
    question: "How do I get started?",
    answer:
      'Run `npx @novastack/cli create <app-name>` in your terminal. Then step into your project folder, copy `.env.example` to `.env.local`, start PostgreSQL with `docker compose up -d`, sync your database using `npx prisma db push`, and run `npm run dev` to start coding.',
  },
  {
    id: "customization",
    question: "Can I customize the generated code?",
    answer:
      "Absolutely. Once the template is scaffolded, the code is 100% yours. There is no dependency on a NovaStack runtime library. You can add, remove, or modify any configuration file, library, or dependency as needed.",
  },
  {
    id: "security",
    question: "Does it include security best practices?",
    answer:
      "Yes. It comes pre-configured with secure session-based cookie handling via Better Auth, isolated environment configurations, database pooling settings, and multi-stage Docker builds to prevent building unnecessary system permissions into production containers.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Deep linking: open FAQ based on hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const faqIndex = FAQ_ITEMS.findIndex((item) => item.id === hash);
      if (faqIndex !== -1) {
        setOpenIndex(faqIndex);
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const toggleItem = (index: number) => {
    const newIndex = openIndex === index ? null : index;
    setOpenIndex(newIndex);
    // Update hash for deep linking
    if (newIndex !== null) {
      history.replaceState(null, "", `#${FAQ_ITEMS[newIndex].id}`);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-3" role="list">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.id}
              id={item.id}
              className={`border bg-surface/50 rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen ? "border-zinc-600" : "border-border-custom"
              }`}
              role="listitem"
            >
              <button
                onClick={() => toggleItem(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleItem(index);
                  }
                }}
                className="w-full py-5 px-6 flex justify-between items-center text-left text-primary-text hover:text-white transition-colors duration-200 cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="font-semibold text-sm sm:text-base leading-snug pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-zinc-500 hover:text-zinc-300 flex-shrink-0"
                  aria-hidden="true"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    role="region"
                  >
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-secondary-text leading-relaxed border-t border-border-custom/30 mt-1">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
