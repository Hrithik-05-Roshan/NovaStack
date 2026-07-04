# NovaStack Project Roadmap

This document outlines the milestones and release calendar for NovaStack. It reflects our core vision: **providing a highly polished, opinionated, and zero-fatigue entry point for new full-stack apps.**

---

## Release Milestones

### ⬜ Phase 1: Initial Release (v0.1.0) - *Current*
Focus on core stability, terminal UX, project templates, and documentation.
*   [x] Polish interactive prompts with `@clack/prompts`.
*   [x] Establish "The Golden Stack" (Next.js 15, Better Auth, Prisma, Tailwind v4).
*   [x] Add production-grade templates (custom 404, error boundary, dynamic SVG icon).
*   [x] Implement multi-stage Docker build files.
*   [x] Deploy official website and developer documentation.
*   [x] Write community contribution templates (issues, pull requests, CI workflows).

### ⬜ Phase 2: Template Refinements (v0.2.0) - *Q3 2026*
Enhance the developer experience of the generated application.
*   [ ] Add pre-configured Next.js middleware for protected routes.
*   [ ] Add automated Prisma migrations during scaffolding.
*   [ ] Provide a mock authentication page template in the generated project.
*   [ ] Pre-integrate email verification mocks in the auth routes.
*   [ ] Enhance dark/light mode toggle components out-of-the-box.

### ⬜ Phase 3: Performance & Offline (v0.3.0) - *Q4 2026*
Improve scaffolding reliability under limited network environments.
*   [ ] Offline mode: Cache dependencies locally to skip npm downloads when offline.
*   [ ] Faster template generation using atomic fs streaming.
*   [ ] Validate system environments (e.g. check if Docker is running during scaffolding).

### ⬜ Phase 4: Long-Term Outlook (v1.0.0) - *2027*
Hardening NovaStack for enterprise-grade developer teams.
*   [ ] Pluggable generators for alternate core databases (e.g., MySQL, SQLite).
*   [ ] Extension registry for extra shadcn/ui layouts.
*   [ ] Interactive doctor subcommand to troubleshoot environment dependencies.

---

## Core Focus Guidelines

To maintain project quality and focus, we explicitly defer the following features:
*   **No Multi-Stack Choices:** NovaStack will remain dedicated to Next.js + React. We will not support alternate frameworks like Vue or Svelte.
*   **No Custom AI Scaffolding:** Code generation remains template-based to guarantee deterministic, secure, and production-tested output.
*   **No Cloud Dashboard Hosting:** NovaStack is an open-source local-first tool and will not bundle cloud database subscription hosting.
