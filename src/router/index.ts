import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import { useUserInfoStore } from '@store/mouldes/user'
import { basicRoutes } from './routes'

// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = []
const getRouteNames = (array: any[]) =>
  array.forEach((item) => {
    WHITE_NAME_LIST.push(item.name)
    getRouteNames(item.children || [])
  })
getRouteNames(basicRoutes)

// app router
// 创建一个可以被 Vue 应用程序使用的路由实例
export const router = createRouter({
  history: createWebHistory(),
  // 应该添加到路由的初始路由列表。
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 是否应该禁止尾部斜杠。默认为假
  strict: true,
})

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_NAME_LIST.includes(name as string))
      router.hasRoute(name) && router.removeRoute(name)
  })
}

router.beforeEach((to, from, next) => {
  const { token } = toRefs(useUserInfoStore())
  if (!token.value && to.path !== '/login')
    next({ path: '/login' })
  else
    next()
})
// config router
// 配置路由器
export function setupRouter(app: App<Element>) {
  app.use(router)
}
