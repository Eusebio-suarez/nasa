// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE_CONFIG } from './site.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: SITE_CONFIG.seo.siteUrl,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
