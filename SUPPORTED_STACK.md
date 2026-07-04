# Supported Stack (The Golden Stack)

NovaStack relies on a zero-choice, highly optimized tech stack designed for speed, type safety, security, and developer productivity. This document explains the architecture of the Golden Stack and why each technology was chosen.

---

## Technical Stack Overview

| Component | Technology | Role |
| --------- | ---------- | ---- |
| **Framework** | Next.js 15 | Meta-framework for Server Components, layouts, API endpoints, and static generation. |
| **Language** | TypeScript | Strong typing to prevent run-time errors and improve developer IDE auto-completion. |
| **Styling** | Tailwind CSS v4 | CSS-first utility styling for rapid frontend iteration with native CSS custom properties. |
| **Database** | PostgreSQL | Enterprise-grade, relational SQL database. |
| **ORM** | Prisma | Typesafe database schema mapping, query building, migrations, and seeding. |
| **Auth** | Better Auth | Session-based authentication built from the ground up for TypeScript apps. |
| **UI Primitive**| shadcn/ui | Beautiful, copy-paste components constructed on Radix UI primitives. |
| **Linting** | ESLint + Prettier | Enforces coding rules, style formats, and package organization. |
| **Container** | Docker | Docker-compose for local development databases; Multi-stage Dockerfile for production. |

---

## Architectural Rationale

### 1. Next.js 15 & React Server Components
Next.js 15 represents the state-of-the-art in web application development.
*   **Why:** It offers both server-side rendering (SSR) and client-side rendering (CSR) dynamically. Server components keep initial bundles small by executing on the server, while standard API directories and client components handle interactive flows.
*   **Configuration:** Scaffolds the Next.js App Router structure with pre-configured loading skeletons (`src/app/loading.tsx`), route-level error boundaries (`src/app/error.tsx`), custom 404 handlers (`src/app/not-found.tsx`), and metadata templates for optimal SEO.

### 2. Better Auth
Authentication is notoriously difficult to configure correctly. Traditional solutions are either proprietary SaaS platforms or complicated configurations.
*   **Why:** Better Auth is client/server-native, session-based (cookies), and built with strict TypeScript support. It supports standard credentials, multi-factor auth, session management, and social logins with minimal setup.
*   **Configuration:** Generates a unified backend endpoint at `/api/auth/[...all]`, a server-side config in `src/lib/auth.ts`, and a client-side client utility in `src/lib/auth-client.ts`.

### 3. Prisma & PostgreSQL
NovaStack assumes your application will require structured data storage.
*   **Why:** PostgreSQL is the industry standard database for SQL workloads. Prisma provides an intuitive schema language and auto-generates a fully typed query client matching database rows.
*   **Configuration:** Generates a default connection pooling client in `src/lib/db.ts`, setup scripts in `prisma/schema.prisma` mapping authentication tables (configured for Better Auth compatibility), and database seeding templates in `prisma/seed.ts`.

### 4. Tailwind CSS v4
Tailwind CSS v4 introduces a fully rewritten engine.
*   **Why:** It removes the need for large javascript configurations (`tailwind.config.js`) by adopting an import-based CSS layout (`@import "tailwindcss"`). It processes variables natively, making styling faster and theme customization (light/dark mode) cleaner.
*   **Configuration:** Sets up Design Tokens (custom CSS variables in `globals.css`) aligning with shadcn/ui styles.

### 5. Dockerized Environment
Production environments should match development environments.
*   **Why:** Docker compose makes PostgreSQL instantly runnable on any platform without local DB installations. A multi-stage Dockerfile builds Next.js into a compiled, standalone server node for container deployments (e.g. AWS ECS, GCP Cloud Run, fly.io, etc.).
*   **Configuration:** Root level `Dockerfile` utilizing a three-stage build (deps, builder, runner) to minimize image footprint. Local database credentials map automatically through `docker-compose.yml`.
