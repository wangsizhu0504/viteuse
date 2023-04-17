import type { Router } from 'vue-router'
import nProgress from 'nprogress'

export const setupRouterNProgress = (router: Router) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path)
      nProgress.start()

    return true
  })

  router.afterEach(() => {
    nProgress.done()
    return true
  })
}
