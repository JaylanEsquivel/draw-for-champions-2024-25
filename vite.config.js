import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';
import { quasar } from '@quasar/vite-plugin'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [
    eslintPlugin(),
    vue(),
    quasar({
      sassVariables: 'src/styles/quasar-variables.sass'
    })
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
