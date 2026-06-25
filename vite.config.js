import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },  // pehle
    react(),                        // baad mein
    tailwindcss(),
  ],
})

