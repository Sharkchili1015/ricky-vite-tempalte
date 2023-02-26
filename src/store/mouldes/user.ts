import { defineStore } from 'pinia'
import { usePromise } from '@utils/usePromise'
import { login } from '@http/user'
import type { LoginForm } from '@model/user'

export const useUserInfoStore = defineStore('user-info', () => {
  const { result: userInfo, isLoading, refresh: Login } = usePromise((form: LoginForm) => form ? login(form) : null)
  const token = computed(() => userInfo.value?.token)
  return {
    userInfo,
    isLoading,
    Login,
    token,
  }
}, {
  persist: true,
})
