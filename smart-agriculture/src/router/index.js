import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/agriculture-info',
      name: 'agriculture-info',
      component: () => import('../views/AgricultureInfoView.vue')
    },
    {
      path: '/ai-robot',
      name: 'ai-robot',
      component: () => import('../views/AIRobotView.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/CommunityView.vue')
    },
    {
      path: '/custom-service',
      name: 'custom-service',
      component: () => import('../views/CustomServiceView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router 