import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routers/base'

const whiteRouterList: string[] = []
const router = createRouter({
  // hash 历史记录
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  // 路由表
  routes: basicRoutes as unknown as RouteRecordRaw[],
  // 是否禁止尾部斜杠。
  strict: true,
  // 在页面之间导航时控制滚动的功能。可以返回Promise以延迟滚动
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 路由重置
export const resetRouter = () => {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !whiteRouterList.includes(name as string))
      router.hasRoute(name) && router.removeRoute(name)
  })
}

// 注册路由
export const registerRouter = (app: App) => {
  app.use(router)
}
