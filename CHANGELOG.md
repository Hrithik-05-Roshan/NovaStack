# Changelog

All notable changes to the NovaStack project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2026-07-04

This is the initial public release of NovaStack, transitioning the project from a prototype into a mature, production-ready developer tool.

### Added

*   **CLI Core:**
    *   Command framework powered by `commander`.
    *   Subcommand `novastack create [name]` for interactive full-stack scaffolding.
    *   Global execution support via `npx novastack`.
*   **CLI UX Polish:**
    *   Refined ASCII welcome banner (`▲ N O V A S T A C K`).
    *   Improved prompt interactions using `@clack/prompts` with continuous vertical layout lines.
    *   Clear success outputs with step-by-step next steps (numbered and colorized).
    *   Polished step-by-step progress spinners for scaffolding, package installations, and git setup.
    *   Graceful command cancellations and customized CLI validation checks.
*   **The Golden Stack Scaffolder:**
    *   Scaffolding engine that generates a cohesive stack: Next.js 15, TypeScript, Tailwind CSS v4, Prisma, PostgreSQL, Better Auth, and shadcn/ui.
    *   Atomic project creation with automated rollback on error (deletes generated files if build fails halfway).
    *   Automatic package manager detection based on the user's running environment.
    *   Automated npm dependency installation.
    *   Automated Git repository initialization.
*   **Generated Project Features:**
    *   Stunning, glassmorphic dark-themed Landing Page with glowing ambient backdrops and architectural grids.
    *   Polished Dashboard view pre-integrated with Better Auth hooks and database setup info.
    *   Modern centered Loading Spinner layout.
    *   Custom styled 404 (Not Found) boundary page.
    *   Custom styled Global Exception Error boundary with reset triggers.
    *   Dynamic SVG-based Favicon route, removing the need for binary icon files.
    *   Fully documented `.env.example` and local `.env.local` files, featuring project-specific database naming.
    *   Complete developer README inside the generated app.
*   **Documentation Suite:**
    *   Repository manuals including `README.md`, `CONTRIBUTING.md`, `SUPPORTED_STACK.md`, `ROADMAP.md`, `INSTALLATION.md`, `SECURITY.md`, and community guidelines.
*   **Official Website:**
    *   Modern official landing page and documentation site built with Next.js 15, Tailwind CSS, and Framer Motion.
