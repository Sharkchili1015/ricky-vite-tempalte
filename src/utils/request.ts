import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'
import type { AxiosRequestConfig } from 'axios'

export interface Response<T> {
  isSuccess: boolean
  code: string | number
  msg: string
  subCode?: any
  subMsg?: any
  args?: any
  result: T
  success: boolean
  fail: boolean
}
const defaultConfig: AxiosRequestConfig = {
  baseURL: '/api',
  // 请求超时时间
  timeout: 10000,
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
}
const instance = axios.create(defaultConfig)

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const headers = config?.headers ?? ({} as Record<string, any>)
  const token = localStorage.getItem('token')
  if (token)
    headers.accessToken = token

  return config
})

instance.interceptors.response.use((res) => {
  const data = res.data
  const code = data.code
  if (code !== '200') {
    if (code === '403') {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
  return res
})

export {
  instance,
}

export function usePost<T>(url: string, postData: any) {
  const { data, isLoading, isFinished, execute } = useAxios<Response<T>>(url, { method: 'post', data: postData }, instance, {
    immediate: false,
  })
  return {
    data,
    isFinished,
    isLoading,
    execute,
  }
}

export function useGet<T>(url: string, options?: Record<string, any>, params?: T) {
  const { data, isLoading, isFinished, execute } = useAxios(url, { method: 'get', params }, instance, options)
  return {
    data,
    isFinished,
    isLoading,
    execute,
  }
}
