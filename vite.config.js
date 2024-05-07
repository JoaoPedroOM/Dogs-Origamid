import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgx from "@svgx/vite-plugin-react";
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [react(), svgx(),],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})