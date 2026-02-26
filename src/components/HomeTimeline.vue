<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section id="timeline" class="bg-gray-50 py-20 scroll-mt-20">
    <div class="max-w-6xl mx-auto px-6">
      
     <!-- Section Header -->
    <div class="mb-16 max-w-2xl"> <!-- Added max-w-2xl to keep text readable -->
      <h2 class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
        {{ $t('home.timeline.label') }}
      </h2>
      <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        {{ $t('home.timeline.title') }}
      </h3>
      <p class="text-slate-600 leading-relaxed">
        {{ $t('home.timeline.body_part_1') }}
        <span class="font-semibold text-slate-900">{{ $t('home.timeline.keywords.esl2') }}</span>. 
        {{ $t('home.timeline.body_part_2') }}
      </p>
    </div>

      <!-- Timeline Container -->
      <ol class="relative border-s border-icarus-red/30 md:border-s-0 md:flex md:items-start md:gap-x-0">
        
        <!-- Timeline Item 1 -->
        <li class="relative mb-12 ms-8 md:ms-0 md:mb-0 md:flex-1 group">
          <div class="flex items-center">
            <!-- The Dot -->
            <div class="absolute md:relative -start-10.25 md:start-0 z-10 w-5 h-5 bg-white border-4 border-icarus-red rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
            <!-- The Horizontal Line (Desktop) -->
            <div class="hidden md:block w-full h-px bg-icarus-red/30"></div>
          </div>

          <div class="mt-6 md:pe-8">
            <time class="inline-block bg-icarus-red/10 text-icarus-red text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider mb-3">
              {{ $t('home.timeline.item1.date') }}
            </time>
            <h4 class="text-xl font-bold text-slate-900 mb-3">
              {{ $t('home.timeline.item1.title') }}
            </h4>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ $t('home.timeline.item1.text') }}
            </p>
          </div>
        </li>

        <!-- Timeline Item 2 -->
        <li class="relative mb-12 ms-8 md:ms-0 md:mb-0 md:flex-1 group">
          <div class="flex items-center">
            <div class="absolute md:relative -start-10.25 md:start-0 z-10 w-5 h-5 bg-white border-4 border-icarus-red rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
            <div class="hidden md:block w-full h-px bg-icarus-red/30"></div>
          </div>
          <div class="mt-6 md:pe-8">
            <time class="inline-block bg-icarus-red/10 text-icarus-red text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider mb-3">
              {{ $t('home.timeline.item2.date') }}
            </time>
            <h4 class="text-xl font-bold text-slate-900 mb-3">
              {{ $t('home.timeline.item2.title') }}
            </h4>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ $t('home.timeline.item2.text') }}
            </p>
          </div>
        </li>

        <!-- Timeline Item 3 -->
        <li class="relative mb-0 ms-8 md:ms-0 md:flex-1 group">
          <div class="flex items-center">
            <div class="absolute md:relative -start-10.25 md:start-0 z-10 w-5 h-5 bg-white border-4 border-icarus-red rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
            <!-- Last item line fades out -->
            <div class="hidden md:block w-full h-px bg-linear-to-r from-icarus-red/30 to-transparent"></div>
          </div>
          <div class="mt-6 md:pe-8">
            <time class="inline-block bg-icarus-red/10 text-icarus-red text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider mb-3">
              {{ $t('home.timeline.item3.date') }}
            </time>
            <h4 class="text-xl font-bold text-slate-900 mb-3">
              {{ $t('home.timeline.item3.title') }}
            </h4>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ $t('home.timeline.item3.text') }}
            </p>
          </div>
        </li>
      </ol>

      <!-- CTA to Full History -->
      <div class="mt-16 flex justify-end">
        <RouterLink 
          to="/team"
          class="group flex items-center gap-2 text-icarus-red font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
        >
          {{ $t('home.timeline.cta') }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </section>
</template>