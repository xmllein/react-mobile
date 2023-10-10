import { fileURLToPath, URL } from 'node:url'
import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      types: path.resolve(__dirname, './types'),
    },
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd-mobile',
          style: () => false,
          libDirectory: 'es/components',
          replaceOldImport: true,
        },
      ],
    }),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
      logger: true,
    }),
  ],
  server: {
    port: 3000,
  },
})
