<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const articleSection = ref(null)
const isVisible = ref(false)
let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.2 }
  )

  if (articleSection.value) {
    observer.observe(articleSection.value)
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section id="articles" class="py-20 scroll-mt-20">
    <div
      ref="articleSection"
      :class="[
        'max-w-6xl mx-auto px-6 transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      ]"
    >
      <div class="mb-10 max-w-2xl">
        <p class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
          {{ $t('home.media.label') }}
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {{ $t('home.media.heading') }}
        </h2>
        <p class="text-slate-600 leading-relaxed">
          {{ $t('home.media.caption') }}
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article class="group bg-white rounded-4xl border border-gray-100 shadow-xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center justify-center rounded-full bg-icarus-red/10 text-icarus-red text-[10px] font-black uppercase tracking-[0.35em] px-3 py-2">
              {{ $t('home.media.publisher') }}
            </span>
            <span class="text-[10px] uppercase tracking-[0.28em] text-slate-400">
              {{ $t('home.media.articleType') }}
            </span>
          </div>

          <div class="mb-6 overflow-hidden rounded-[1.75rem] border border-gray-100 bg-slate-100">
            <img
              src="https://image.lessentiel.lu/2026/09/09/d7334f77-ba27-44f5-9bd3-1de6cc7b3ce2.jpg?auto=format%2Ccompress%2Cenhance&fit=max&w=1200&h=1200&rect=0%2C0%2C5712%2C4284&s=d6d9a3ddddafbec147e87fe50407846f"
              :alt="$t('home.media.imageAlt')"
              class="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {{ $t('home.media.articleTitle') }}
          </h3>
          <p class="text-slate-600 leading-relaxed mb-4">
            {{ $t('home.media.articleExtract') }}
          </p>

          <a
            href="https://ingsci.lu/fr/stem-racing-contest-icarus-catches-the-sunlight/"
            target="_blank"
            rel="noreferrer"
            class="mt-8 inline-flex items-center justify-center rounded-full border-2 border-icarus-red px-6 py-3 text-sm font-bold text-icarus-red transition-all duration-300 hover:bg-icarus-red hover:text-white"
          >
            {{ $t('home.media.linkText') }}
          </a>
        </article>

        <aside
          :class="[
            'w-full max-w-105 mx-auto rounded-4xl border border-gray-100 bg-white shadow-xl p-4 sm:p-6 md:p-8 flex flex-col justify-between gap-4 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-2xl lg:max-w-none',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div class="mb-4 flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center justify-center rounded-full bg-icarus-red/10 text-icarus-red text-[10px] font-black uppercase tracking-[0.35em] px-3 py-2">
              {{ $t('home.media.asideTagPublisher') }}
            </span>
            <span class="text-[10px] uppercase tracking-[0.28em] text-slate-400">
              {{ $t('home.media.asideTagType') }}
            </span>
          </div>

          <div class="mx-auto w-full max-w-105 rounded-[1.75rem] bg-icarus-red/5 border border-icarus-red/10 p-3 lg:max-w-none">
            <div class="mx-auto aspect-9/16 w-full overflow-hidden rounded-[1.35rem] border border-icarus-red/10 bg-slate-900 shadow-inner">
              <video
                src="/video/autera.mp4"
                autoplay
                muted
                loop
                controls
                playsinline
                class="h-full w-full object-cover"
                style="object-position: center;"
              />
            </div>
          </div>
        </aside>
      </div>

      <div class="mt-16 flex justify-end">
        <RouterLink 
          to="/media"
          class="group flex items-center gap-2 text-icarus-red font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
        >
          {{ $t('home.media.cta') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>


    </div>
  </section>
</template>
