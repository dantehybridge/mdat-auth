import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/auth/',
  plugins: [react()],
  server: { port: 8246 },
})
