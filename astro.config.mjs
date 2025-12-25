import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://searchenginecoach.com',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  },
  vite: {
    css: {
      devSourcemap: true
    },
    assetsInclude: ['**/*.csv', '**/*.svg']
  }
});
