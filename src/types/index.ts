/**
 * NovaStack Type Definitions
 *
 * Central type definitions for the CLI.
 * MVP uses a zero-choice, opinionated stack:
 * Next.js + TypeScript + Tailwind + Prisma + PostgreSQL + Better Auth + shadcn/ui
 */

/**
 * Configuration for a new NovaStack project.
 * In the MVP, only `name` is user-provided — everything else is the golden path.
 */
export interface ProjectConfig {
  /** Project name (kebab-case, npm-compatible) */
  name: string;

  /** Absolute path to the project directory */
  directory: string;

  /** Whether to initialize a git repository */
  initGit: boolean;

  /** Whether to install dependencies after scaffolding */
  installDeps: boolean;

  /** Package manager to use for installation */
  packageManager: PackageManager;
}

/** Supported package managers */
export type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

/**
 * A single file to be written during scaffolding.
 */
export interface TemplateFile {
  /** Relative path from project root (e.g., 'src/app/layout.tsx') */
  path: string;

  /** File content as a string */
  content: string;
}

/**
 * Result returned after the scaffolding process completes.
 */
export interface ScaffoldResult {
  /** Whether the operation succeeded */
  success: boolean;

  /** Total number of files created */
  filesCreated: number;

  /** Total time in milliseconds */
  duration: number;

  /** Error message if the operation failed */
  error?: string;
}
