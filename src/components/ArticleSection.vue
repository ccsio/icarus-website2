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
          {{ $t('home.articles.label') }}
        </p>
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {{ $t('home.articles.heading') }}
        </h2>
        <p class="text-slate-600 leading-relaxed">
          {{ $t('home.articles.caption') }}
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-[1.5fr_0.9fr]">
        <article class="group bg-white rounded-[2rem] border border-gray-100 shadow-xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
          <div class="mb-6 flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center justify-center rounded-full bg-icarus-red/10 text-icarus-red text-[10px] font-black uppercase tracking-[0.35em] px-3 py-2">
              {{ $t('home.articles.publisher') }}
            </span>
            <span class="text-[10px] uppercase tracking-[0.28em] text-slate-400">
              {{ $t('home.articles.articleType') }}
            </span>
          </div>

          <div class="mb-6 overflow-hidden rounded-[1.75rem] border border-gray-100 bg-slate-100">
            <img
              src="https://ingsci.lu/davinci/wp-content/uploads/2026/05/stemracing26-210-scaled.jpg"
              :alt="$t('home.articles.imageAlt')"
              class="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            {{ $t('home.articles.articleTitle') }}
          </h3>
          <p class="text-slate-600 leading-relaxed mb-4">
            {{ $t('home.articles.articleExtract') }}
          </p>

          <a
            href="https://ingsci.lu/fr/stem-racing-contest-icarus-catches-the-sunlight/"
            target="_blank"
            rel="noreferrer"
            class="mt-8 inline-flex items-center justify-center rounded-full border-2 border-icarus-red px-6 py-3 text-sm font-bold text-icarus-red transition-all duration-300 hover:bg-icarus-red hover:text-white"
          >
            {{ $t('home.articles.linkText') }}
          </a>
        </article>

        <!-- <aside class="rounded-[2rem] border border-gray-100 bg-white shadow-xl p-8 flex flex-col justify-between">
          <div>
            <p class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
              {{ $t('home.articles.asideLabel') }}
            </p>
            <h4 class="text-xl font-bold text-slate-900 mb-4">
              {{ $t('home.articles.asideHeading') }}
            </h4>
            <p class="text-slate-600 leading-relaxed">
              {{ $t('home.articles.asideCaption') }}
            </p>
          </div>

          <div class="mt-8 rounded-3xl bg-icarus-red/5 border border-icarus-red/10 p-6">
            <p class="text-sm text-slate-600 leading-relaxed">
              {{ $t('home.articles.asideNote') }}
            </p>
          </div>
        </aside> -->
      </div>
    </div>
  </section>
</template>
