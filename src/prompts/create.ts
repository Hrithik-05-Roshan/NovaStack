/**
 * NovaStack — Create Command Prompts
 *
 * Uses @clack/prompts for a beautiful interactive experience.
 * MVP: Only asks for project name. Everything else is the golden path.
 */
import * as p from '@clack/prompts';
import path from 'node:path';
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
 * Validate a project name for npm compatibility.
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
  p.log.step('Your stack (zero-choice, maximum quality):');
  console.log('');
  console.log(`  ${fmt.dim('Framework')}    ${fmt.bold(STACK.framework)}`);
  console.log(`  ${fmt.dim('Language')}     ${fmt.bold(STACK.language)}`);
  console.log(`  ${fmt.dim('Styling')}      ${fmt.bold(STACK.styling)}`);
  console.log(`  ${fmt.dim('Database')}     ${fmt.bold(STACK.database)}`);
  console.log(`  ${fmt.dim('ORM')}          ${fmt.bold(STACK.orm)}`);
  console.log(`  ${fmt.dim('Auth')}         ${fmt.bold(STACK.auth)}`);
  console.log(`  ${fmt.dim('UI')}           ${fmt.bold(STACK.ui)}`);
  console.log(`  ${fmt.dim('Linting')}      ${fmt.bold(STACK.linting)}`);
  console.log(`  ${fmt.dim('Container')}    ${fmt.bold(STACK.containerization)}`);
  console.log('');

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
