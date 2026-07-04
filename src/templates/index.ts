/**
 * NovaStack — Template Registry
 *
 * Central manifest that maps output paths to generated content.
 * Each template module exports generator functions that produce file content.
 */
import type { ProjectConfig, TemplateFile } from '../types/index.js';
import { generatePackageJson, generateTsConfig, generateNextConfig, generateTailwindCss, generatePostcssConfig, generateComponentsJson } from './config.js';
import { generateLayout, generatePage, generateDashboardPage, generateAuthRoute, generateHealthRoute, generateLoadingPage, generateGlobalError, generateNotFoundPage, generateIcon } from './app.js';
import { generatePrismaSchema, generatePrismaSeed } from './prisma.js';
import { generateAuthServer, generateAuthClient } from './auth.js';
import { generateDbClient, generateCnUtils } from './lib.js';
import { generateDockerfile, generateDockerCompose } from './docker.js';
import { generateEslintConfig, generatePrettierConfig } from './linting.js';
import { generateGitignore, generateEnvExample, generateEnvLocal, generateReadme } from './misc.js';

/**
 * Generate all project files for the given configuration.
 * Returns an array of TemplateFile objects ready to be written to disk.
 */
export function generateAllFiles(config: ProjectConfig): TemplateFile[] {
  return [
    // ── Root config files ───────────────────────────
    { path: 'package.json', content: generatePackageJson(config) },
    { path: 'tsconfig.json', content: generateTsConfig() },
    { path: 'next.config.ts', content: generateNextConfig() },
    { path: 'postcss.config.mjs', content: generatePostcssConfig() },
    { path: 'components.json', content: generateComponentsJson() },

    // ── Linting ─────────────────────────────────────
    { path: 'eslint.config.mjs', content: generateEslintConfig() },
    { path: '.prettierrc', content: generatePrettierConfig() },

    // ── Environment ─────────────────────────────────
    { path: '.env.example', content: generateEnvExample(config) },
    { path: '.env.local', content: generateEnvLocal(config) },
    { path: '.gitignore', content: generateGitignore() },

    // ── Docker ──────────────────────────────────────
    { path: 'Dockerfile', content: generateDockerfile(config) },
    { path: 'docker-compose.yml', content: generateDockerCompose(config) },

    // ── Prisma ──────────────────────────────────────
    { path: 'prisma/schema.prisma', content: generatePrismaSchema() },
    { path: 'prisma/seed.ts', content: generatePrismaSeed() },

    // ── Source: App Router ──────────────────────────
    { path: 'src/app/layout.tsx', content: generateLayout(config) },
    { path: 'src/app/page.tsx', content: generatePage(config) },
    { path: 'src/app/loading.tsx', content: generateLoadingPage() },
    { path: 'src/app/not-found.tsx', content: generateNotFoundPage() },
    { path: 'src/app/error.tsx', content: generateGlobalError() },
    { path: 'src/app/icon.tsx', content: generateIcon() },
    { path: 'src/app/globals.css', content: generateTailwindCss() },
    { path: 'src/app/(dashboard)/page.tsx', content: generateDashboardPage() },
    { path: 'src/app/api/auth/[...all]/route.ts', content: generateAuthRoute() },
    { path: 'src/app/api/health/route.ts', content: generateHealthRoute() },

    // ── Source: Lib ─────────────────────────────────
    { path: 'src/lib/auth.ts', content: generateAuthServer() },
    { path: 'src/lib/auth-client.ts', content: generateAuthClient() },
    { path: 'src/lib/db.ts', content: generateDbClient() },
    { path: 'src/lib/utils.ts', content: generateCnUtils() },

    // ── Source: Types ───────────────────────────────
    { path: 'src/types/index.ts', content: '// Add your shared type definitions here\nexport {};\n' },

    // ── Docs ────────────────────────────────────────
    { path: 'README.md', content: generateReadme(config) },
  ];
}
