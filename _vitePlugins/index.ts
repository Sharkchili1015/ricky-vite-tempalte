import { autoImportPlugin } from './auto'
import { mockPlugin } from './mock'

export const vitePlugins = [...autoImportPlugin, ...mockPlugin]
