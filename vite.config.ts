import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5&action=upload&format=json'
    }
  }
})
