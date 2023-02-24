import type { RouteRecordRaw } from 'vue-router'
import { vueRouters } from './glob'

export const basicRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/Login/index.vue'),
  },
  ...vueRouters(),
]
