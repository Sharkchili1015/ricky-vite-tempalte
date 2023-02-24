import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { vitePlugins } from './_vitePlugins'
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir)
}

/** 设置别名 */
const alias: Record<string, string> = {
  '@': pathResolve('src'),

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
