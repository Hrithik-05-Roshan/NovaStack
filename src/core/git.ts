/**
 * NovaStack — Git Initialization
 *
 * Initializes a git repository with a proper initial commit.
 */
import { execa } from 'execa';
import type { ProjectConfig } from '../types/index.js';

/**
 * Initialize a git repository and create the initial commit.
 */
export async function initGit(config: ProjectConfig): Promise<void> {
  const cwd = config.directory;

  try {
    await execa('git', ['init'], { cwd });
    await execa('git', ['add', '-A'], { cwd });
    await execa('git', ['commit', '-m', 'Initial commit from NovaStack'], { cwd });
  } catch {
    // Git might not be installed — that's okay, it's a non-critical step
    throw new Error(
      'Failed to initialize git. Make sure git is installed and accessible from your terminal.'
    );
  }
}
