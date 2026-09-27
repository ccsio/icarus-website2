<script setup>
import Articles from '@/components/media/Articles.vue'
import Videos from '@/components/media/Videos.vue'
</script>

<template>
  <main class="min-h-screen bg-slate-50 pt-28 pb-20 px-6">
    <div class="max-w-6xl mx-auto">
      <header class="mb-12 max-w-2xl">
        <p class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
          {{ $t('media.label') }}
        </p>
        <h1 class="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
          {{ $t('media.heading') }}
        </h1>
        <p class="text-slate-600 leading-relaxed">
          {{ $t('media.caption') }}
        </p>
      </header>

      <Articles />
      <Videos />
    </div>
  </main>
</template>
