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
      component: HomeView,
      meta: {
        title: "Home"
      }
    },
    {
      path: "/work-with-us",
      name: 'collaboration',
      component: CollaborationView,
      meta: {
        title: "Work With Us"
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
      meta: {
        title: "Contact"
      }
    },
    {
      path: "/team",
      name: "team",
      component: TeamView,
      meta: {
        title: "The Team"
      }
    }
  ]
})

// guard  
router.afterEach((to) => {  
  document.title = `Icarus | ${to.meta.title || ""}`
})

export default router