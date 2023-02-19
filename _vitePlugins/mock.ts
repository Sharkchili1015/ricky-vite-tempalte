import { viteMockServe } from 'vite-plugin-mock'

export const mockPlugin = [
  viteMockServe({
    supportTs: true,
    mockPath: 'mock',
  }),
]
