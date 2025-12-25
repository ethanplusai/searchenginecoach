import { defineConfig } from 'astro/config';

// Cloudflare adapter only needed for production builds
// Local dev works without it
const isProduction = process.env.NODE_ENV === 'production' || process.env.CF_PAGES;

let cloudflareAdapter;
if (isProduction) {
  const cloudflare = (await import('@astrojs/cloudflare')).default;
  cloudflareAdapter = cloudflare();
}

export default defineConfig({
  site: 'https://searchenginecoach.com',
  output: 'static',
  adapter: cloudflareAdapter,
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

