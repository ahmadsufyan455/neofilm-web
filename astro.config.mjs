import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://neofilm.cam',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404')
    })
  ]
});
