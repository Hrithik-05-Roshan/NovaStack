/**
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
