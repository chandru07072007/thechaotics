import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: [
        '**/public/**',
        '**/*.mp4',
        '**/*.glb',
        '**/*.png',
        '**/*.jpg',
        '**/*.webp',
        '**/.git/**'
      ]
    }
  }
})

