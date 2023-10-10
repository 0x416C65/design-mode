import { defineConfig } from 'tsup';

export default defineConfig({
  minify: true,
  outDir: 'extension',
  publicDir: 'public'
});
