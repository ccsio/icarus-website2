<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const statsEl = ref(null)
const hasAnimated = ref(false)

// Define the targets directly from i18n
// Note: Ensure your i18n JSON has these as numbers or strings that can be cast
const statsData = [
  { key: 'countries', target: 44 },
  { key: 'schools', target: 26000 },
  { key: 'students', target: 2000000 }
]

// Reactive object to hold the current display values
const displayValues = ref({
  countries: 0,
  schools: 0,
  students: 0
})

const formatNumber = (n) => {
  return new Intl.NumberFormat(locale.value).format(n)
}

const animate = (duration = 1500) => {
  if (hasAnimated.value) return
  hasAnimated.value = true

  const start = performance.now()

  const step = (now) => {
    const progress = Math.min(1, (now - start) / duration)
    // Ease out cubic function
    const easedProgress = 1 - Math.pow(1 - progress, 3)

    statsData.forEach(stat => {
      displayValues.value[stat.key] = Math.floor(stat.target * easedProgress)
    })

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      // Ensure we hit the exact targets at the end
      statsData.forEach(stat => {
        displayValues.value[stat.key] = stat.target
      })
    }
  }

  requestAnimationFrame(step)
}

let observer
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animate()
    }
  }, { threshold: 0.2 })

  if (statsEl.value) observer.observe(statsEl.value)
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section id="stem-racing" class="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-5xl font-bold uppercase font-dela tracking-tight">
        STEM Racing
      </h2>
      <p class="text-gray-500 italic mt-2 text-lg">What is it?</p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Image Section -->
      <div class="relative group overflow-hidden rounded-2xl shadow-2xl">
        <img 
          src="/images/starting_grid_world_finals.webp" 
          alt="World Finals 2025" 
          class="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p class="text-white text-sm md:text-base font-medium">
            Petar on the starting grid at World Finals 2025
          </p>
        </div>
      </div>

      <!-- Content Section -->
      <div class="space-y-6">
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
          STEM Racing, formerly known as F1 in Schools, is an international educational program that encourages 
          <span class="text-icarus-red font-bold">students</span> to learn about science, technology, engineering, and mathematics 
          (<span class="font-bold text-icarus-red">STEM</span>) through designing, building, and racing 
          <span class="font-bold text-icarus-red">miniature Formula One cars</span>. 
          The program promotes hands-on learning and helps students develop important skills such as teamwork, problem-solving, and project management.
        </p>
        
        <div class="flex flex-wrap gap-4 pt-4">
          <a href="/video/" target="_blank" class="px-6 py-3 border-2 border-icarus-red text-icarus-red font-bold rounded-full hover:bg-icarus-red hover:text-white transition-all duration-300">
            Our Video
          </a>
          <a href="https://www.stemracing.com/" target="_blank" class="px-6 py-3 border-2 border-icarus-red text-icarus-red font-bold rounded-full hover:bg-icarus-red hover:text-white transition-all duration-300">
            Official Site
          </a>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div ref="statsEl" class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
        <div class="text-icarus-red font-black text-4xl md:text-5xl mb-2 tabular-nums">
          {{ formatNumber(displayValues.countries) }}
        </div>
        <p class="text-gray-600 font-medium">
          <span class="text-black font-bold">countries</span> actively involved
        </p>
      </div>

      <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
        <div class="text-icarus-red font-black text-4xl md:text-5xl mb-2 tabular-nums">
          {{ formatNumber(displayValues.schools) }}
        </div>
        <p class="text-gray-600 font-medium">
          <span class="text-black font-bold">schools</span> participate
        </p>
      </div>

      <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
        <div class="text-icarus-red font-black text-4xl md:text-5xl mb-2 tabular-nums">
          {{ formatNumber(displayValues.students) }}
        </div>
        <p class="text-gray-600 font-medium">
          <span class="text-black font-bold">students</span> competing
        </p>
      </div>
    </div>
  </section>
</template>