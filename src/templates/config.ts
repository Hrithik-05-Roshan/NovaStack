/**
 * NovaStack — Config File Templates
 *
 * Generators for root-level configuration files:
 * package.json, tsconfig.json, next.config.ts, tailwind, postcss, shadcn
 */
import type { ProjectConfig } from '../types/index.js';

export function generatePackageJson(config: ProjectConfig): string {
  const pkg = {
    name: config.name,
    version: '0.1.0',
    private: true,
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start',
      lint: 'next lint',
      format: 'prettier --write "**/*.{ts,tsx,js,jsx,json,css,md}"',
      'db:push': 'prisma db push',
      'db:studio': 'prisma studio',
      'db:seed': 'tsx prisma/seed.ts',
      'db:generate': 'prisma generate',
    },
    dependencies: {
      'next': '^15.1.0',
      'react': '^19.0.0',
      'react-dom': '^19.0.0',
      'better-auth': '^1.2.0',
      '@prisma/client': '^6.2.0',
      'class-variance-authority': '^0.7.1',
      'clsx': '^2.1.1',
      'tailwind-merge': '^2.6.0',
      'lucide-react': '^0.469.0',
    },
    devDependencies: {
      '@types/node': '^22.0.0',
      '@types/react': '^19.0.0',
      '@types/react-dom': '^19.0.0',
      'typescript': '^5.7.0',
      'tailwindcss': '^4.0.0',
      '@tailwindcss/postcss': '^4.0.0',
      'prisma': '^6.2.0',
      'tsx': '^4.19.0',
      'eslint': '^9.0.0',
      'eslint-config-next': '^15.1.0',
      '@eslint/eslintrc': '^3.2.0',
      'prettier': '^3.4.0',
      'prettier-plugin-tailwindcss': '^0.6.0',
    },
  };

  return JSON.stringify(pkg, null, 2) + '\n';
}

export function generateTsConfig(): string {
  const config = {
    compilerOptions: {
      target: 'ES2017',
      lib: ['dom', 'dom.iterable', 'esnext'],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
      module: 'esnext',
      moduleResolution: 'bundler',
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: 'preserve',
      incremental: true,
      plugins: [{ name: 'next' }],
      paths: {
        '@/*': ['./src/*'],
      },
    },
    include: ['next-env.d.ts', '**/*.ts', '**/*.tsx', '.next/types/**/*.ts'],
    exclude: ['node_modules'],
  };

  return JSON.stringify(config, null, 2) + '\n';
}

export function generateNextConfig(): string {
  return `import type { NextConfig } from "next";

/**
 * Next.js Configuration
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js
 */
const nextConfig: NextConfig = {
  // Enable React strict mode for catching potential issues
  reactStrictMode: true,
};

export default nextConfig;
`;
}

export function generateTailwindCss(): string {
  return `/* Tailwind CSS v4 — import-based configuration */
@import "tailwindcss";

/* ── CSS Custom Properties (Design Tokens) ────────────────────── */
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
}

/* ── Base Styles ──────────────────────────────────────────────── */
@layer base {
  * {
    @apply border-[var(--border)];
  }
  body {
    @apply bg-[var(--background)] text-[var(--foreground)];
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
`;
}

export function generatePostcssConfig(): string {
  return `/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
`;
}

export function generateComponentsJson(): string {
  const config = {
    $schema: 'https://ui.shadcn.com/schema.json',
    style: 'new-york',
    rsc: true,
    tsx: true,
    tailwind: {
      config: '',
      css: 'src/app/globals.css',
      baseColor: 'neutral',
      cssVariables: true,
    },
    aliases: {
      components: '@/components',
      utils: '@/lib/utils',
      ui: '@/components/ui',
      lib: '@/lib',
      hooks: '@/hooks',
    },
    iconLibrary: 'lucide',
  };

  return JSON.stringify(config, null, 2) + '\n';
}
