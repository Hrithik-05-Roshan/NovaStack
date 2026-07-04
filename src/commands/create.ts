/**
 * NovaStack — Create Command
 *
 * The main `novastack create` command. Orchestrates:
 * 1. Interactive prompts
 * 2. File scaffolding
 * 3. Dependency installation
 * 4. Git initialization
 * 5. Success summary
 */
import { Command } from 'commander';
import * as p from '@clack/prompts';
import { runCreatePrompts } from '../prompts/create.js';
import { scaffold } from '../core/scaffolder.js';
import { installDependencies } from '../core/installer.js';
import { initGit } from '../core/git.js';
import { logger, fmt } from '../utils/logger.js';
import { BANNER, STACK } from '../utils/constants.js';

export const createCommand = new Command('create')
  .description('Create a new production-ready full-stack application')
  .argument('[name]', 'Project name')
  .option('--no-git', 'Skip git initialization')
  .option('--no-install', 'Skip dependency installation')
  .action(async (nameArg: string | undefined, options: { git: boolean; install: boolean }) => {
    // ── Banner ────────────────────────────────────────
    logger.newline();
    console.log(fmt.cyan(BANNER));
    logger.newline();

    // ── Prompts ───────────────────────────────────────
    const config = await runCreatePrompts(nameArg);
    if (!config) {
      process.exit(0);
    }

    // Apply CLI flags
    config.initGit = options.git;
    config.installDeps = options.install;

    logger.newline();

    // ── Scaffold ──────────────────────────────────────
    const scaffoldSpinner = p.spinner();
    scaffoldSpinner.start('Scaffolding project files...');

    const result = await scaffold(config);

    if (!result.success) {
      scaffoldSpinner.stop('Scaffolding failed', 1);
      p.outro(fmt.red(`Scaffolding failed: ${result.error || 'Unknown error during scaffolding.'}`));
      process.exit(1);
    }

    scaffoldSpinner.stop(`Scaffolded ${result.filesCreated} files`, 0);

    // ── Install Dependencies ──────────────────────────
    if (config.installDeps) {
      const installSpinner = p.spinner();
      installSpinner.start(`Installing dependencies via ${config.packageManager}...`);

      try {
        await installDependencies(config);
        installSpinner.stop('Dependencies installed', 0);
      } catch (error) {
        installSpinner.stop('Dependency installation failed', 1);
        p.log.warn(
          error instanceof Error ? error.message : 'Failed to install dependencies.'
        );
        p.log.info(`You can install them manually: cd ${config.name} && ${config.packageManager} install`);
      }
    }

    // ── Git Init ──────────────────────────────────────
    if (config.initGit) {
      const gitSpinner = p.spinner();
      gitSpinner.start('Initializing git repository...');

      try {
        await initGit(config);
        gitSpinner.stop('Git repository initialized', 0);
      } catch {
        gitSpinner.stop('Git initialization skipped', 1);
        p.log.warn('Git is not installed or not configured. Skipping.');
      }
    }

    // ── Success Summary ───────────────────────────────
    logger.newline();
    p.outro(fmt.green('Project created successfully! 🚀'));

    logger.newline();
    console.log(`  ${fmt.bold('Next steps:')}`);
    let stepNum = 1;
    console.log(`    ${fmt.cyan(stepNum++)}.  cd ${fmt.bold(config.name)}`);
    if (!config.installDeps) {
      console.log(`    ${fmt.cyan(stepNum++)}.  ${config.packageManager} install`);
    }
    console.log(`    ${fmt.cyan(stepNum++)}.  cp .env.example .env.local   ${fmt.dim('# Configure environment variables')}`);
    console.log(`    ${fmt.cyan(stepNum++)}.  docker compose up -d         ${fmt.dim('# Start PostgreSQL database container')}`);
    console.log(`    ${fmt.cyan(stepNum++)}.  npx prisma db push           ${fmt.dim('# Sync database schema')}`);
    console.log(`    ${fmt.cyan(stepNum++)}.  ${config.packageManager} run dev               ${fmt.dim('# Start local development server')}`);
    logger.newline();

    // Stack summary
    console.log(`  ${fmt.dim('Stack summary:')}`);
    console.log(`    ${fmt.dim(
      `${STACK.framework} · ${STACK.language} · ${STACK.styling} · ${STACK.orm} · ${STACK.database} · ${STACK.auth} · ${STACK.ui}`
    )}`);
    logger.newline();
  });
