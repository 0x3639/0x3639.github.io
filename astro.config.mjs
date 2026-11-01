// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://0x3639.com',
  compressHTML: true,
  build: {
    // One HTML file, styles inlined: the page is self-contained static HTML.
    inlineStylesheets: 'always',
  },
});
