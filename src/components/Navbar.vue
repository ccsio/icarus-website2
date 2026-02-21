<script setup>  
import { ref, onMounted, onUnmounted, computed } from 'vue'  
import { RouterLink, useRoute } from 'vue-router'  
import LanguageDropdown from '../components/LanguageDropdown.vue'  
  
const mobileOpen = ref(false)  
  
const navItems = [  
  { label: 'Home', to: '/' },  
  { label: 'Team History', to: '/team-history' },  
  { label: 'Work With Us', to: '/work-with-us' },  
  { label: 'Contact', to: '/contact' }  
]  
  
const closeMobile = () => (mobileOpen.value = false)  
  
// --- scroll handling ---  
const SCROLL_THRESHOLD = 200
const isScrolled = ref(false)  
  
const onScroll = () => {  
  isScrolled.value = window.scrollY >= SCROLL_THRESHOLD  
}  
  
onMounted(() => {  
  onScroll() // set initial state in case page loads mid-scroll  
  window.addEventListener('scroll', onScroll, { passive: true })  
})  
  
onUnmounted(() => {  
  window.removeEventListener('scroll', onScroll)  
})  
  
const route = useRoute()
// Optional: keep template clean  
// const navClass = computed(() => [  
//   'fixed top-0 left-0 w-full z-50 transition-all duration-200',  
//   isScrolled.value  
//     ? 'bg-white backdrop-blur-md shadow-md border-b border-icarus-red shadow-icarus-red text-black'  
//     : 'bg-transparent text-white'  
// ])  

const navClass = computed(() => {
  const isHome = route.path === '/'
  const useDark = isScrolled.value || !isHome
  const isContact = route.path === '/contact'

  if (isContact) {
    return [
      'hidden'
    ]
  }

  return [
    'fixed top-0 left-0 w-full z-50 transition-all duration-200',
    useDark
      ? 'bg-white backdrop-blur-md shadow-md border-b border-icarus-red shadow-icarus-red text-black'
      : 'bg-transparent text-white'
  ]
})
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-transparent" :class="navClass">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      
      <!-- Logo -->
      <RouterLink to="/" class="z-50">
        <img src="/icons/logo.webp" class="h-10 md:h-12" alt="Logo" />
      </RouterLink>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="text-inherit hover:text-icarus-red transition-colors font-semibold"
        >
          {{ $t(item.label) }}
        </RouterLink>
        <LanguageDropdown :isScrolled="isScrolled" />
      </div>

      <!-- Mobile Hamburger Button -->
      <button 
        @click="mobileOpen = !mobileOpen"
        class="md:hidden z-50 p-2 text-inherit bg-icarus-red/20 rounded-lg backdrop-blur-sm"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!mobileOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

      <!-- Mobile Menu Overlay -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 translate-y-[-20px]"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-[-20px]"
      >
        <div 
          v-if="mobileOpen" 
          class="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-xl p-6 flex flex-col space-y-4 md:hidden"
        >
          <RouterLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            @click="closeMobile"
            class="text-gray-800 text-lg font-semibold border-b border-gray-100 pb-2"
          >
            {{ $t(item.label) }}
          </RouterLink>
          
          <div class="pt-2">
            <LanguageDropdown :isScrolled="isScrolled" />
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>