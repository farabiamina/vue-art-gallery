import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import PhotoView from '../views/PhotoView.vue'
import FavoritesView from '../views/FavoritesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
      props: (route) => ({ q: route.query.q || '' }),
    },
    {
      path: '/photos/:id',
      name: 'photo',
      component: PhotoView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
    },
  ]
})

export default router
