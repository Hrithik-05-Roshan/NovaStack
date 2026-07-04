/**
 * NovaStack — Linting Templates
 *
 * Generators for ESLint (flat config) and Prettier.
 */

export function generateEslintConfig(): string {
  return `import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
`;
}

export function generatePrettierConfig(): string {
  const config = {
    semi: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: 'all',
    printWidth: 100,
    bracketSpacing: true,
    arrowParens: 'always',
    plugins: ['prettier-plugin-tailwindcss'],
  };

  return JSON.stringify(config, null, 2) + '\n';
}
