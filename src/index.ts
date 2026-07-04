/**
 * NovaStack CLI — Entry Point
 *
 * Registers all commands and parses CLI arguments.
 * This is the file that runs when a user types `novastack` or `npx novastack`.
 */
import { Command } from 'commander';
import { createCommand } from './commands/create.js';
import { CLI_NAME, CLI_VERSION, CLI_DESCRIPTION } from './utils/constants.js';

const program = new Command();

program
  .name(CLI_NAME)
  .version(CLI_VERSION, '-v, --version', 'Display the current NovaStack version')
  .description(CLI_DESCRIPTION);

// Register commands
program.addCommand(createCommand);

program.parse();
