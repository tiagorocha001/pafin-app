import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';
export default mergeConfig(
 defineConfig({
   test: {
     globals: true,
     environment: 'happy-dom',
     exclude: ['**/node_modules/**', '**/tests/e2e/**'],
     coverage: {
       provider: 'v8',
       reporter: ['text', 'json', 'html'],
       lines: 100,
       functions: 100,
       branches: 100,
       statements: 100,
       exclude: [
         '**/src/yourIgnoredFile.js',
       ],
     },
   },
 }),
);
