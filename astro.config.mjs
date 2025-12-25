import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://searchenginecoach.com',
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
