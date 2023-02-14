import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

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
  resolve: {
    alias: {
      "@": path.resolve(__dirname,"src"),
      "com": path.resolve(__dirname,"src/components")
    }
  },
  plugins: [vue()],
})
