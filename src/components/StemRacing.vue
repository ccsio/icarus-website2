<script setup>  
import { ref, reactive, onMounted, onUnmounted } from 'vue'  
import { useI18n } from 'vue-i18n'  
  
const { t, tm } = useI18n()  
  
const statsEl = ref(null)  
const animated = ref(false)  
  
const targets = {  
  countries: 44,  
  schools: 26000,  
  students: 2000000  
}  
  
const displayValues = reactive({  
  countries: 0,  
  schools: 0,  
  students: 0  
})  
  
const formatNumber = (n) => new Intl.NumberFormat('en-US').format(Math.round(n))  
  
const animateCountUp = () => {  
  if (animated.value) return  
  animated.value = true  
  
  const duration = 2000  
  const start = performance.now()  
  
  const tick = (now) => {  
    const progress = Math.min((now - start) / duration, 1)  
    const ease = 1 - Math.pow(1 - progress, 3)  
  
    for (const key in targets) {  
      displayValues[key] = targets[key] * ease  
    }  
  
    if (progress < 1) requestAnimationFrame(tick)  
  }  
  
  requestAnimationFrame(tick)  
}  
  
let observer = null  
  
onMounted(() => {  
  observer = new IntersectionObserver(  
    ([entry]) => { if (entry.isIntersecting) animateCountUp() },  
    { threshold: 0.3 }  
  )  
  if (statsEl.value) observer.observe(statsEl.value)  
})  
  
onUnmounted(() => observer?.disconnect())  
</script>

<template>
  <section id="stem-racing" class="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-5xl font-bold uppercase font-dela tracking-tight">
        {{ $t('home.stem.title') }}
      </h2>
      <p class="text-gray-500 italic mt-2 text-lg">{{ $t('home.stem.subtitle') }}</p>
    </div>

    <!-- Paragraph 1 -->
    <div class="grid lg:grid-cols-2 gap-12 items-center lg:mb-16 mb-8">
      <!-- Image Section -->
      <div class="relative group overflow-hidden rounded-2xl shadow-2xl">
        <img 
          src="/images/starting_grid_world_finals.webp" 
          :alt="$t('home.stem.imageCaption')"
          class="w-full aspect-4/3 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p class="text-white text-sm md:text-base font-medium">
            {{ $t('home.stem.imageCaption') }}
          </p>
        </div>
      </div>

      <!-- Content Section -->
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
          {{ $t('home.stem.body_part_1') }}
          <span class="text-icarus-red font-bold">{{ $t('home.stem.keywords.students') }}</span>
          {{ $t('home.stem.body_part_2') }}
          <span class="font-bold text-icarus-red">{{ $t('home.stem.keywords.stem') }}</span>
          {{ $t('home.stem.body_part_3') }}
          <span class="font-bold text-icarus-red">{{ $t('home.stem.keywords.cars') }}</span>
          {{ $t('home.stem.body_part_4') }}
        </p>
      </div>
    </div>

    <!-- Paragraph 2 -->
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Content Section -->
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
          {{ $t('home.stem.body2_part_1') }}
          <span class="text-icarus-red font-bold">{{ $t('home.stem.keywords2.present') }}</span>
          {{ $t('home.stem.body2_part_2') }}
          <span class="font-bold text-icarus-red">{{ $t('home.stem.keywords2.judges') }}</span>
          {{ $t('home.stem.body2_part_3') }}
          <span class="font-bold text-icarus-red">{{ $t('home.stem.keywords2.stem') }}</span>
          {{ $t('home.stem.body2_part_4') }}
        </p>
        
        <div class="flex flex-wrap gap-4 pt-4">
          <a href="/video/" target="_blank" class="px-6 py-3 border-2 border-icarus-red text-icarus-red font-bold rounded-full hover:bg-icarus-red hover:text-white transition-all duration-300">
            {{ $t('home.stem.ctaVideo') }}
          </a>
          <a href="https://www.stemracing.lu/" target="_blank" class="px-6 py-3 border-2 border-icarus-red text-icarus-red font-bold rounded-full hover:bg-icarus-red hover:text-white transition-all duration-300">
            {{ $t('home.stem.ctaLuxembourg') }}
          </a>
          <a href="https://www.stemracing.com/" target="_blank" class="px-6 py-3 border-2 border-icarus-red text-icarus-red font-bold rounded-full hover:bg-icarus-red hover:text-white transition-all duration-300">
            {{ $t('home.stem.ctaGlobal') }}
          </a>
        </div>
      </div>

      <!-- Image Section -->
      <div class="relative group overflow-hidden rounded-2xl shadow-2xl">
        <img 
          src="/image_carousel/gen4_ortea.webp" 
          :alt="$t('home.stem.imageCaption')"
          class="w-full aspect-4/3 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p class="text-white text-sm md:text-base font-medium">
            {{ $t('home.stem.image2Caption') }}
          </p>
        </div>
      </div>
    </div>



    <!-- Stats Section -->
    <div ref="statsEl" class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div 
        v-for="stat in ['countries', 'schools', 'students']" 
        :key="stat"
        class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
      >
        <div class="text-icarus-red font-black text-4xl md:text-5xl mb-2 tabular-nums">
          {{ formatNumber(displayValues[stat]) }}
        </div>
        <p class="text-gray-600 font-medium">
          <span class="text-black font-bold">{{ $t(`home.stem.stats.${stat}.label`) }}</span>
        </p>
      </div>
    </div>
  </section>
</template>