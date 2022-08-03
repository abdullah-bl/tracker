import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { million } from 'million/vite-plugin-million';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // plugins: [million({ react: true })],
})
