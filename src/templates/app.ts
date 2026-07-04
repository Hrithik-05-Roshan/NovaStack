/**
 * NovaStack — Next.js App Router Templates
 *
 * Generators for the src/app/ directory:
 * layout, pages, API routes, loading, and error boundaries.
 */
import type { ProjectConfig } from '../types/index.js';

export function generateLayout(config: ProjectConfig): string {
  return `import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "${config.name}",
  description: "Built with NovaStack — production-ready from day one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
`;
}

export function generatePage(config: ProjectConfig): string {
  // Convert kebab-case to Title Case for display
  const title = config.name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return `/**
 * Landing Page
 *
 * The public-facing entry point of your application.
 * Customize this to match your brand and product.
 */
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          ${title}
        </h1>
        <p className="text-lg text-[var(--muted-foreground)]">
          Built with NovaStack — production-ready from day one.
          <br />
          Next.js 15 · TypeScript · Tailwind CSS · Prisma · Better Auth
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Link
            href="/dashboard"
            className="inline-flex h-10 items-center justify-center rounded-md bg-[var(--primary)] px-6 text-sm font-medium text-[var(--primary-foreground)] transition-colors hover:opacity-90"
          >
            Dashboard →
          </Link>
          <a
            href="https://github.com/novastack/novastack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--background)] px-6 text-sm font-medium transition-colors hover:bg-[var(--accent)]"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Tech Stack Badge */}
      <div className="mt-16 flex flex-wrap gap-2 justify-center">
        {["Next.js 15", "TypeScript", "Tailwind v4", "Prisma", "PostgreSQL", "Better Auth", "shadcn/ui"].map(
          (tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted-foreground)]"
            >
              {tech}
            </span>
          )
        )}
      </div>
    </main>
  );
}
`;
}

export function generateDashboardPage(): string {
  return `/**
 * Dashboard Page
 *
 * This is a protected page — only accessible to authenticated users.
 * TODO: Add auth middleware to protect this route.
 */
export default function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-[var(--muted-foreground)]">
          Welcome! This page will be protected by Better Auth.
        </p>
        <p className="text-sm text-[var(--muted-foreground)]">
          Start building your application here.
        </p>
      </div>
    </main>
  );
}
`;
}

export function generateAuthRoute(): string {
  return `/**
 * Better Auth — Catch-All API Route
 *
 * Handles all authentication requests:
 * - POST /api/auth/sign-in
 * - POST /api/auth/sign-up
 * - POST /api/auth/sign-out
 * - GET  /api/auth/session
 * - etc.
 *
 * @see https://www.better-auth.com/docs/integrations/next
 */
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
`;
}

export function generateHealthRoute(): string {
  return `/**
 * Health Check API Route
 *
 * Returns the application status. Useful for:
 * - Docker health checks
 * - Load balancer probes
 * - Uptime monitoring
 */
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "ok",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
    { status: 200 }
  );
}
`;
}

export function generateLoadingPage(): string {
  return `/**
 * Global Loading UI
 *
 * Displayed automatically by Next.js while a route segment is loading.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/loading
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--muted)] border-t-[var(--primary)]" />
    </div>
  );
}
`;
}

export function generateGlobalError(): string {
  return `"use client";

/**
 * Global Error Boundary
 *
 * Catches unhandled errors in the application and displays a fallback UI.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/error
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-[var(--background)] p-8">
        <div className="max-w-md text-center space-y-4">
          <h2 className="text-2xl font-bold">Something went wrong</h2>
          <p className="text-[var(--muted-foreground)]">
            {error.message || "An unexpected error occurred."}
          </p>
          <button
            onClick={reset}
            className="inline-flex h-10 items-center justify-center rounded-md bg-[var(--primary)] px-6 text-sm font-medium text-[var(--primary-foreground)] transition-colors hover:opacity-90"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
`;
}
