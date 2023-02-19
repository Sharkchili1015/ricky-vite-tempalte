import type { MockMethod } from 'vite-plugin-mock'
// import { Random, mock } from 'mockjs'
import { resultSuccess } from '../util'

/**
 * 在这个文件使用mockjs模拟接口数据返回
 * 在IMockService中定义interface
 * 在CommonMockService中实现interface
 * 在store中调用CommonMockService中的方法即可
 */
const userInfo = ['tom', 'jerry', 'Ricky']
export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => resultSuccess(userInfo),
  },
] as MockMethod[]
