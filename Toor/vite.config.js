// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Travels/', // Yeh repo name hona chahiye
  plugins: [react()],
})
