import { createRouter, createWebHistory } from 'vue-router'
import app from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'app',
    //   component: app
    // },
    {
      path: '/',
      name: 'shop',
      component: () => import('../views/shop.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/components.vue')
    },
    {
      path: '/products/:id',
      name: 'products',
      component: () => import('../views/products.vue')
    },
  ]
})

export default router
