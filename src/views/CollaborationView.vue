<script setup>
import CollaborationTiers from '@/components/CollaborationTiers.vue';

// const zeusSponsors = ["fnr"]
const poseidonSponsors = ["eurobank", "gestron", "apeeel2", "esl2"]
const demeterSponsors = ["ortea", "dreamcars", "delphis"]
const pastSponsors = ["efg", "ratrig"]
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 mt-20">
    
    <!-- SECTION: OUR SPONSORS -->
    <section>
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black mb-4">{{ $t('collaboration.sponsors.title') }}</h2>
        <p class="max-w-3xl mx-auto text-lg text-gray-600">
          {{ $t('collaboration.sponsors.description') }}
        </p>
      </div>

      <div class="flex flex-col gap-12">
        <!-- Zeus Sponsors (Large) -->
        <div class="flex flex-wrap justify-center gap-8">
          <div v-for="sponsor in zeusSponsors" :key="sponsor" 
            class="bg-white rounded-2xl shadow-xl shadow-zeus-gold/20 p-8 flex flex-col items-center w-full md:max-w-md border border-yellow-100 transition-transform hover:scale-[1.02]">
            <img :src="`/sponsors/${sponsor}.webp`" :alt="sponsor" class="h-20 mb-6 object-contain">
            <p class="text-gray-600 text-center italic">{{ $t(`collaboration.sponsors.${sponsor}.description`) }}</p>
          </div>
        </div>

        <!-- Poseidon Sponsors (Medium) -->
        <div class="flex flex-wrap justify-center gap-6">
          <div v-for="sponsor in poseidonSponsors" :key="sponsor" 
            class="bg-white rounded-xl shadow-lg shadow-poseidon-blue/10 p-6 flex flex-col items-center w-full sm:w-72 border border-blue-50 transition-transform hover:scale-[1.02]">
            <img :src="`/sponsors/${sponsor}.webp`" :alt="sponsor" class="h-14 mb-4 object-contain">
            <p class="text-gray-600 text-center text-sm">{{ $t(`collaboration.sponsors.${sponsor}.description`) }}</p>
          </div>
        </div>

        <!-- Demeter Sponsors (Small) -->
        <div class="flex flex-wrap justify-center gap-4">
          <div v-for="sponsor in demeterSponsors" :key="sponsor" 
            class="bg-white rounded-lg shadow-md shadow-demeter-green/10 p-4 flex flex-col items-center w-full sm:w-60 border border-green-50 transition-transform hover:scale-[1.02]">
            <img :src="`/sponsors/${sponsor}.webp`" :alt="sponsor" class="h-10 mb-3 object-contain">
            <p class="text-gray-500 text-center text-xs">{{ $t(`collaboration.sponsors.${sponsor}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PAST SPONSORS -->
    <section>
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black mb-4">{{ $t('collaboration.sponsors.past.title') }}</h2>
        <p class="max-w-3xl mx-auto text-lg text-gray-600">
          {{ $t('collaboration.sponsors.past.description') }}
        </p>
      </div>

      <div class="flex flew-wrap justify-center gap-4 p-4">
        <div v-for="sponsor in pastSponsors" :key="sponsor">
          <img :src="`/sponsors/${sponsor}.webp`" :alt="sponsor" class="h-10 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 duration-300 transition-opacity">
        </div>
      </div>
    </section>

    <!-- SECTION: COLLABORATION PHILOSOPHY -->
    <!-- <section class="text-center max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-black mb-2">{{ $t('collaboration.collaboration.title') }}</h2>
      <p class="text-icarus-red font-medium italic mb-6">{{ $t('collaboration.collaboration.caption') }}</p>
      <p class="text-lg text-gray-700 leading-relaxed">
        {{ $t('collaboration.collaboration.description') }}
      </p>
    </section> -->

    <!-- SECTION: PARTNER WITH PURPOSE (Unified Layout) -->
  <section class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      
      <!-- Left Column: The Mission -->
      <div class="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gray-50/50">
        <h2 class="text-icarus-red font-black tracking-widest uppercase text-sm mb-3">
          {{ $t('collaboration.partnership.title') }}
        </h2>
        <h3 class="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
          {{ $t('collaboration.partnership.subtitle') }}
        </h3>
        <p class="text-gray-700 text-lg leading-relaxed mb-8">
          {{ $t('collaboration.partnership.description') }}
        </p>
        
        <!-- Quick Impact Stats/Notes -->
        <div class="p-4 border-l-4 border-icarus-red bg-white shadow-sm italic text-gray-600 text-sm">
          "{{ $t('collaboration.partnership.cta_note') }}"
        </div>
      </div>

      <!-- Right Column: Fund Allocation & Visuals -->
      <div class="p-8 md:p-12 lg:p-16 bg-white">
        <h3 class="text-xl font-black uppercase tracking-tight text-gray-900 mb-8 flex items-center gap-3">
          <span class="w-8 h-px bg-icarus-red"></span>
          {{ $t('collaboration.funds.title') }}
        </h3>

        <div class="space-y-6 mb-10">
          <div v-for="i in 6" :key="i" class="group flex gap-4 items-start">
            <div class="shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-icarus-red font-black group-hover:bg-icarus-red group-hover:text-white transition-colors duration-300">
              0{{ i }}
            </div>
            <div>
              <h4 class="font-bold text-gray-900 text-sm uppercase tracking-wide">
                {{ $t(`collaboration.funds.allocation${i}.title`) }}
              </h4>
              <p class="text-gray-500 text-xs italic leading-relaxed">
                {{ $t(`collaboration.funds.allocation${i}.description`) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Visual Anchor -->
        <div class="relative group rounded-xl overflow-hidden shadow-lg">
          <img src="/image_carousel/smoketunnel_gen2.webp" 
              class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Smoke Tunnel">
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p class="text-white text-xs font-bold px-4 text-center">
              {{ $t('collaboration.funds.caption') }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

    <!-- SECTION: BENEFITS (What's in it for you) -->
    <section>
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-black mb-2">{{ $t('collaboration.benefits.title') }}</h2>
        <p class="text-gray-500 italic">{{ $t('collaboration.benefits.caption') }}</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="benefit in [1, 2, 3, 4, 5, 6]" :key="benefit"
          class="group bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-icarus-red/10">
          <div class="flex flex-col items-center text-center space-y-4">
            <div class="w-16 h-16 bg-gray-900 group-hover:bg-icarus-red transition-colors duration-300"
              :style="{
                maskImage: `url('/icons/benefits/benefit${benefit}.svg')`,
                webkitMaskImage: `url('/icons/benefits/benefit${benefit}.svg')`,
                maskRepeat: 'no-repeat',
                maskSize: 'contain'
              }">
            </div>
            <h3 class="text-xl font-bold text-gray-900">
              {{ $t(`collaboration.benefits.benefits.benefit${benefit}.title`) }}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ $t(`collaboration.benefits.benefits.benefit${benefit}.description`) }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: FUND ALLOCATION -->
    <!-- <section class="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
      <h3 class="text-2xl md:text-3xl text-center font-black mb-12">{{ $t('collaboration.collaboration.funds.title') }}</h3>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="relative group overflow-hidden rounded-2xl shadow-2xl">
          <img src="/image_carousel/smoketunnel_gen2.webp" loading="lazy" alt="Smoke Tunnel Testing" 
            class="w-full h-auto transition-transform duration-500 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-icarus-red/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p class="text-white text-lg font-medium text-center w-full">
              {{ $t('collaboration.collaboration.funds.caption') }}
            </p>
          </div>
        </div>

        <div class="space-y-6">
          <div v-for="allocation in [1, 2, 3, 4, 5, 6]" :key="allocation" class="flex gap-4">
            <span class="text-icarus-red font-black text-xl">0{{ allocation }}</span>
            <div>
              <h4 class="font-bold text-gray-900 uppercase tracking-tight">{{ $t(`collaboration.collaboration.funds.allocation${allocation}.title`) }}</h4>
              <p class="text-gray-600 text-sm italic">{{ $t(`collaboration.collaboration.funds.allocation${allocation}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- TIERS COMPONENT -->
    <CollaborationTiers />
    
  </div>
</template>

<!-- <script setup>
// Assuming these are passed as props or defined in your store/data
const zeusSponsors = ['sponsor1', 'sponsor2'];
const poseidonSponsors = ['sponsor3', 'sponsor4'];
const demeterSponsors = ['sponsor5', 'sponsor6'];
</script> -->