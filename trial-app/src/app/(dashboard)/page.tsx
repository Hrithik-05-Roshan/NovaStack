/**
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
