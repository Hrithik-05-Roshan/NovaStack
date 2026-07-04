/**
 * NovaStack — Lib Templates
 *
 * Generators for utility files: Prisma client singleton, cn helper.
 */

export function generateDbClient(): string {
  return `/**
 * Prisma Client — Singleton Instance
 *
 * Ensures a single Prisma Client instance is used across your application.
 * In development, the client is cached on the global object to survive
 * hot module reloading without creating new database connections.
 *
 * @see https://www.prisma.io/docs/guides/performance-and-optimization/connection-management
 */
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}
`;
}

export function generateCnUtils(): string {
  return `/**
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
`;
}
