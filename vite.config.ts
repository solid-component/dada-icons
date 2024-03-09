import { resolve } from 'path'
import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'MyLib',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['solid-js']
    }
  },
  plugins: [dts({
    outDir: './types'
  }), solid()],
})
