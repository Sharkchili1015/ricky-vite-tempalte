import { defineStore } from 'pinia'
import { usePromise } from '@utils/usePromise'
import { getUserInfo } from '@http/user'

export const useUserInfoStore = defineStore('user-info', () => {
  const { result: userInfo, isLoading } = usePromise(() => getUserInfo())
  return {
    userInfo,
    isLoading,
  }
}, {
  persist: true,
})
