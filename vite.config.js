import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // IMPORTANT: use relative paths so GitHub Pages serves correctly
  server: { port: 5173 },
})
