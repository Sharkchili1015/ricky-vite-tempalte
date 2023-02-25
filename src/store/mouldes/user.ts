import { defineStore } from 'pinia'

export const useUserStore = defineStore('user-info', () => {
  const token = ref<string | null>(null)
  const getToken = () => {
    return token
  }
  return {
    token,
    getToken,
  }
}, {
  persist: true,
})
