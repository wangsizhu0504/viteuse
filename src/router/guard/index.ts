import type { Router } from 'vue-router'
import { setupRouterNProgress } from './nprogress'

// 注册路由进程守卫
export const registerNProgressGuard = (router: Router) => {
  setupRouterNProgress(router)
}
