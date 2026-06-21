import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.ngrok.io'],
  },
  ssr: {
    // motion usa APIs de browser — se bundlea en el SSR para evitar errores de importación
    noExternal: ['motion'],
  },
})
