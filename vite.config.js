import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base:'/bus/',
  plugins: [react()],
})
