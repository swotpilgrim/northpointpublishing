// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://swotpilgrim.github.io',
  base: '/northpointpublishing',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0, // Don't inline assets, keep them as separate files for better caching
    },
    server: {
      headers: {
        'Cache-Control': 'public, max-age=31536000', // Cache static assets for 1 year
      }
    }
  }
});
