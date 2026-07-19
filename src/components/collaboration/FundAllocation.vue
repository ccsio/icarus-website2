<script setup>

</script>
<template>
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
</template>