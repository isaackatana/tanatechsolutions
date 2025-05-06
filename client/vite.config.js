import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://tana-tech-solutions-v3ml.onrender.com', // Backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional, if you want to rewrite the path
      },
    },
  },
})
