<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const articleCards = computed(() => [
    {
        order: 1,
        publisher: t('media.articles.article1.publisher'),
        type: t('media.articles.article1.type'),
        date: t('media.articles.article1.date'),
        image: 'https://ingsci.lu/davinci/wp-content/uploads/2026/05/stemracing26-213-1024x576.jpg',
        title: t('media.articles.article1.title'),
        extract: t('media.articles.article1.extract'),
        link: 'https://ingsci.lu/fr/stem-racing-contest-icarus-catches-the-sunlight/'
    },
    {
        order: 2,
        publisher: t('media.articles.article2.publisher'),
        type: t('media.articles.article2.type'),
        date: t('media.articles.article2.date'),
        image: 'https://image.lessentiel.lu/2026/09/09/d7334f77-ba27-44f5-9bd3-1de6cc7b3ce2.jpg?auto=format%2Ccompress%2Cenhance&fit=max&w=1200&h=1200&rect=0%2C0%2C5712%2C4284&s=d6d9a3ddddafbec147e87fe50407846f',
        title: t('media.articles.article2.title'),
        extract: t('media.articles.article2.extract'),
        link: 'https://www.lessentiel.lu/fr/story/luxembourgsingapour-icarus-a-toute-vitesse-vers-singapour-103630496'
    }
])
const orderedArticles = computed(() => [...articleCards.value].sort((a, b) => a.order - b.order))
</script>

<template>
  <section class="mb-20">
    <div class="mb-8 max-w-2xl">
      <p class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
        {{ $t('media.articles.label') }}
      </p>
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
        {{ $t('media.articles.heading') }}
      </h2>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <article
        v-for="article in orderedArticles"
        :key="article.title"
        class="group bg-white rounded-4xl border border-gray-100 shadow-xl p-6 sm:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div class="mb-5 flex flex-wrap items-center gap-3">
          <span class="inline-flex items-center justify-center rounded-full bg-icarus-red/10 text-icarus-red text-[10px] font-black uppercase tracking-[0.35em] px-3 py-2">
            {{ article.publisher }}
          </span>
          <span class="text-[10px] uppercase tracking-[0.28em] text-slate-400">
            {{ article.type }}
          </span>
        </div>

        <div class="mb-1 overflow-hidden rounded-[1.75rem] border border-gray-100 bg-slate-100">
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div class="w-full text-right mb-6">
          <time class="text-[10px] font-bold uppercase tracking-[0.28em] text-icarus-red">
            {{ article.date }}
          </time>
        </div>

        <h3 class="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
          {{ article.title }}
        </h3>
        <p class="text-slate-600 leading-relaxed mb-4">
          {{ article.extract }}
        </p>

        <a
          :href="article.link"
          target="_blank"
          rel="noreferrer"
          class="mt-8 inline-flex items-center justify-center rounded-full border-2 border-icarus-red px-6 py-3 text-sm font-bold text-icarus-red transition-all duration-300 hover:bg-icarus-red hover:text-white"
        >
          {{ $t('media.articles.read') }}
        </a>
      </article>
    </div>
  </section>
</template>
