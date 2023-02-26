import { defineStore } from 'pinia'
import { usePromise } from '@utils/usePromise'
import { login } from '@http/user'
import type { LoginForm } from '@model/user'

export const useUserInfoStore = defineStore('user-info', () => {
  const { result: userInfo, isLoading, refresh: Login } = usePromise((form: LoginForm) => form ? login(form) : null)
  return {
    userInfo,
    isLoading,
    Login,
  }
}, {
  persist: true,
})
