/**
 * NovaStack Constants
 *
 * Centralized branding, version info, and the opinionated stack definition.
 */

export const CLI_NAME = 'novastack';
export const CLI_VERSION = '0.1.0';
export const CLI_DESCRIPTION = 'Build production-ready applications in minutes, not hours.';
export const CLI_TAGLINE = 'Build fast. Ship faster.';

export const DEFAULT_PROJECT_NAME = 'my-novastack-app';

/**
 * The opinionated, zero-choice MVP stack.
 * Every generated project uses exactly this combination.
 */
export const STACK = {
  framework: 'Next.js 15',
  language: 'TypeScript',
  styling: 'Tailwind CSS v4',
  database: 'PostgreSQL',
  orm: 'Prisma',
  auth: 'Better Auth',
  ui: 'shadcn/ui',
  linting: 'ESLint + Prettier',
  containerization: 'Docker',
} as const;

export const BANNER = `  ▲  N O V A S T A C K  (v0.1.0)
  Build fast. Ship faster.`;

