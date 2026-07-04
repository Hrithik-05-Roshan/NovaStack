/**
 * NovaStack — Create Command Prompts
 *
 * Uses @clack/prompts for a beautiful interactive experience.
 * MVP: Only asks for project name. Everything else is the golden path.
 */
import * as p from '@clack/prompts';
import path from 'node:path';
import fs from 'fs-extra';
import { DEFAULT_PROJECT_NAME, STACK } from '../utils/constants.js';
import { fmt } from '../utils/logger.js';
import type { PackageManager, ProjectConfig } from '../types/index.js';

/**
 * Detect the user's preferred package manager from npm_config_user_agent.
 * Falls back to 'npm' if detection fails.
 */
function detectPackageManager(): PackageManager {
  const agent = process.env['npm_config_user_agent'] || '';
  if (agent.startsWith('pnpm')) return 'pnpm';
  if (agent.startsWith('yarn')) return 'yarn';
  if (agent.startsWith('bun')) return 'bun';
  return 'npm';
}

/**
 * Validate a project name for npm compatibility and directory availability.
 */
function validateProjectName(name: string): string | undefined {
  if (!name || name.trim().length === 0) {
    return 'Project name cannot be empty.';
  }

  // npm package name rules
  const kebabCase = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/;
  if (!kebabCase.test(name)) {
    return 'Project name must be lowercase, kebab-case (e.g., my-cool-app).';
  }

  if (name.length > 214) {
    return 'Project name must be under 214 characters.';
  }

  // Check if directory exists and is not empty
  const targetDir = path.resolve(process.cwd(), name);
  if (fs.existsSync(targetDir)) {
    try {
      const contents = fs.readdirSync(targetDir);
      if (contents.length > 0) {
        return `Directory "${name}" already exists and is not empty.`;
      }
    } catch {
      // Permission or other file system issues
      return `Directory "${name}" is inaccessible.`;
    }
  }

  return undefined; // valid
}

/**
 * Run the interactive prompts for `novastack create`.
 * Returns a fully resolved ProjectConfig.
 */
export async function runCreatePrompts(projectNameArg?: string): Promise<ProjectConfig | null> {
  p.intro(fmt.cyan('Let\'s create your project'));

  // ── Project Name ──────────────────────────────────────
  let projectName: string;

  if (projectNameArg) {
    const validationError = validateProjectName(projectNameArg);
    if (validationError) {
      p.log.error(validationError);
      p.cancel('Invalid project name.');
      return null;
    }
    projectName = projectNameArg;
    p.log.info(`Project name: ${fmt.bold(projectName)}`);
  } else {
    const nameResult = await p.text({
      message: 'What is your project name?',
      placeholder: DEFAULT_PROJECT_NAME,
      defaultValue: DEFAULT_PROJECT_NAME,
      validate: (value) => validateProjectName(value || DEFAULT_PROJECT_NAME),
    });

    if (p.isCancel(nameResult)) {
      p.cancel('Operation cancelled.');
      return null;
    }

    projectName = (nameResult as string) || DEFAULT_PROJECT_NAME;
  }

  // ── Display the Golden Stack ──────────────────────────
  p.log.step('Opinionated, high-performance tech stack:');
  console.log(fmt.dim('  │'));
  console.log(`  ${fmt.dim('│')}  ${fmt.dim('Framework:')}   ${fmt.cyan(STACK.framework)}`);
  console.log(`  ${fmt.dim('│')}  ${fmt.dim('Language:')}    ${fmt.cyan(STACK.language)}`);
  console.log(`  ${fmt.dim('│')}  ${fmt.dim('Styling:')}     ${fmt.cyan(STACK.styling)}`);
  console.log(`  ${fmt.dim('│')}  ${fmt.dim('Database:')}    ${fmt.cyan(STACK.database)}`);
  console.log(`  ${fmt.dim('│')}  ${fmt.dim('ORM:')}         ${fmt.cyan(STACK.orm)}`);
  console.log(`  ${fmt.dim('│')}  ${fmt.dim('Auth:')}        ${fmt.cyan(STACK.auth)}`);
  console.log(`  ${fmt.dim('│')}  ${fmt.dim('UI:')}          ${fmt.cyan(STACK.ui)}`);
  console.log(`  ${fmt.dim('│')}  ${fmt.dim('Linting:')}     ${fmt.cyan(STACK.linting)}`);
  console.log(`  ${fmt.dim('│')}  ${fmt.dim('Container:')}   ${fmt.cyan(STACK.containerization)}`);
  console.log(fmt.dim('  │'));

  // ── Confirm ───────────────────────────────────────────
  const confirmed = await p.confirm({
    message: `Create ${fmt.bold(projectName)} with this stack?`,
    initialValue: true,
  });

  if (p.isCancel(confirmed) || !confirmed) {
    p.cancel('Operation cancelled.');
    return null;
  }

  // ── Resolve config ────────────────────────────────────
  const packageManager = detectPackageManager();
  const directory = path.resolve(process.cwd(), projectName);

  return {
    name: projectName,
    directory,
    initGit: true,
    installDeps: true,
    packageManager,
  };
}
