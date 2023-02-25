import type { MockMethod } from 'vite-plugin-mock'
// import { Random, mock } from 'mockjs'
import { resultSuccess } from '../util'

const userInfo = ['tom', 'jerry', 'Ricky']
export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => resultSuccess(userInfo),
  },
] as MockMethod[]
