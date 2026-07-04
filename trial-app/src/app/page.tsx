/**
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
          Trial App
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
