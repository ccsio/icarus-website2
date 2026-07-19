<script setup>
</script>


<template>
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
</template>