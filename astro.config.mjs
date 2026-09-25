// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project sites live under /<repo-name>/.
// When a custom domain is added, build with BASE_PATH=/ and SITE_URL=https://yourdomain.com
const SITE_URL = process.env.SITE_URL ?? 'https://jonsimo.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/jason-site';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' }, // ~9 KB gz CSS inlined → no render-blocking request
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [sitemap()],
  image: {
    // Every photo is resized + re-encoded (AVIF/WebP) at build time by sharp.
    responsiveStyles: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
