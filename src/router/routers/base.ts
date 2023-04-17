import mainLayout from '@/layouts/main.vue'

const homeRouter = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home/index.vue'),
  meta: {
    title: '首页',
  },
}
const userRouter = {
  path: '/user',
  name: 'User',
  component: () => import('@/views/user/index.vue'),
  meta: {
    title: '用户',
  },
}
const notFountRouter = {
  path: '/:path(.*)*',
  name: 'PageNotFound',
  component: () => import('@/views/error/index.vue'),
  meta: {
    title: 'Not found',
  },
}
// 根路由
export const RootRoute = {
  path: '/',
  name: 'Root',
  component: mainLayout,
  redirect: '/home',
  meta: {
    title: 'Root',
  },
  children: [
    homeRouter,
    userRouter,
    notFountRouter,
  ],

}

export const basicRoutes = [
  RootRoute,
]
