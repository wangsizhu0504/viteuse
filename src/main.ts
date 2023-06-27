import '@unocss/reset/tailwind-compat.css' // unocss reset
import 'virtual:uno.css'
import 'virtual:unocss-devtools'

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerRouter } from './router/setup'
import { registerPinia } from './store/setup'

function bootstrapApp() {
  const app = createApp(App)
  // 注册路由
  registerRouter(app)

  // 注册 pinia
  registerPinia(app)

  // 挂载 app 节点
  app.mount('#app')
}
bootstrapApp()
