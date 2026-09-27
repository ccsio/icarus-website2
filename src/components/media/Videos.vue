<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const videoPoster = 'https://image.lessentiel.lu/2026/09/09/d7334f77-ba27-44f5-9bd3-1de6cc7b3ce2.jpg?auto=format%2Ccompress%2Cenhance&fit=max&w=1200&h=1200&rect=0%2C0%2C5712%2C4284&s=d6d9a3ddddafbec147e87fe50407846f'

const videos = computed(() => [
  {
    order: 1,
    title: t('media.videos.autera.title'),
    src: '/video/autera.mp4',
    poster: '/video/autera_poster.png',
    ariaLabel: t('media.videos.autera.ariaLabel')
  },
  {
    order: 3,
    title: t('media.videos.school.title'),
    src: '/video/school_promo.mp4',
    poster: '/video/school_promo_poster.png',
    ariaLabel: t('media.videos.school.ariaLabel')
  },
  {
    order: 2,
    title: t('media.videos.lessentiel.title'),
    src: '/video/lessentiel.mp4',
    poster: '/video/lessentiel_poster.png',
    ariaLabel: t('media.videos.lessentiel.ariaLabel')
  }
])

const orderedVideos = computed(() => [...videos.value].sort((a, b) => a.order - b.order))
</script>

<template>
  <section>
    <div class="mb-8 max-w-2xl">
      <p class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
        {{ $t('media.videos.label') }}
      </p>
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
        {{ $t('media.videos.heading') }}
      </h2>
    </div>

    <div class="grid gap-6 md:grid-cols-2">
      <div
        v-for="video in orderedVideos"
        :key="video.title"
        class="rounded-4xl border border-gray-100 bg-white shadow-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div class="mb-4 rounded-3xl p-3 bg-icarus-red/5 border border-icarus-red/10">
          <div class="mx-auto w-full max-w-105 overflow-hidden rounded-[1.25rem] bg-slate-900 shadow-inner sm:max-w-none">
            <video
              :src="video.src"
              :poster="video.poster"
              :aria-label="video.ariaLabel"
              controls
              playsinline
              preload="metadata"
              class="block w-full rounded-[1.25rem] bg-slate-900"
              style="aspect-ratio: 9 / 16; object-fit: cover;"
            />
          </div>
        </div>

        <h3 class="text-xl font-bold text-slate-900">
          {{ video.title }}
        </h3>
      </div>
    </div>
  </section>
</template>
