import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://entertainment.bielsania.pl",
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/wyslane'),
    }),
  ]
});