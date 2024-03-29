import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
//


export default defineConfig({
  base:'/vitessa/',
  plugins: [
    vue(),
    federation({
      remotes: {
        slide: "https://karta1020146.github.io/slide/assets/fed/slide.js",
      },
      shared: ['vue']
    }),
  ],
  build:{
    target:"esnext"
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    "/api": {
      target: "https://karta1020146.github.io/vitessa/",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
})
