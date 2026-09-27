import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CollaborationView from '@/views/CollaborationView.vue'
import ContactView from '@/views/ContactView.vue'
import TeamView from '@/views/TeamView.vue'
import VideoView from '@/views/VideoView.vue'
import MediaView from '@/views/MediaView.vue'

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
    },
    {
      path: "/video",
      name: "video",
      component: VideoView,
      meta: {
        title: "Video"
      }
    },
    {
      path: "/media",
      name: "media",
      component: MediaView,
      meta: {
        title: "Media"
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // e.g. browser back/forward
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

// guard  
router.afterEach((to) => {  
  document.title = `Icarus | ${to.meta.title || ""}`
})

export default router