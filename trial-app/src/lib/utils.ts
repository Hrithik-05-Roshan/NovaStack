/**
 * Utility Functions
 *
 * cn() — merges Tailwind CSS class names intelligently.
 * Combines clsx (conditional classes) with tailwind-merge (deduplication).
 *
 * Usage:
 *   cn("px-4 py-2", isActive && "bg-primary", className)
 *
 * @see https://ui.shadcn.com/docs/installation/manual
 */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
