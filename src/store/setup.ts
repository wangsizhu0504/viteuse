import { createPinia } from 'pinia'
import type { App } from 'vue'

export const registerPinia = (app: App) => {
  const store = createPinia()
  app.use(store)
}
