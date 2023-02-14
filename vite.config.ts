import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * 改端口
 * server: {
 *     port: 3001
 *   }
 *
 */
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [vue()],
})
