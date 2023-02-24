import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export const autoImportPlugin = [
  AutoImport({
    // targets to transform
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: [
      // presets
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
    dirs: ['src/hooks', 'src/utils'],
    defaultExportByFilename: false,
    vueTemplate: false,
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
    resolvers: [ElementPlusResolver(), // Auto import icon components
      // 自动导入图标组件
      IconsResolver({
        prefix: 'Icon',
      })],
  }),
  Components({
    dirs: ['src/components'],
    resolvers: [ElementPlusResolver()],
  }),
  Icons({
    autoInstall: true,
  }),
]
