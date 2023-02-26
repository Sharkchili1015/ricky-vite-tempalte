import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import { setupRouter } from './router'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import { setupStore } from './store'
import { setupElementPlus } from './utils/registerElement'
import { setupI18n } from './locales/index'
// 这里使用函数的方法进行注册，是为了处理一下异步的情况，可以使用async/await
function init() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  setupElementPlus(app)
  setupI18n(app)
  app.mount('#app')
}
init()
