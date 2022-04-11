import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
  srcDir: './src',
  // Path to Astro components, pages, and data
  outDir: './public',
  // When running `astro build`, path to final static output
  publicDir: './assets',
  // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
  site: 'https://bearny-bakes.com.my',
  build: {
    // site: 'http://example.com',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true // Generate sitemap (set to "false" to disable)

  },
  server: {
    port: 3000,
    host: true
  },
  integrations: [
    vue(),
    tailwind({
      config: {
        applyAstroPreset: false,
        applyBaseStyles: true,
      }
    })]
});