import type { RouteComponent, RouteMeta, RouteRecordRaw } from 'vue-router'

// global.ts
function getRouterMeta() {
  const routerMeta = import.meta.glob('../pages/**/*.ts', {
    eager: true,
    import: 'default',
  })
  return routerMeta
}
const getComponents = import.meta.glob('../pages/**/*.vue', { eager: true, import: 'default' })
// 自动注册路由
export const vueRouters = function (): Array<RouteRecordRaw> {
  // const routerList: Array<RouteRecordRaw> = []
  const pageMeta = getRouterMeta()
  console.log('🚀 ~ file: glob.ts:21 ~ meta:', pageMeta)
  const routerList: Array<RouteRecordRaw> = Object.entries(pageMeta).map(([pagePath, config]): RouteRecordRaw => {
    console.log('🚀 ~ file: glob.ts:21 ~ Object.keys ~ config:', config)
    console.log('🚀 ~ file: glob.ts:32 ~ Object.keys ~ pagePath:', pagePath)
    const path = pagePath.replace('../pages', '').replace('/meta.ts', '')
    console.log('🚀 ~ file: glob.ts:21 ~ constrouterList:Array<RouteRecordRaw>=Object.entries ~ path:', path)
    const name = path.split('/').filter(Boolean).join('-')
    const component = pagePath.replace('meta.ts', 'index.vue')
    // console.log('modules[key]', modules[key])
    // 首字母转小写 letterToLowerCase 首字母转大写 letterToUpperCase
    return {
      path,
      name,
      component: getComponents[component] as RouteComponent,
      meta: config as RouteMeta,
    }
  })
  console.log('🚀 ~ file: glob.ts:29 ~ Object.keys ~ routerList:', routerList)
  return routerList
}
