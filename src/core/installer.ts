/**
 * NovaStack — Dependency Installer
 *
 * Installs npm packages using the detected/selected package manager.
 */
import { execa } from 'execa';
import type { PackageManager, ProjectConfig } from '../types/index.js';

/**
 * Get the install command for a given package manager.
 */
function getInstallCommand(pm: PackageManager): string[] {
  switch (pm) {
    case 'pnpm':
      return ['pnpm', 'install'];
    case 'yarn':
      return ['yarn', 'install'];
    case 'bun':
      return ['bun', 'install'];
    case 'npm':
    default:
      return ['npm', 'install'];
  }
}

/**
 * Install project dependencies using the configured package manager.
 */
export async function installDependencies(config: ProjectConfig): Promise<void> {
  const [command, ...args] = getInstallCommand(config.packageManager);

  try {
    await execa(command, args, {
      cwd: config.directory,
      stdio: 'pipe', // Suppress output — we show our own progress
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Dependency installation failed:\n${message}`);
  }
}
