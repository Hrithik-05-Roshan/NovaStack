/**
 * NovaStack — Miscellaneous Templates
 *
 * Generators for .gitignore, .env files, and README.
 */
import type { ProjectConfig } from '../types/index.js';

export function generateGitignore(): string {
  return `# Dependencies
node_modules/
.pnp
.pnp.js
.yarn/install-state.gz

# Testing
coverage/

# Next.js
.next/
out/

# Production
build/
dist/

# Misc
.DS_Store
*.pem
*.tsbuildinfo
next-env.d.ts

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# Prisma
prisma/migrations/

# IDE
.vscode/
.idea/
*.swp
*.swo
`;
}

export function generateEnvExample(config: ProjectConfig): string {
  const dbName = config.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  return `# ── Database ─────────────────────────────────────────────────
# PostgreSQL connection string for Prisma.
# Format: postgresql://USER:PASSWORD@HOST:PORT/DATABASE
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/${dbName}"

# ── Better Auth ──────────────────────────────────────────────
# Secret key for signing tokens (generate with: openssl rand -base64 32)
BETTER_AUTH_SECRET="change-me-to-a-random-secret"

# Base URL of your application
BETTER_AUTH_URL="http://localhost:3000"

# ── OAuth Providers (optional) ───────────────────────────────
# Uncomment and fill in to enable social login

# GITHUB_CLIENT_ID=""
# GITHUB_CLIENT_SECRET=""

# GOOGLE_CLIENT_ID=""
# GOOGLE_CLIENT_SECRET=""

# ── Application ──────────────────────────────────────────────
# NEXT_PUBLIC_APP_URL="http://localhost:3000"
`;
}

export function generateEnvLocal(config: ProjectConfig): string {
  const dbName = config.name.replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  return `# Local Environment Variables
# This file is gitignored — safe for secrets.
# Copy from .env.example and fill in your values.

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/${dbName}"
BETTER_AUTH_SECRET="dev-secret-change-in-production-use-openssl-rand"
BETTER_AUTH_URL="http://localhost:3000"
`;
}

export function generateReadme(config: ProjectConfig): string {
  // Convert kebab-case to Title Case
  const title = config.name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  return `# ${title}

> Generated with [NovaStack](https://github.com/novastack/novastack) — Build production-ready applications in minutes, not hours.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | PostgreSQL |
| ORM | Prisma |
| Auth | Better Auth |
| UI | shadcn/ui |
| Linting | ESLint + Prettier |
| Container | Docker |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18.0.0
- [Docker](https://www.docker.com/) (for PostgreSQL)

### Setup

\`\`\`bash
# 1. Install dependencies
${config.packageManager} install

# 2. Set up environment variables
cp .env.example .env.local

# 3. Start PostgreSQL
docker compose up -d

# 4. Push database schema
npx prisma db push

# 5. Start development server
${config.packageManager} run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see your application.

## Project Structure

\`\`\`
├── prisma/              # Database schema & seed
├── public/              # Static assets
├── src/
│   ├── app/             # Next.js App Router (pages & API routes)
│   ├── components/      # React components
│   │   └── ui/          # shadcn/ui components
│   ├── lib/             # Utilities (auth, db, helpers)
│   └── types/           # TypeScript type definitions
├── .env.example         # Environment variable template
├── Dockerfile           # Production container
└── docker-compose.yml   # Development database
\`\`\`

## Scripts

| Command | Description |
|---------|-------------|
| \`${config.packageManager} run dev\` | Start development server |
| \`${config.packageManager} run build\` | Build for production |
| \`${config.packageManager} run start\` | Start production server |
| \`${config.packageManager} run lint\` | Run ESLint |
| \`${config.packageManager} run format\` | Format code with Prettier |
| \`${config.packageManager} run db:push\` | Push schema to database |
| \`${config.packageManager} run db:studio\` | Open Prisma Studio |
| \`${config.packageManager} run db:seed\` | Seed the database |

## Adding UI Components

This project is configured for [shadcn/ui](https://ui.shadcn.com/). Add components with:

\`\`\`bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
\`\`\`

## Deployment

This project includes a production-ready \`Dockerfile\` with multi-stage builds.

\`\`\`bash
# Build the Docker image
docker build -t ${config.name} .

# Run the container
docker run -p 3000:3000 ${config.name}
\`\`\`

## License

MIT
`;
}
