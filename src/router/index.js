import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('@/admin/views/LoginView.vue')
    },
    {
      path: '/admin/register',
      name: 'register',
      component: () => import('@/admin/views/RegisterView.vue')
    }
  ]
})

export default router
