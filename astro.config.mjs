import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://searchenginecoach.com',
  output: 'static',
  adapter: cloudflare(),
  build: {
    format: 'directory'
  },
  vite: {
    css: {
      devSourcemap: true
    }
  }
});

