import qs from 'qs'
/**
 * 新增url参数
 * @param url
 * @param params
 * @param options
 * @returns {string}
 */
export const addUrlParams = (url: string, params?: any, options?: any) => {
  const queryIndex = url.lastIndexOf('?')
  const queryString = queryIndex > -1 ? url.substring(queryIndex) : ''
  const urlPrefix = queryIndex > -1 ? url.substring(0, queryIndex) : url
  const old = qs.parse(queryString, { ignoreQueryPrefix: true })
  const paramsString = qs.stringify({ ...old, ...params }, options)
  return `${urlPrefix}?${paramsString}`
}
