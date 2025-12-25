import { defineConfig } from 'astro/config';

// Only import Cloudflare adapter in production/CI environments
// Local dev works without it (shows a warning but functions fine)
let adapter = undefined;
if (process.env.CF_PAGES || process.env.CI || process.env.NODE_ENV === 'production') {
  const cloudflare = await import('@astrojs/cloudflare');
  adapter = cloudflare.default();
}

export default defineConfig({
  site: 'https://searchenginecoach.com',
  output: 'static',
  adapter,
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
