import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [// The React and Tailwind plugins are both required for Make, even if
  // Tailwind is not being actively used – do not remove them
  react(), tailwindcss(), ViteImageOptimizer({
    test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
    exclude: undefined,
    include: undefined,
    includePublic: true,
    logStats: true,
    svg: {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupNumericValues: false,
              removeViewBox: false,
            },
          },
        },
        'sortAttrs',
        {
          name: 'addAttributesToSVGElement',
          params: {
            attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
          },
        },
      ],
    },
    png: {
      quality: 90,
    },
    jpeg: {
      quality: 85,
    },
    jpg: {
      quality: 85,
    },
    webp: {
      lossless: true,
    },
    avif: {
      lossless: true,
    },
  }), cloudflare()],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})