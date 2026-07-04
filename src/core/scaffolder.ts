/**
 * NovaStack — Scaffolder
 *
 * Orchestrates file generation. Takes a ProjectConfig, resolves all templates,
 * and writes them to disk atomically (all-or-nothing).
 */
import fs from 'fs-extra';
import path from 'node:path';
import type { ProjectConfig, ScaffoldResult, TemplateFile } from '../types/index.js';
import { generateAllFiles } from '../templates/index.js';

/**
 * Scaffold a new project to disk.
 *
 * 1. Check if directory exists (fail if non-empty)
 * 2. Generate all template files
 * 3. Write all files to disk
 * 4. Return result with stats
 *
 * If any step fails, the created directory is cleaned up (rollback).
 */
export async function scaffold(config: ProjectConfig): Promise<ScaffoldResult> {
  const start = performance.now();
  let dirCreated = false;

  try {
    // ── Pre-flight checks ─────────────────────────────
    if (await fs.pathExists(config.directory)) {
      const contents = await fs.readdir(config.directory);
      if (contents.length > 0) {
        return {
          success: false,
          filesCreated: 0,
          duration: performance.now() - start,
          error: `Directory "${config.name}" already exists and is not empty.`,
        };
      }
    }

    // ── Create directory ──────────────────────────────
    await fs.ensureDir(config.directory);
    dirCreated = true;

    // ── Generate templates ────────────────────────────
    const files: TemplateFile[] = generateAllFiles(config);

    // ── Write files ───────────────────────────────────
    for (const file of files) {
      const fullPath = path.join(config.directory, file.path);
      await fs.ensureDir(path.dirname(fullPath));
      await fs.writeFile(fullPath, file.content, 'utf-8');
    }

    return {
      success: true,
      filesCreated: files.length,
      duration: performance.now() - start,
    };
  } catch (error) {
    // ── Rollback on failure ───────────────────────────
    if (dirCreated) {
      try {
        await fs.remove(config.directory);
      } catch {
        // Best-effort cleanup
      }
    }

    return {
      success: false,
      filesCreated: 0,
      duration: performance.now() - start,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
