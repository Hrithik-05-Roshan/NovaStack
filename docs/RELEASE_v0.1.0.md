# NovaStack v0.1.0 Release Guide

This document coordinates the launch checklist, release notes, tagging steps, and publishing procedures for **NovaStack v0.1.0**.

---

## 1. Release Notes (v0.1.0)

Copy-paste this description directly into the GitHub Release UI:

```markdown
# NovaStack v0.1.0 — Initial Public Release 🚀

We are thrilled to announce the first public release of **NovaStack (v0.1.0)**! 

NovaStack is a zero-config full-stack project generator. It helps developers bypass decision fatigue and boots up a highly cohesive, production-ready stack in seconds.

### The Golden Stack
Every project generated with NovaStack comes pre-configured with:
- **Framework:** Next.js 15 (App Router, Server Components)
- **Language:** TypeScript (Strict compiler rules)
- **Styling:** Tailwind CSS v4 (Import-based, CSS variables)
- **Database:** PostgreSQL (Development ready via Docker compose)
- **ORM:** Prisma (Typed clients, seed files, push migrations)
- **Auth:** Better Auth (Secure cookie-based credentials & OAuth)
- **UI:** shadcn/ui (Accessible Radix primitive setup)
- **CI/CD:** Dockerfile (optimized standalone builds) & ESLint + Prettier

### Key Features in v0.1.0
- **Interactive Prompts:** Dynamic CLI experience powered by `@clack/prompts` with clean, continuous layout aesthetics.
- **Preemptive checks:** Validates project naming and folder availability before prompting confirmation.
- **Polished Template Code:** Premium dark-themed landing page, loading skeletons, custom 404 boundaries, global error panels, and base64 SVG app favicons.
- **Fail-Safe Scaffolding:** Atomic directory writing with automatic rollback if file generation fails.
- **Offline Resiliency:** Installs node modules and git repositories gracefully, degrading to helpful warnings on network/command failures.

### Getting Started
Launch a new application immediately using `npx`:
```bash
npx @novastack/cli create my-awesome-app
```
```

---

## 2. Release Checklist

Execute these steps in order to perform the release:

### Pre-release Quality Check
- [ ] Run typescript checks: `npm run typecheck`
- [ ] Compile the CLI packages: `npm run build`
- [ ] Test the CLI locally: `node dist/index.js create test-release-app --no-install --no-git`
- [ ] Verify generated template file imports.
- [ ] Clean up temporary test directories.

### Versioning Check
- [ ] Verify root `package.json` has `"version": "0.1.0"`.
- [ ] Verify generated project `package.json` template (inside `src/templates/config.ts`) has `"version": "0.1.0"`.

---

## 3. Git Tagging & GitHub Release

To tag this release and push it to the main repository:

```bash
# 1. Commit any final release preparation edits
git add -A
git commit -m "chore: prepare release v0.1.0"

# 2. Tag the commit with SemVer v0.1.0
git tag -a v0.1.0 -m "Release v0.1.0"

# 3. Push the main branch and the tag to GitHub
git push origin main --tags
```

Once pushed, GitHub Actions will trigger the `ci.yml` verify checks and start the `release.yml` publish workflow.

---

## 4. npm Publish Checklist

If you are publishing manually to npm (or configuring the `NPM_TOKEN` secret for GitHub Actions):

- [ ] **Account Verification:** Ensure you are logged into your npm account (`npm whoami`).
- [ ] **Package Name Availability:** Verify that the `@novastack/cli` name is owned by your organization or user.
- [ ] **Registry Check:** Confirm the default npm registry is active: `https://registry.npmjs.org`.
- [ ] **Publish Command:** Run `npm publish --access public` (since it is a scoped package).
- [ ] **Verify Publication:** Run `npm view @novastack/cli version` to confirm the registry updated to `0.1.0`.
