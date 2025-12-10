// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  
  site: "https://Gyro1203.github.io",

  // Base URL para GitHub Pages (repo name)
  base: '/Portafolio/',
  
  // Output mode para GitHub Pages
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()]
  }
});