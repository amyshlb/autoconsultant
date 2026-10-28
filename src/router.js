import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import FaqView from '@/views/FaqView.vue'
import PriceView from '@/views/PriceView.vue'
import StepView from '@/views/StepView.vue'
import PostsView from '@/views/PostsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    redirect: '/ru'
  },
  {
    path: '/:locale',
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
  },
  {
    path: '/:locale/posts',
    component: PostsView
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView
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

import i18n from '@/i18n'

router.beforeEach((to) => {
    const locale = to.params.locale;

    if (locale && !['ru', 'en', 'kk'].includes(locale)) {
        return '/ru';
    }

    if (locale) {
        i18n.global.locale.value = locale;
        localStorage.setItem('locale', locale);
    }
});
export default router