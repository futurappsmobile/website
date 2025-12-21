// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update this with your GitHub Pages URL
  // Format: https://username.github.io (for user/organization pages)
  // Format: https://username.github.io/repository-name (for project pages)
  site: 'https://futurappsmobile.github.io/webaite',
  
  // GitHub Pages uses static output
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});