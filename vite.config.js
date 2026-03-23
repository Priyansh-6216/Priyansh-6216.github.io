import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/priyanshportfolio/',
  plugins: [react()],
  resolve: {
    alias: { '@': '/src' }
  }
})
