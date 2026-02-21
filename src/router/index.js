import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CollaborationView from '@/views/CollaborationView.vue'
import ContactView from '@/views/ContactView.vue'
import TeamView from '@/views/TeamView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/work-with-us",
      name: 'collaboration',
      component: CollaborationView
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView
    },
    {
      path: "/team",
      name: "team",
      component: TeamView
    }
  ]
})

export default router