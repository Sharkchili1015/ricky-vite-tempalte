import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import type { I18n } from 'vue-i18n'

const i18nOptions = {
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
}

export function setupI18n(app: App) {
  const i18n = createI18n(i18nOptions) as I18n
  app.use(i18n)
}
