import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

type langEnmu = 'ja' | 'en'
export const useLocalesStore = defineStore('locales', () => {
  const lang = ref<langEnmu>('ja')
  const { locale } = useI18n()
  watch(() => lang.value, (val) => {
    locale.value = val
  })
  return {
    lang,
  }
}, {
  persist: true,
})
