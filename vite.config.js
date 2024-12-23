import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Root for Netlify or custom domain
  plugins: [vue()],
});
