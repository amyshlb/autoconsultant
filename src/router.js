import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import FaqView from '@/views/FaqView.vue'
import PriceView from '@/views/PriceView.vue'
import StepView from '@/views/StepView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: 'faq',
        name: 'faq',
        component: FaqView
      },
      {
        path: 'buy',
        name: 'buy',
        component: PriceView
      },
      {
        path: 'how-it-works',
        name: 'how-it-works',
        component: StepView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  }
})

export default router
