import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sebas0399.github.io',
  base: '/redmi6a',
  vite: {
    plugins: [tailwindcss()]
  }
});