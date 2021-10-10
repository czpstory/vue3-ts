import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import LocalCache from '../utils/cache'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/main' },
  { path: '/login', component: () => import('@/views/login/login.vue') },
  { path: '/main', component: () => import('@/views/main/main.vue') }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
