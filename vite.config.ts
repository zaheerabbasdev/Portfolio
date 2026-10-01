import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// `VITE_BASE_PATH` lets GitHub Pages deployments serve the app from a
// `/<repo-name>/` sub-path while Netlify/Vercel keep the default `/`.
// See docs/DEPLOYMENT.md for details.
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
