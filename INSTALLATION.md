# Installation Guide

This guide details the prerequisites, installation paths, and CLI usage flags for NovaStack.

---

## Prerequisites

Before running the NovaStack CLI, ensure your local environment meets the following specifications:

*   **Node.js:** `>= 18.0.0` (Recommended: latest LTS).
*   **Package Manager:** Any of `npm` (v9+), `pnpm` (v8+), `yarn` (v1.22+), or `bun` (v1.0+).
*   **Docker:** Installed and running (required if you plan to launch the development database via `docker compose`).
*   **Git:** Command line tool configured (required for auto-initializing repositories).

---

## Running the CLI

You have two primary options to run NovaStack:

### 1. Execute instantly with `npx` (Recommended)

This ensures you are always running the latest version of the CLI without polluting your global node modules:

```bash
npx novastack create my-app
```

### 2. Install globally via npm

If you prefer to run the CLI frequently offline or without using network queries:

```bash
# Global install
npm install -g novastack

# Scaffolding command
novastack create my-app
```

---

## Command Reference

### `novastack create [name]`

The primary command to bootstrap applications.

#### Arguments
*   `[name]`: Optional. The directory name where your project will be generated. If omitted, the interactive prompt will ask for it.

#### Options
*   `--no-git`: Skip initializing a git repository after scaffolding.
*   `--no-install`: Skip automatic dependency installation (`npm install`, `pnpm install`, etc.).
*   `-v, --version`: Display the version of your local NovaStack installation.
*   `-h, --help`: Display command options and parameters.

---

## Troubleshooting

### Error: "Invalid project name"
*   **Cause:** The project name does not comply with npm package naming guidelines.
*   **Solution:** Names must be lowercase, kebab-case (e.g. `my-awesome-project`) and cannot contain special characters other than hyphens and periods.

### Warning: "Git initialization skipped"
*   **Cause:** Git is either not installed or has not been configured with a default user email/name.
*   **Solution:** Ensure git is available in your shell by running `git --version`. Run `git config --global user.email "you@example.com"` to configure global identity.

### Error: "Dependency installation failed"
*   **Cause:** Internet connection issues, package registry downtime, or workspace permission blocks.
*   **Solution:** You can manually install dependencies. Change directory into the created folder and run your package manager's installation command:
    ```bash
    cd <project-folder>
    npm install  # or pnpm install, yarn install, bun install
    ```
