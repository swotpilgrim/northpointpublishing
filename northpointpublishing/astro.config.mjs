// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://swotpilgrim.github.io',
  base: '/northpointpublishing',
  output: 'static',
  build: {
    assets: 'assets'
  }
});
