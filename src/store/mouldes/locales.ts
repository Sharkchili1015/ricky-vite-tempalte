import { defineStore } from 'pinia'
type langEnmu = 'ja' | 'en'

export const useLocalesStore = defineStore('locales', () => {
  const lang = ref<langEnmu>('ja')
  return {
    lang,
  }
}, {
  persist: true,
})
