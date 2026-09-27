<script setup>
const articleCards = [
  {
    publisher: "L'essentiel",
    type: 'External article',
    image: 'https://image.lessentiel.lu/2026/09/09/d7334f77-ba27-44f5-9bd3-1de6cc7b3ce2.jpg?auto=format%2Ccompress%2Cenhance&fit=max&w=1200&h=1200&rect=0%2C0%2C5712%2C4284&s=d6d9a3ddddafbec147e87fe50407846f',
    title: 'STEM Racing: Icarus catches the sunlight',
    extract: 'Team Icarus won the Luxembourg STEM Racing™ national finals and will represent the country at the World Finals in Singapore. Hosted at the International School of Luxembourg, the event showcased young talents in engineering, design and racing.',
    link: 'https://ingsci.lu/fr/stem-racing-contest-icarus-catches-the-sunlight/'
  }
]

const videos = [
  {
    title: 'Autera video',
    src: '/video/autera_video.mp4'
  },
  {
    title: 'School promo',
    src: '/video/school_promo.mp4'
  }
]
</script>

<template>
  <main class="min-h-screen bg-slate-50 pt-28 pb-20 px-6">
    <div class="max-w-6xl mx-auto">
      <header class="mb-12 max-w-2xl">
        <p class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
          Media
        </p>
        <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
          Icarus media hub
        </h1>
        <p class="text-slate-600 leading-relaxed">
          Articles, features and videos from the Icarus project and our external partners.
        </p>
      </header>

      <section class="mb-20">
        <div class="mb-8">
          <p class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
            Articles
          </p>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
            External coverage
          </h2>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <article
            v-for="article in articleCards"
            :key="article.title"
            class="group bg-white rounded-4xl border border-gray-100 shadow-xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div class="mb-6 flex flex-wrap items-center gap-3">
              <span class="inline-flex items-center justify-center rounded-full bg-icarus-red/10 text-icarus-red text-[10px] font-black uppercase tracking-[0.35em] px-3 py-2">
                {{ article.publisher }}
              </span>
              <span class="text-[10px] uppercase tracking-[0.28em] text-slate-400">
                {{ article.type }}
              </span>
            </div>

            <div class="mb-6 overflow-hidden rounded-[1.75rem] border border-gray-100 bg-slate-100">
              <img
                :src="article.image"
                :alt="article.title"
                class="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
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
              Read the article
            </a>
          </article>
        </div>
      </section>

      <section>
        <div class="mb-8">
          <p class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
            Videos
          </p>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900">
            Featured media
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <div
            v-for="video in videos"
            :key="video.title"
            class="rounded-[2rem] border border-gray-100 bg-white shadow-xl p-5"
          >
            <div class="mb-4 rounded-[1.5rem] bg-slate-100 p-3 border border-gray-100">
              <video
                :src="video.src"
                autoplay
                muted
                loop
                playsinline
                class="w-full rounded-[1.25rem] bg-slate-900"
                style="aspect-ratio: 9 / 16; object-fit: cover;"
              />
            </div>
            <h3 class="text-xl font-bold text-slate-900">
              {{ video.title }}
            </h3>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
