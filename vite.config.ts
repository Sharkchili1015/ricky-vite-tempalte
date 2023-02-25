import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { vitePlugins } from './_vitePlugins'
///

/** 设置别名 */
const alias: Record<string, string> = {
  'src': resolve(__dirname, 'src'),
  '@store': resolve(__dirname, 'src', 'store'),
  '@pages': resolve(__dirname, 'src', 'pages'),
  '@hooks': resolve(__dirname, 'src', 'hooks'),
  '@http': resolve(__dirname, 'src', 'http'),
  '@utils': resolve(__dirname, 'src', 'utils'),
  'mock': resolve(__dirname, 'mock'),

}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
    vitePlugins,
  ],
  resolve: {
    alias,
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8808,
    open: true,
    proxy: {
      '/api': 'http://localhost:8808',
    },
  },
})
