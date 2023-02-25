import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { defaults } from 'lodash-es'
import { useUserStore } from '@store/mouldes/user'
interface RequestResult<T = unknown> {
  msg: string | undefined
  code: string
  data: T
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

function request<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<RequestResult<T>>> {
  const { getToken } = useUserStore()
  const token = getToken()
  const headers = config?.headers ?? ({} as Record<string, any>)
  if (token)
    headers.accessToken = token

  else if (url !== 'authorize/login')
    throw new Error('token is empty')

  const option = defaults<AxiosRequestConfig, AxiosRequestConfig>(
    config || {},
    {
      url,
      method: 'GET',
      headers,
      timeout: 20 * 1000,
    },
  )

  return instance.request(option)
}

export function get<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<RequestResult<T>>> {
  return request(url, config)
}

export function post<T>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<RequestResult<T>>> {
  return request(url, defaults({ data, method: 'POST' }, config))
}

export function patch<T>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<RequestResult<T>>> {
  return request(url, defaults({ data, method: 'PATCH' }, config))
}

export function update<T>(
  url: string,
  data: Record<string, any>,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<RequestResult<T>>> {
  return request(url, defaults({ data, method: 'POST' }, config))
}

export function del<T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<RequestResult<T>>> {
  return request(url, defaults({ method: 'DELETE' }, config))
}
