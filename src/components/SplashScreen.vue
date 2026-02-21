<!-- <script setup>
    import 'vue3-carousel/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

    const carouselConfig = {
        itemsToShow: 1,
        snapAlign: 'center',
        wrapAround: true,
        autoplay: 4000,
        transition: 1000,
    }

    const imagePaths = [
        {"path": "/image_carousel/bake_sale_gen3.webp", "id": 0},
        {"path": "/image_carousel/smoketunnel_gen2.webp", "id": 1},
        {"path": "/image_carousel/team_gen3.webp", "id": 2},
        {"path": "/image_carousel/team_gen3_2.webp", "id": 3}
    ]
</script> -->

<script setup>
import { ref } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const carouselConfig = {
  itemsToShow: 1,
  snapAlign: 'center',
  autoplay: 5000,
  wrapAround: true,
  transition: 800,
  pauseAutoplayOnHover: false
}

    const imagePaths = [
        {"path": "/image_carousel/bake_sale_gen3.webp", "id": 0},
        {"path": "/image_carousel/smoketunnel_gen2.webp", "id": 1},
        {"path": "/image_carousel/team_gen3.webp", "id": 2},
        {"path": "/image_carousel/team_gen3_2.webp", "id": 3}
    ]
</script>

<template>  
  <section id="home" class="relative h-screen w-full overflow-hidden bg-black">  
    <!-- Carousel Background -->  
    <div class="absolute inset-0 z-0">  
      <Carousel v-bind="carouselConfig" class="h-full w-full">  
        <Slide v-for="slide in imagePaths" :key="slide.id" class="w-full">  
          <div class="relative w-full h-screen">  
            <img   
              :src="slide.path"   
              class="w-full h-full object-cover object-[50%_30%] brightness-[0.4]"   
              alt="Hero Image"  
            />  
          </div>  
        </Slide>  
      </Carousel>  
    </div>  
  
    <!-- Hero Content -->  
    <div class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">  
      <div class="max-w-3xl animate-fade-in">  
        <!-- Main Title -->  
        <h1 class="font-dela text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-4">  
          Icarus  
        </h1>  
          
        <!-- Caption -->  
        <i18n-t keypath="home.splash.caption" tag="p" class="text-[10px] md:text-xs uppercase tracking-[0.4em] font-black text-gray-300 mb-6">  
          <template #STEMRacing>  
            <span class="text-icarus-red">STEM Racing&trade;</span>  
          </template>  
        </i18n-t>  
  
        <!-- Subheading -->  
        <i18n-t keypath="home.splash.subheading" tag="p" class="text-sm md:text-base lg:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed italic">  
          <template #awards>  
            <span class="text-white font-semibold">{{ $t('home.splash.awards_count') }}</span>  
          </template>  
          <template #finals>  
            <span class="text-white font-semibold">{{ $t('home.splash.finals_name') }}</span>  
          </template>  
        </i18n-t>  
      </div>  
    </div>  
  
    <!-- Sleek Caret Indicator -->  
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">  
      <a href="#stem-racing" class="group flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-all duration-300">  
        <span class="text-[9px] uppercase tracking-[0.5em] font-black text-white mb-1">Discover</span>  
        <svg   
          class="w-6 h-6 text-gray-50 animate-bounce-slow"   
          fill="none"   
          stroke="currentColor"   
          viewBox="0 0 24 24"  
        >  
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />  
        </svg>  
      </a>  
    </div>  
  </section>  
</template>  
  
<style scoped>  
.animate-fade-in {  
  animation: fadeIn 1.5s ease-out forwards;  
}  
  
@keyframes fadeIn {  
  from { opacity: 0; transform: translateY(10px); }  
  to { opacity: 1; transform: translateY(0); }  
}  
  
/* Custom slow bounce for the caret */  
@keyframes bounce-slow {  
  0%, 100% { transform: translateY(0); }  
  50% { transform: translateY(8px); }  
}  
  
.animate-bounce-slow {  
  animation: bounce-slow 2s infinite ease-in-out;  
}  
    
/* Carousel Fixes */  
:deep(.carousel__track) {  
  margin: 0 !important;  
}  
:deep(.carousel__viewport) {  
  height: 100%;  
}  
</style>