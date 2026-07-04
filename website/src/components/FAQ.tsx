"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What is NovaStack?",
    answer: "NovaStack is an opinionated, zero-config full-stack project generator. It helps developers bypass setup fatigue by instantly bootstrapping a highly polished, fully type-safe stack based on industry best practices."
  },
  {
    question: "Why does NovaStack enforce a single, zero-choice stack?",
    answer: "Decision fatigue slows down developer execution. By picking a single 'Golden Stack' (Next.js, Better Auth, Prisma, PostgreSQL, Tailwind v4, shadcn/ui), we guarantee all pieces fit together perfectly. Every component is optimized, type-safe, and ready for production, so you can write actual product code from minute one."
  },
  {
    question: "Is it free and open-source?",
    answer: "Yes, NovaStack is 100% free and open-source under the MIT license. You can use it to build personal projects, open-source tools, or commercial SaaS applications without restrictions."
  },
  {
    question: "How do I install dependencies and get started?",
    answer: "Run `npx novastack create <app-name>` in your terminal. Once completed, step into your project folder, copy `.env.example` to `.env.local`, start the PostgreSQL container with `docker compose up -d`, sync your database using `npx prisma db push`, and run `npm run dev` to start coding."
  },
  {
    question: "Can I customize the generated code?",
    answer: "Absolutely. Once the template is scaffolded, the code is 100% yours. There is no dependency on a NovaStack runtime library. You can add, remove, or modify any configuration file, library, or dependency as needed."
  },
  {
    question: "Does it include security best practices?",
    answer: "Yes. It comes pre-configured with secure session-based cookie handling via Better Auth, isolated environment configurations, database pooling settings, and multi-stage Docker builds to prevent building unnecessary system permissions into production containers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-border-custom bg-surface/50 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-5 px-6 flex justify-between items-center text-left text-primary-text hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <span className="font-semibold text-sm sm:text-base leading-snug">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-zinc-500 hover:text-zinc-300 flex-shrink-0 ml-4"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
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
