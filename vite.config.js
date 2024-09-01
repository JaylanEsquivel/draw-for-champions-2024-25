import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
      {
        find: '@assets',
        replacement: fileURLToPath(
          new URL('./src/assets', import.meta.url),
        ),
      },
      {
        find: '@components',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url),
        ),
      },
      {
        find: '@composables',
        replacement: fileURLToPath(
          new URL('./src/composables', import.meta.url),
        ),
      },
    ]
  }
})
