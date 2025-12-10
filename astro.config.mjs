// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Base URL para GitHub Pages (repo name)
  base: '/Portafolio/',
  
  // Output mode para GitHub Pages
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()]
  }
});