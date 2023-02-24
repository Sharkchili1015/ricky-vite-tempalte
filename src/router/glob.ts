import type { RouteRecordRaw } from 'vue-router'

// global.ts
function getModules() {
  const components = import.meta.glob('../pages/**/*.vue')
  return components
}

function letterToLowerCase(str: string) {
  return str[0].toLowerCase() + str.slice(1)
}

// 自动注册路由
export const vueRouters = function (): Array<RouteRecordRaw> {
  const routerList: Array<RouteRecordRaw> = []
  const modules = getModules()
  Object.keys(modules).forEach((key) => {
    const path = key.replace('../pages', '').replace('/index.vue', '')
    const name = path.replace('/', '')
    console.log('modules[key]', modules[key])
    // 首字母转小写 letterToLowerCase 首字母转大写 letterToUpperCase
    routerList.push({
      path: `${letterToLowerCase(path)}`,
      name: `${letterToLowerCase(name)}`,
      component: modules[key],
    })
    console.log('🚀 ~ file: glob.ts:29 ~ Object.keys ~ routerList:', routerList)
  })
  return routerList
}
