<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { label: 'Official Website', to: '/', primary: false },
  { label: 'Instagram', url: 'https://www.instagram.com/icarusluxembourg', primary: false },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/teamicarus/', primary: false },
  { label: 'TikTok', url: 'https://tiktok.com/@icarus.luxembourg', primary: false },
  { label: 'Support our Journey (GoFundMe)', url: 'https://gofund.me/9d1eebdb8', primary: true },
  { label: 'Our STEM Racing Video', to: '/video', primary: false },
  { label: 'Email Us', url: 'mailto:contact@icarusluxembourg.com', primary: false },
]

// Define the base classes in a variable to keep the template clean
const baseBtnClass = "block w-full py-4 px-6 text-center font-bold uppercase tracking-widest text-[10px] border-2 transition-all duration-300 rounded-xl backdrop-blur-md active:scale-[0.98] hover:scale-[1.02]"
const secondaryBtnClass = "border-white/20 bg-white/5 text-white hover:border-icarus-red hover:bg-icarus-red/10"
const primaryBtnClass = "bg-icarus-red border-icarus-red text-white hover:bg-white hover:text-icarus-red hover:border-white"
</script>

<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
    <!-- Background Image Overlay -->
    <div class="fixed inset-0 z-0">
      <img 
        src="/image_carousel/team_gen3_2.webp" 
        class="w-full h-full object-cover opacity-40 brightness-[0.4]" 
        alt="Background"
      />
      <div class="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 w-full max-w-105 flex flex-col items-center">
      <!-- Profile/Logo -->
      <div class="mb-10 text-center">
        <div class="w-24 h-24 rounded-full border-2 border-icarus-red p-1 mb-4 mx-auto overflow-hidden bg-white backdrop-blur-sm">
          <img src="/icons/logo.webp" class="w-full h-full object-contain p-2" alt="Icarus Logo" />
        </div>
        <h1 class="text-3xl font-black uppercase tracking-[0.2em] font-dela">Icarus</h1>
        <p class="text-gray-400 text-xs mt-3 tracking-widest uppercase font-medium">
          STEM Racing World Finalists
        </p>
      </div>

      <!-- Links Stack -->
      <div class="w-full space-y-4">
        <template v-for="link in links" :key="link.label">
          <!-- Internal Link -->
          <RouterLink 
            v-if="link.to" 
            :to="link.to"
            :class="[baseBtnClass, secondaryBtnClass]"
          >
            {{ link.label }}
          </RouterLink>

          <!-- External Link -->
          <a 
            v-else 
            :href="link.url" 
            target="_blank" 
            rel="noopener noreferrer"
            :class="[
              baseBtnClass,
              link.primary ? primaryBtnClass : secondaryBtnClass
            ]"
          >
            <span class="flex items-center justify-center gap-3">
              {{ link.label }}
              <svg v-if="link.primary" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </span>
          </a>
        </template>
      </div>

      <!-- Footer -->
      <footer class="mt-16 text-center opacity-40">
        <p class="text-[9px] uppercase tracking-[0.5em] text-white font-black">
          Luxembourg &bull; 2022 - 2026
        </p>
      </footer>
    </div>
  </div>
</template>