<script setup>
import { ref } from 'vue'

// We define the IDs here, but pull all text from i18n
const generationIds = ['gen4', 'gen3','gen2', 'gen1',]
const generationMemberCounts = {
  gen1: 4,
  gen2: 6,
  gen3: 5,
  gen4: 6
}
const activeGen = ref(null)

const toggleGen = (id) => {
  activeGen.value = activeGen.value === id ? null : id
}
</script>

<template>
  <section id="hall-of-fame" class="py-24 bg-black border-t border-white/5">
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Section Header -->
      <div class="mb-12">
        <h2 class="text-icarus-red font-black uppercase tracking-[0.3em] text-xs mb-3">
          {{ $t('team.hall_of_fame.legacy_label') }}
        </h2>
        <h3 class="text-3xl font-bold text-white tracking-tight">
          {{ $t('team.hall_of_fame.title') }}
        </h3>
        <p class="text-gray-500 text-sm mt-2 italic">
          {{ $t('team.hall_of_fame.subtitle') }}
        </p>
      </div>

      <!-- Generations Accordion -->
      <div class="space-y-4">
        <div 
          v-for="id in generationIds" 
          :key="id"
          class="border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
          :class="activeGen === id ? 'bg-white/3 border-white/20' : 'bg-transparent hover:bg-white/2'"
        >
          <!-- Accordion Header -->
          <button 
            @click="toggleGen(id)"
            class="w-full flex items-center justify-between p-6 md:p-8 text-left group"
          >
            <div class="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
              <span class="text-white font-black uppercase tracking-widest text-lg">
                {{ $t(`team.hall_of_fame.generations.${id}.title`) }}
              </span>
              <span class="text-icarus-red font-mono text-xs tracking-widest">
                {{ $t(`team.hall_of_fame.generations.${id}.years`) }}
              </span>
              <span class="hidden md:block text-gray-500 text-xs uppercase tracking-[0.2em]">
                {{ $t(`team.hall_of_fame.generations.${id}.tagline`) }}
              </span>
            </div>
            
            <!-- Plus/Minus Icon -->
            <div class="relative w-6 h-6 flex items-center justify-center">
              <div class="absolute w-4 h-0.5 bg-white transition-transform duration-300"></div>
              <div 
                class="absolute w-0.5 h-4 bg-white transition-transform duration-300"
                :class="activeGen === id ? 'rotate-90 opacity-0' : ''"
              ></div>
            </div>
          </button>

          <!-- Accordion Content -->
          <div 
            v-show="activeGen === id"
            class="px-6 pb-8 md:px-8 md:pb-12 animate-slide-down"
          >
            <div class="pt-6 border-t border-white/10">
              <!-- Generation Description -->
              <div class="max-w-3xl mb-10">
                <p class="text-gray-300 text-sm leading-relaxed border-l-2 border-icarus-red pl-6 italic">
                  {{ $t(`team.hall_of_fame.generations.${id}.description`) }}
                </p>
              </div>

              <!-- Members Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- 
                  Note: In a real app, you'd likely loop through a member list. 
                  For now, we'll assume the i18n contains the member data.
                -->
                <div 
                  v-for="n in generationMemberCounts[id]" :key="n"
                  class="p-5 rounded-xl bg-white/5 border border-white/5 hover:border-icarus-red/30 transition-colors"
                >
                  <h4 class="text-white font-bold text-base mb-1">
                    {{ $t(`team.hall_of_fame.generations.${id}.members.m${n}.name`) }}
                  </h4>
                  <p class="text-icarus-red text-[9px] font-black uppercase tracking-widest mb-3">
                    {{ $t(`team.hall_of_fame.generations.${id}.members.m${n}.role`) }}
                  </p>
                  <p class="text-gray-400 text-xs leading-relaxed">
                    {{ $t(`team.hall_of_fame.generations.${id}.members.m${n}.bio`) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>