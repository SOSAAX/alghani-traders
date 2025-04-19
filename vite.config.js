import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: '.', // explicitly set root
  publicDir: 'public', // ensure public folder is detected
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // tell Vite exactly where the entry point is
    },
  },
})
