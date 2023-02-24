import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router, setupRouter } from './router'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue))
  app.component(key, component)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
// Configure routing
// 配置路由
console.log(router)
setupRouter(app)
app.use(ElementPlus).use(pinia).mount('#app')
