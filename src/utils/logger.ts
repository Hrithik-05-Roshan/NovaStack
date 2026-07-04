/**
 * NovaStack Logger
 *
 * Pretty console output with colors and symbols.
 * Respects the NO_COLOR environment variable for accessibility.
 */
import pc from 'picocolors';

const isColorDisabled = !!process.env['NO_COLOR'];

/** Format helpers that degrade gracefully when NO_COLOR is set */
const fmt = {
  bold: (s: string) => (isColorDisabled ? s : pc.bold(s)),
  green: (s: string) => (isColorDisabled ? s : pc.green(s)),
  red: (s: string) => (isColorDisabled ? s : pc.red(s)),
  yellow: (s: string) => (isColorDisabled ? s : pc.yellow(s)),
  cyan: (s: string) => (isColorDisabled ? s : pc.cyan(s)),
  dim: (s: string) => (isColorDisabled ? s : pc.dim(s)),
  magenta: (s: string) => (isColorDisabled ? s : pc.magenta(s)),
};

export const logger = {
  /** Informational message */
  info(message: string) {
    console.log(`  ${fmt.cyan('ℹ')} ${message}`);
  },

  /** Success message */
  success(message: string) {
    console.log(`  ${fmt.green('✔')} ${message}`);
  },

  /** Warning message */
  warn(message: string) {
    console.log(`  ${fmt.yellow('⚠')} ${message}`);
  },

  /** Error message */
  error(message: string) {
    console.error(`  ${fmt.red('✖')} ${message}`);
  },

  /** Step in a process (with tree connector) */
  step(message: string, isLast = false) {
    const connector = isLast ? '└──' : '├──';
    console.log(`  ${fmt.dim(connector)} ${message}`);
  },

  /** Step completed with timing */
  stepDone(message: string, durationMs: number, isLast = false) {
    const connector = isLast ? '└──' : '├──';
    const time = fmt.dim(`(${(durationMs / 1000).toFixed(1)}s)`);
    console.log(`  ${fmt.dim(connector)} ${message}  ${fmt.green('✓')} ${time}`);
  },

  /** Blank line */
  newline() {
    console.log('');
  },

  /** Raw print (no prefix) */
  raw(message: string) {
    console.log(message);
  },

  /** Dimmed text */
  dim(message: string) {
    console.log(`  ${fmt.dim(message)}`);
  },

  /** Print a key-value pair (for summary display) */
  kv(key: string, value: string) {
    console.log(`  ${fmt.green('✔')} ${fmt.bold(key)}: ${value}`);
  },
};

export { fmt };
