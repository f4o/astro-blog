import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://ubiquitous-begonia-1193d3.netlify.app",
  integrations: [preact()]
});