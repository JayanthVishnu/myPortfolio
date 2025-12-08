import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative paths so the build works regardless of the repo name
  // (avoids hardcoding '/portfolio/' which caused 404s when the repo path differs).
  base: './',
  plugins: [react()],
})
