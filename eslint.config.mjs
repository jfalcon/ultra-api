import { FlatCompat } from '@eslint/eslintrc';

// import.meta.dirname is available after Node.js v20.11.0
const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

// note, only disallow barrel imports for MUI since it's a large library
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      'no-alert': 'error',
      'no-console': 'warn',
      'no-restricted-imports': ['error', {
        patterns: [{ 'regex': '^@mui/[^/]+$' }]
      }
    ],
      quotes: ['warn', 'single', { avoidEscape: true }],
      semi: 'warn', // account for the AST
    },
  }),
];

export default eslintConfig;
