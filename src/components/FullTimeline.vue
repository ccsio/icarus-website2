<script setup>
const timelineEvents = [
  { id: 'world_finals', type: 'pinnacle' },
  { id: 'national_finals_25', type: 'major' },
  { id: 'prep_24_25', type: 'standard' },
  { id: 'showrun_24', type: 'standard' },
  { id: 'reorg_24', type: 'standard' },
  { id: 'national_finals_24', type: 'major' },
  { id: 'showrun_23', type: 'standard' },
  { id: 'june_event_23', type: 'major' },
  { id: 'expansion_23', type: 'standard' },
  { id: 'first_event_22', type: 'major' },
  { id: 'establishment_22', type: 'standard' }
]
</script>

<template>
  <section id="full-timeline" class="py-24 bg-black relative overflow-hidden">
    <!-- Background Decorative Element -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-icarus-red/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

    <div class="max-w-4xl mx-auto px-6">
      <!-- Header -->
      <div class="mb-20 text-center">
        <h2 class="text-icarus-red font-black uppercase tracking-[0.4em] text-xs mb-4">The Archive</h2>
        <h3 class="text-4xl font-bold text-white tracking-tight">Our Full History</h3>
      </div>

      <!-- Vertical Timeline -->
      <div class="relative">
        <!-- The Central Line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-icarus-red via-icarus-red/50 to-transparent -translate-x-1/2"></div>

        <!-- Events -->
        <div class="space-y-16">
          <div 
            v-for="(event, index) in timelineEvents" 
            :key="event.id"
            class="relative flex flex-col md:flex-row items-start md:items-center group"
          >
            <!-- The Dot -->
            <div 
              :class="[
                'absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full border-4 border-black transition-all duration-500 group-hover:scale-150',
                event.type === 'pinnacle' ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] w-6 h-6' : '',
                event.type === 'major' ? 'bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]' : '',
                event.type === 'standard' ? 'bg-icarus-red' : ''
              ]"
            ></div>

            <!-- Content Box -->
            <div 
              :class="[
                'ml-12 md:ml-0 md:w-[45%] p-6 rounded-2xl border transition-all duration-500',
                index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left',
                event.type === 'pinnacle' ? 'bg-icarus-red/10 border-icarus-red/50 shadow-2xl shadow-icarus-red/10' : 'bg-white/5 border-white/10 hover:border-white/20'
              ]"
            >
              <time class="block text-icarus-red font-mono text-[10px] uppercase tracking-widest mb-2">
                {{ $t(`team.timeline.${event.id}.date`) }}
              </time>
              <h4 class="text-xl font-bold text-white mb-3">
                {{ $t(`team.timeline.${event.id}.title`) }}
              </h4>
              <p class="text-gray-400 text-sm leading-relaxed">
                {{ $t(`team.timeline.${event.id}.text`) }}
              </p>
              
              <!-- Special Badge for Major/Pinnacle -->
              <div v-if="event.type !== 'standard'" class="mt-4 flex md:justify-end" :class="index % 2 !== 0 ? 'md:justify-start' : ''">
                <span 
                  :class="[
                    'text-[8px] font-black uppercase px-2 py-0.5 rounded tracking-tighter',
                    event.type === 'pinnacle' ? 'bg-white text-black' : 'bg-yellow-500/20 text-yellow-500'
                  ]"
                >
                  {{ event.type === 'pinnacle' ? 'World Finals' : 'Major Achievement' }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>