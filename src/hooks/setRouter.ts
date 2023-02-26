import type { Action } from '@model/router'
import { useRouter } from 'vue-router'
export const push = (path: string, data?: Record<string, any>, action?: Action) => {
  const hooksRoute = useRouter()
  console.log('🚀 ~ file: setRouter.ts:6 ~ push ~ hooksRoute:', hooksRoute)
  if (data && path) {
    if (action === 'query')
      hooksRoute.push({ path, query: data })
    else
      hooksRoute.push({ path, params: data })
  }
  else {
    hooksRoute.push({ path })
  }
}
