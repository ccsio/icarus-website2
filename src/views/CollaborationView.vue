<script setup>
import Tiers from '@/components/collaboration/Tiers.vue';
import PastSponsors from '@/components/collaboration/PastSponsors.vue';
import CurrentSponsors from '@/components/collaboration/CurrentSponsors.vue';
import FundAllocation from '@/components/collaboration/FundAllocation.vue';


</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 mt-20">
    
    <CurrentSponsors />

    <PastSponsors />

    <FundAllocation />

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
    <Tiers />
    
  </div>
</template>
