/**
 * NovaStack — Next.js App Router Templates
 *
 * Generators for the src/app/ directory:
 * layout, pages, API routes, loading, not-found, and error boundaries.
 * Includes folder comments and detailed description headers for developers.
 */
import type { ProjectConfig } from '../types/index.js';

export function generateLayout(config: ProjectConfig): string {
  return `/**
 * Root Layout
 *
 * Configures the global font (Inter), sets up metadata for SEO,
 * and wraps all page content.
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "${config.name} | NovaStack App",
    template: "%s | ${config.name}",
  },
  description: "A production-grade application built with NovaStack — Next.js, Better Auth, Prisma, and Tailwind CSS.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  openGraph: {
    title: "${config.name}",
    description: "Built with NovaStack — production-ready from day one.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "${config.name}",
    description: "Built with NovaStack — production-ready from day one.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
`;
}

export function generatePage(config: ProjectConfig): string {
  const title = config.name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return `/**
 * Landing Page
 *
 * The public entry point of your application.
 * Designed with a premium dark aesthetic.
 */
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden flex flex-col justify-between">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--primary)] text-[var(--primary-foreground)] font-bold">
              ▲
            </div>
            <span className="font-bold text-lg tracking-tight">${title}</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              Dashboard
            </Link>
            <a
              href="https://github.com/novastack/novastack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              NovaStack GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative isolate px-6 pt-36 lg:px-8 flex-grow flex items-center">
        {/* Ambient background glow */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--primary)] to-[var(--ring)] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--muted-foreground)] backdrop-blur">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Bootstrapped successfully</span>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl bg-gradient-to-b from-[var(--foreground)] to-[var(--muted-foreground)] bg-clip-text text-transparent">
            ${title}
          </h1>

          <p className="text-lg text-[var(--muted-foreground)] max-w-xl mx-auto leading-relaxed">
            Welcome to your new high-performance web application. Pre-configured with the NovaStack golden stack, ready for deployment.
          </p>

          <div className="flex gap-4 justify-center items-center pt-2">
            <Link
              href="/dashboard"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-[var(--primary)] px-8 text-sm font-semibold text-[var(--primary-foreground)] shadow-lg hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              Go to Dashboard
            </Link>
            <a
              href="https://github.com/novastack/novastack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-8 text-sm font-semibold hover:bg-[var(--accent)] transition-all hover:scale-[1.02]"
            >
              Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center space-y-4">
          <h2 className="text-base font-semibold text-[var(--primary)] tracking-wide uppercase">Architecture</h2>
          <p className="text-3xl font-bold tracking-tight sm:text-4xl">The Golden Stack is configured.</p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: "Next.js 15 (App Router)",
                desc: "Server components, layouts, metadata-first, and native performance."
              },
              {
                title: "Better Auth",
                desc: "Secure auth built for TypeScript, featuring easy-to-use hooks and social login integrations."
              },
              {
                title: "Prisma & PostgreSQL",
                desc: "Fully typed database clients with simple schema definitions and migrations."
              },
              {
                title: "Tailwind CSS v4",
                desc: "A modernized CSS-first styling engine with native CSS custom properties."
              },
              {
                title: "shadcn/ui Setup",
                desc: "Theme, components, and Tailwind config integrated and ready to add UI primitives."
              },
              {
                title: "Docker Ready",
                desc: "Contains dev and production configurations optimized for standalone Next.js builds."
              }
            ].map((feat, i) => (
              <div key={i} className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:shadow-md transition-shadow">
                <dt className="text-base font-bold text-[var(--foreground)]">{feat.title}</dt>
                <dd className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{feat.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-8 bg-[var(--card)]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-xs text-[var(--muted-foreground)]">
          &copy; {new Date().getFullYear()} ${title}. Generated with NovaStack. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
`;
}

export function generateDashboardPage(): string {
  return `/**
 * Dashboard Page
 *
 * Protected dashboard view. This is where authenticated users spend
 * their time. Customize this dashboard with charts and panels.
 */
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] p-6 md:p-10 flex flex-col justify-between">
      <div className="mx-auto max-w-7xl w-full space-y-8 flex-grow">
        {/* Dashboard Nav */}
        <div className="flex items-center justify-between border-b border-[var(--border)] pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Dashboard</h1>
            <p className="text-sm text-[var(--muted-foreground)]">
              Welcome back to your workspace.
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 text-xs font-semibold hover:bg-[var(--accent)] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Dashboard Panels */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 space-y-2">
            <h3 className="font-bold text-sm text-[var(--muted-foreground)] uppercase tracking-wider">Authentication</h3>
            <p className="text-2xl font-bold">Better Auth</p>
            <p className="text-xs text-[var(--muted-foreground)]">
              Routes are configured at <code className="bg-[var(--accent)] px-1 py-0.5 rounded">/api/auth/[...all]</code>. Use client hooks in <code className="bg-[var(--accent)] px-1 py-0.5 rounded">src/lib/auth-client.ts</code>.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 space-y-2">
            <h3 className="font-bold text-sm text-[var(--muted-foreground)] uppercase tracking-wider">Database</h3>
            <p className="text-2xl font-bold">Prisma Client</p>
            <p className="text-xs text-[var(--muted-foreground)]">
              Manage schemas in <code className="bg-[var(--accent)] px-1 py-0.5 rounded">prisma/schema.prisma</code> and perform database operations via the DB client in <code className="bg-[var(--accent)] px-1 py-0.5 rounded">src/lib/db.ts</code>.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 space-y-2">
            <h3 className="font-bold text-sm text-[var(--muted-foreground)] uppercase tracking-wider">Containerization</h3>
            <p className="text-2xl font-bold">Docker Setup</p>
            <p className="text-xs text-[var(--muted-foreground)]">
              Run local dev services with <code className="bg-[var(--accent)] px-1 py-0.5 rounded">docker compose up</code>. Deploy using the multi-stage build configured in the root <code className="bg-[var(--accent)] px-1 py-0.5 rounded">Dockerfile</code>.
            </p>
          </div>
        </div>

        {/* Informational Callout */}
        <div className="rounded-xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 p-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="space-y-1">
            <h4 className="font-bold text-base">Ready to start coding?</h4>
            <p className="text-sm text-[var(--muted-foreground)]">
              Add your backend database queries, implement custom middleware, or drop in UI components using shadcn/ui.
            </p>
          </div>
          <a
            href="https://github.com/novastack/novastack"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-[var(--primary)] px-5 text-xs font-semibold text-[var(--primary-foreground)] shadow hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get Help
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-xs text-[var(--muted-foreground)] pt-6 border-t border-[var(--border)]">
        Dashboard View · Generated with NovaStack
      </footer>
    </main>
  );
}
`;
}

export function generateAuthRoute(): string {
  return `/**
 * Better Auth — Catch-All API Route
 *
 * Handles authentication requests including sign-up, sign-in, sign-out,
 * and user sessions.
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
 * Health Check Route
 *
 * Returns status, server time, and uptime. Typically used for container health
 * monitoring, load-balancer health probes, or ping status.
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
 * Loading Page fallback UI
 *
 * Rendered by Next.js automatically when asynchronous routes load.
 * Displays a beautiful, centering minimal layout.
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--background)]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--primary)]" />
        <span className="text-xs text-[var(--muted-foreground)] font-medium tracking-wider uppercase animate-pulse">
          Loading Application...
        </span>
      </div>
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
 * Catches unhandled exceptions across application routes and displays a
 * clean error dashboard with recovery controls.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/error
 */
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log exception to logging services
    console.error("Unhandled global exception:", error);
  }, [error]);

  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-[var(--background)] text-[var(--foreground)] p-6">
        <div className="max-w-md w-full border border-[var(--border)] bg-[var(--card)] p-8 rounded-xl shadow-xl space-y-6 text-center">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/30 dark:text-red-400">
            ⚠
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Application Error</h2>
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {error.message || "An unexpected error occurred in this segment."}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button
              onClick={reset}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-sm font-semibold text-[var(--primary-foreground)] shadow hover:opacity-90 transition-opacity"
            >
              Reset Interface
            </button>
            <a
              href="/"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 text-sm font-semibold hover:bg-[var(--accent)] transition-colors"
            >
              Return Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
`;
}

export function generateNotFoundPage(): string {
  return `/**
 * Custom 404 Page (Not Found)
 *
 * Displayed automatically when a requested route does not exist.
 * Styled to match the general application branding.
 */
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] p-6">
      <div className="max-w-md w-full border border-[var(--border)] bg-[var(--card)] p-8 rounded-xl shadow-xl space-y-6 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-bold text-lg">
          404
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">Page Not Found</h2>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="/dashboard"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[var(--primary)] px-6 text-sm font-semibold text-[var(--primary-foreground)] shadow hover:opacity-90 transition-opacity"
          >
            Go to Dashboard
          </Link>
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 text-sm font-semibold hover:bg-[var(--accent)] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
`;
}

export function generateIcon(): string {
  return `/**
 * Dynamic Favicon / App Icon Route
 *
 * Generates an SVG-based favicon dynamically using Next.js ImageResponse.
 * Bypasses the need for static binary files in the repository.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons
 */
import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 22,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          borderRadius: "8px",
          fontWeight: "bold",
          border: "1px solid #262626",
        }}
      >
        ▲
      </div>
    ),
    {
      ...size,
    }
  );
}
`;
}
