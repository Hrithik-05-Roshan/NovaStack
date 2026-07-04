"use client";

import { useEffect, useState } from "react";
import { Terminal, RefreshCw } from "lucide-react";

interface TerminalLine {
  text: string;
  type: "input" | "info" | "success" | "done" | "empty";
  delay: number;
}

const TERMINAL_SEQUENCE: TerminalLine[] = [
  { text: "npx @novastack/cli create", type: "input", delay: 1000 },
  { text: "", type: "empty", delay: 300 },
  { text: "◆ Creating project...", type: "info", delay: 500 },
  { text: "✔ Next.js 15", type: "success", delay: 200 },
  { text: "✔ TypeScript", type: "success", delay: 200 },
  { text: "✔ Tailwind CSS", type: "success", delay: 200 },
  { text: "✔ Prisma", type: "success", delay: 200 },
  { text: "✔ PostgreSQL", type: "success", delay: 200 },
  { text: "✔ Better Auth", type: "success", delay: 200 },
  { text: "✔ Docker", type: "success", delay: 200 },
  { text: "✔ Git", type: "success", delay: 200 },
  { text: "✔ Project Ready", type: "success", delay: 500 },
  { text: "", type: "empty", delay: 200 },
  { text: "Done in 32 seconds.", type: "done", delay: 300 },
];

export default function InteractiveTerminal() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentInputText, setCurrentInputText] = useState("");
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const resetTerminal = () => {
    setDisplayedLines([]);
    setCurrentInputText("");
    setSequenceIndex(0);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (sequenceIndex >= TERMINAL_SEQUENCE.length) {
      setIsRunning(false);
      return;
    }

    const currentLine = TERMINAL_SEQUENCE[sequenceIndex];
    const timer = setTimeout(() => {
      if (currentLine.type === "input") {
        let charIndex = 0;
        const inputString = currentLine.text;
        const typingInterval = setInterval(() => {
          if (charIndex < inputString.length) {
            setCurrentInputText((prev) => prev + inputString.charAt(charIndex));
            charIndex++;
          } else {
            clearInterval(typingInterval);
            // Push full input line to history and reset current input text
            setDisplayedLines((prev) => [...prev, `$ ${inputString}`]);
            setCurrentInputText("");
            setSequenceIndex((prev) => prev + 1);
          }
        }, 60);
      } else {
        setDisplayedLines((prev) => [...prev, currentLine.text]);
        setSequenceIndex((prev) => prev + 1);
      }
    }, currentLine.delay);

    return () => clearTimeout(timer);
  }, [sequenceIndex, isRunning]);

  return (
    <div className="w-full max-w-3xl bg-surface border border-border-custom rounded-lg overflow-hidden terminal-shadow font-mono text-xs sm:text-sm text-left h-[420px] flex flex-col relative">
      {/* Terminal Title Bar */}
      <div className="h-10 bg-black/40 border-b border-border-custom px-4 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
          <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
          <div className="w-3 h-3 rounded-full bg-zinc-800 border border-zinc-700" />
        </div>
        <div className="text-[10px] text-secondary-text flex items-center gap-1.5 font-sans">
          <Terminal size={11} className="text-secondary-text" />
          bash — NovaStack CLI
        </div>
        <button
          onClick={resetTerminal}
          className="text-secondary-text hover:text-primary-text transition-colors p-1 rounded hover:bg-zinc-800"
          title="Restart Demo"
        >
          <RefreshCw size={13} className={isRunning ? "animate-spin" : ""} />
        </button>
      </div>

      {/* Terminal Content Screen */}
      <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col justify-end space-y-1.5 select-text no-scrollbar bg-black/20">
        <div className="flex-1 flex flex-col justify-start space-y-1.5">
          {displayedLines.map((line, idx) => {
            let className = "text-secondary-text";
            if (line.startsWith("$ ")) {
              className = "text-primary-text font-bold";
            } else if (line.includes("✔") || line.includes("✓")) {
              className = "text-emerald-400/90";
            } else if (line.startsWith("◆") || line.includes("⏳")) {
              className = "text-white font-semibold";
            } else if (line.startsWith("✅")) {
              className = "text-white font-bold text-sm mt-2";
            } else if (line.includes("Done in")) {
              className = "text-zinc-500 italic";
            } else if (line.includes("├──") || line.includes("└──")) {
              className = "text-zinc-400";
            }

            return (
              <div key={idx} className={className}>
                {line}
              </div>
            );
          })}

          {/* Current typing line */}
          {isRunning && TERMINAL_SEQUENCE[sequenceIndex]?.type === "input" && (
            <div className="text-primary-text font-bold flex items-center">
              <span>$ {currentInputText}</span>
              <span className="w-1.5 h-4 bg-white ml-0.5 animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
