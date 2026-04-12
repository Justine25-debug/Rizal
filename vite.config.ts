import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/Rizal/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      'react-grid-gallery': fileURLToPath(
        new URL('./node_modules/react-grid-gallery/dist/react-grid-gallery.esm.js', import.meta.url),
      ),
    },
  },
}))
