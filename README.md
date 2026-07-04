# NovaStack

[![npm version](https://img.shields.io/npm/v/@novastack/cli.svg?style=flat-square&color=blue)](https://www.npmjs.com/package/@novastack/cli)
[![license](https://img.shields.io/npm/l/@novastack/cli.svg?style=flat-square&color=emerald)](./LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/Hrithik-05-Roshan/NovaStack?style=flat-square&color=indigo)](https://github.com/Hrithik-05-Roshan/NovaStack/issues)
[![GitHub stars](https://img.shields.io/github/stars/Hrithik-05-Roshan/NovaStack?style=flat-square&color=yellow)](https://github.com/Hrithik-05-Roshan/NovaStack/stargazers)

**NovaStack** is an opinionated, zero-config full-stack application generator for building production-ready apps in minutes. It eliminates bootstrap fatigue by scaffolding a highly optimized, type-safe stack based on industry best practices.

No choices to make. No configuration boilerplate. Just run one command and start writing your product code.

---

## The Golden Stack

NovaStack generates applications utilizing a pre-configured, high-performance tech stack:

*   **Framework:** Next.js 15 (App Router with Server Components)
*   **Language:** TypeScript (Strict mode enabled)
*   **Styling:** Tailwind CSS v4 (Import-first, native CSS theme variables)
*   **Database:** PostgreSQL (Development ready via Docker Compose)
*   **ORM:** Prisma (Fully typed clients, schema migrations, and seeding)
*   **Auth:** Better Auth (Secure, session-based credentials and OAuth)
*   **UI Foundation:** shadcn/ui (Accessible Radix UI primitives)
*   **Linting:** ESLint + Prettier (Auto-formatting and code style enforcement)
*   **Containerization:** Docker (Multi-stage build files optimized for Next.js standalone)

For a detailed breakdown of why these components were selected and how they interface, see [SUPPORTED_STACK.md](./SUPPORTED_STACK.md).

---

## Features

*   🚀 **Instant Scaffolding:** Generate a complete repo structure in less than 3 seconds.
*   🔒 **Pre-configured Auth:** Better Auth setup with secure session-based cookie handling.
*   🐳 **Docker-compose Out of the Box:** Start a fully configured PostgreSQL instance with a single command.
*   🎨 **Tailwind CSS v4 + shadcn/ui:** Modern CSS variables and design tokens already integrated.
*   📦 **Multi-Stage Dockerfile:** Optimized production builds utilizing Next.js standalone server mode.
*   🛠️ **Built-in Quality Gates:** Pre-configured ESLint, Prettier, and TypeScript compiler rules.

---

## Quick Start

You can generate a new project instantly using `npx`:

```bash
npx @novastack/cli create my-new-app
```

Or install it globally:

```bash
npm install -g @novastack/cli
novastack create my-new-app
```

### Scaffolding Workflow

1.  **Welcome Banner:** Displays branding and versioning.
2.  **Project Name Prompt:** Asks for project folder name.
3.  **Confirm Stack:** Displays the Golden Stack components and asks for confirmation.
4.  **Automatic Scaffolding:** Writes files atomically.
5.  **Auto-Installation:** Installs dependencies using your detected package manager (`npm`, `pnpm`, `yarn`, or `bun`).
6.  **Git Initialization:** Automatically creates a git repository and commits the initial scaffold.

For extensive setup and requirements details, refer to [INSTALLATION.md](./INSTALLATION.md).

---

## Next Steps inside your Generated Project

Once the CLI finishes creating your project, step inside the directory and boot up the development server:

```bash
# 1. Step into directory
cd my-new-app

# 2. Configure environment variables
cp .env.example .env.local

# 3. Start local PostgreSQL container
docker compose up -d

# 4. Sync database schema
npx prisma db push

# 5. Start development server
npm run dev
```

Your app is now live at [http://localhost:3000](http://localhost:3000)!

---

## Documentation Index

Explore our documentation pages for deeper insights:

*   [**Installation Guide (INSTALLATION.md)**](./INSTALLATION.md) — Prerequisites, CLI flags, global installations, and environment settings.
*   [**Supported Stack (SUPPORTED_STACK.md)**](./SUPPORTED_STACK.md) — Technical details of the technologies, setup rationale, and structural layers.
*   [**Roadmap (ROADMAP.md)**](./ROADMAP.md) — Release calendar, feature status, and long-term milestones.
*   [**Contributing Guidelines (CONTRIBUTING.md)**](./CONTRIBUTING.md) — Guidelines for code modifications, folder structure notes, and local testing.
*   [**Security Policy (SECURITY.md)**](./SECURITY.md) — Reporting vulnerabilities, security releases, and patching support.
*   [**Code of Conduct (CODE_OF_CONDUCT.md)**](./CODE_OF_CONDUCT.md) — Community guidelines and expectation standards.
*   [**Changelog (CHANGELOG.md)**](./CHANGELOG.md) — Complete release logs and progression details.

---

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for details.
