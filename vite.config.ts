import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 80,
    strictPort: true,
    open: true,
  },
  plugins: [react()],
})
