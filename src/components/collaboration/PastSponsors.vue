<script setup>
const pastSponsors = ["efg", "ratrig"]
</script>

<template>
        <!-- PAST SPONSORS -->
    <section>
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black mb-4">{{ $t('collaboration.sponsors.past.title') }}</h2>
        <p class="max-w-3xl mx-auto text-lg text-gray-600">
          {{ $t('collaboration.sponsors.past.description') }}
        </p>
      </div>

      <div class="flex flew-wrap justify-center gap-16 p-4">
        <div v-for="sponsor in pastSponsors" :key="sponsor">
          <img :src="`/sponsors/${sponsor}.webp`" :alt="sponsor" class="h-10 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 duration-300 transition-opacity">
        </div>
      </div>
    </section>
</template>