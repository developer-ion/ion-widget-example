import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('../pages/Login.vue')
    },
    {
      path: '/portal',
      name: 'portal',
      component: () => import('../pages/Portal.vue')
    }
  ]
})

export default router
