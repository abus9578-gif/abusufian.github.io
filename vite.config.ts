
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For a project site like https://abus9578-gif.github.io/abusufian.github.io/
  // base should be the repository name.
  base: '/abusufian.github.io/',
  build: {
    outDir: 'dist',
  }
});
