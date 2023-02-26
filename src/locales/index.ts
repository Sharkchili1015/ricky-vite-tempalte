import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import type { I18n } from 'vue-i18n'

export const i18nOptions = {
  locale: 'ja',
  message: {
    en: {
      message: {
        hello: 'hello world',
      },
    },
    ja: {
      message: {
        hello: 'こんにちは、世界',
      },
    },
  },
  legacy: false,
}

export function setupI18n(app: App) {
  console.log('i18nOptions', i18nOptions)
  const i18n = createI18n(i18nOptions) as I18n
  app.use(i18n)
}
