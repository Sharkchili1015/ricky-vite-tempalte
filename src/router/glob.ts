import type { RouteComponent, RouteMeta, RouteRecordRaw } from 'vue-router'

// global.ts
function getRouterMeta() {
  const routerMeta = import.meta.glob('../pages/**/meta.ts', {
    eager: true,
    import: 'default',
  })
  return routerMeta
}
const getComponents = import.meta.glob('../pages/**/*.vue', { eager: true, import: 'default' })
console.log('🚀 ~ file: glob.ts:12 ~ getComponents:', getComponents)
// 自动注册路由
export const vueRouters = function (): Array<RouteRecordRaw> {
  // const routerList: Array<RouteRecordRaw> = []
  const pageMeta = getRouterMeta()
  const routerList: Array<RouteRecordRaw> = Object.entries(pageMeta).map(([pagePath, config]): RouteRecordRaw => {
    const path = pagePath.replace('../pages', '').replace('/meta.ts', '')
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
  return routerList
}
