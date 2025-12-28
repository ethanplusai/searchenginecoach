import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://searchenginecoach.com',
  output: 'static',
  adapter: vercel(),
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
