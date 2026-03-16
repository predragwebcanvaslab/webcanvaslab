import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const portfolioDir = 'C:/Users/peted/.gemini/antigravity/brain/fbb57d52-eda3-4f38-91bd-95c752659394'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@portfolio': portfolioDir,
    },
  },
  server: {
    fs: {
      allow: ['.', portfolioDir],
    },
  },
})
