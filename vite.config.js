import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // "/" for a normal static host; the theme URL when building for WordPress
  // (see `npm run build:wp`).
  base: process.env.VITE_BASE || '/',
  publicDir: 'public',
  build: {
    // functions.php reads this to find the hashed asset filenames.
    manifest: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: { port: 3000, host: '0.0.0.0' },
});
