<script setup>
import { ref } from 'vue'

const videoRef = ref(null)
const isPlaying = ref(false)

const togglePlay = () => {
  if (videoRef.value.paused) {
    videoRef.value.play()
    isPlaying.value = true
  } else {
    videoRef.value.pause()
    isPlaying.value = false
  }
}
</script>

<template>
  <main class="bg-black min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
    
    <!-- Background Ambient Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-icarus-red/10 rounded-full blur-[120px] pointer-events-none"></div>

    <!-- Header Info -->
    <div class="relative z-10 text-center mb-10 animate-fade-in">
      <h2 class="text-icarus-red font-black uppercase tracking-[0.4em] text-[10px] mb-3">
        {{ $t('video.label') || 'Project Premiere' }}
      </h2>
      <h1 class="font-dela text-3xl md:text-4xl text-white uppercase tracking-tight">
        {{ $t('video.title') || 'The Icarus Vision' }}
      </h1>
    </div>

    <!-- Video Container (Portrait Ratio) -->
    <div class="relative z-10 group max-w-100 w-full aspect-9/16 bg-white/5 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 animate-slide-up">
      
      <video 
        ref="videoRef"
        class="w-full h-full object-cover cursor-pointer"
        playsinline
        @click="togglePlay"
        @play="isPlaying = true"
        @pause="isPlaying = false"
      >
        <source src="/video/school_promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Play Overlay (Visible when paused) -->
      <div 
        v-if="!isPlaying"
        @click="togglePlay"
        class="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer transition-opacity duration-300"
      >
        <div class="w-20 h-20 flex items-center justify-center rounded-full bg-icarus-red text-white shadow-xl transform transition-transform group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      <!-- Video Controls Hint (Visible on hover when playing) -->
      <div 
        v-if="isPlaying"
        class="absolute bottom-6 left-0 w-full px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        <div class="flex justify-between items-center text-white/70 text-[10px] font-bold uppercase tracking-widest">
          <span>Click to Pause</span>
          <span class="flex gap-1">
            <div class="w-1 h-1 bg-icarus-red rounded-full animate-pulse"></div>
            Live Preview
          </span>
        </div>
      </div>
    </div>

    <!-- Footer CTA -->
    <div class="relative z-10 mt-12 animate-fade-in-delayed">
      <router-link 
        to="/contact" 
        class="group flex items-center gap-4 text-white/50 hover:text-white transition-colors duration-300"
      >
        <span class="text-xs font-black uppercase tracking-[0.2em]">Join the Journey</span>
        <div class="w-12 h-px bg-white/20 group-hover:bg-icarus-red group-hover:w-16 transition-all duration-500"></div>
      </router-link>
    </div>

  </main>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
.animate-fade-in-delayed {
  animation: fadeIn 1s ease-out 0.5s forwards opacity-0;
  opacity: 0;
}
.animate-slide-up {
  animation: slideUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
</style>