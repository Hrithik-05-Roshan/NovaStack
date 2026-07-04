# Contributing to NovaStack

Thank you for your interest in contributing to NovaStack! This document outlines the guidelines and procedures for setting up your local workspace, making changes, and submitting contributions to the project.

As the maintainers, we strive to keep NovaStack highly polished, reliable, and focused on developer experience.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md). Please report any unacceptable behavior to the maintainers.

---

## Local Development Setup

To modify NovaStack CLI or the template engines, you'll need to set up the codebase on your local machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) >= 18.0.0
*   [npm](https://www.npmjs.com/) or another package manager (`pnpm`, `yarn`, `bun`)

### Workspace Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Hrithik-05-Roshan/NovaStack.git
    cd NovaStack
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Build the CLI executable:
    ```bash
    npm run build
    ```

4.  Link or run the built script to test:
    ```bash
    # Run the compiled CLI directly
    node dist/index.js create test-app --no-install --no-git
    ```

### Build Commands

*   `npm run build`: Uses `tsup` to compile TypeScript to ESM in the `dist/` directory.
*   `npm run dev`: Compiles code in watch mode.
*   `npm run typecheck`: Runs `tsc` to verify type-safety.

---

## Repository Structure

Understanding the layout of NovaStack makes editing easier:

```
├── dist/                # Compiled CLI files (ignored by Git)
├── docs/                # Extended documentation and plans
├── src/                 # CLI source code
│   ├── commands/        # Commander CLI commands (e.g. create.ts)
│   ├── core/            # Scaffolder, Installer, and Git processes
│   ├── prompts/         # Interactive inquirer/clack prompts
│   ├── templates/       # Generated project code templates
│   ├── types/           # Core TypeScript types
│   ├── utils/           # Shared logger and constants
│   └── index.ts         # CLI Entry Point
├── website/             # Official Next.js landing page & docs website
├── package.json         # CLI metadata & dependencies
└── tsconfig.json        # TypeScript compiler configurations
```

---

## Making Changes

### 1. Polish and Quality
NovaStack values polish above all else. Every code change must:
*   Maintain clean indentation and use Prettier formatting (`npm run format` inside the generated project, or follow the `.prettierrc` specifications).
*   Compile without any TypeScript compilation errors (`npm run typecheck`).
*   Include descriptive comments where necessary (e.g. JSDoc comments on template generation functions).

### 2. Modifying Templates
If you want to edit what the generated project outputs, you must modify the code templates in `src/templates/`:
*   `app.ts`: Route pages, layouts, loading, errors.
*   `config.ts`: Configuration outputs like `next.config.ts`, `tailwind.css`, etc.
*   `misc.ts`: Environment files and the project-level README.

Remember to re-run `npm run build` after editing templates so the changes are compiled into the CLI package.

---

## Pull Request Guidelines

Before submitting a Pull Request, please ensure the following:

1.  **Branch Name:** Create a descriptive branch (e.g., `feature/improved-cli-spinner` or `fix/gitignore-node-modules`).
2.  **Lint and Format:** Ensure the code passes all lints.
3.  **Single Purpose:** Keep PRs focused. Do not mix unrelated refactoring with new template setups.
4.  **No Extraneous Features:** Do not add undocumented commands (like "doctor", "registry", or AI capabilities) as they are reserved for future major releases.
5.  **Commit Messages:** Use clear, descriptive commit messages (e.g., `feat(cli): enhance welcome banner colors and spacing`).

After creating the PR, the maintainers will review the code, run regression checks, and provide feedback.
