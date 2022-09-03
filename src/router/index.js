import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Marca',
      name: 'Marca',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MarcaView.vue'),
    },
    {
      path: '/Colecoes',
      name: 'Colecoes',
      component: () => import('../views/ColecoesView.vue')
    },
    {
      path: '/Lojas',
      name: 'Lojas',
      component: () => import('../views/LojasView.vue')
    },
    {
      path: '/Noticias',
      name: 'Noticias',
      component: () => import('../views/NoticiasView.vue')
    },
    {
      path: '/Servicos',
      name: 'Servicos',
      component: () => import('../views/ServicosView.vue')
    },
    {
      path: '/Contato',
      name: 'Contato',
      component: () => import('../views/ContatoView.vue')
    },
  ]
})

export default router
