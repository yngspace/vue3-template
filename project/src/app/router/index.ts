import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeView'),
    },
    {
      path: '/:id',
      name: 'detail-page',
      component: () => import('@/views/base-dto-details/BaseDtoDetails'),
    },
  ],
})

export default router
