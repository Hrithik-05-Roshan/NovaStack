"use client";

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
