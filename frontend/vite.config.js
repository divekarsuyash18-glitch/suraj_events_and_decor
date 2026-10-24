import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/suraj_events_and_decor/',
  plugins: [react(), tailwindcss()],
})
