<script setup>
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const zeusSponsors = ["oeuvre"];
const poseidonSponsors = ["eurobank", "gestron", "apeeel2", "esl2"];
const demeterSponsors = ["ortea", "delphis"];

const getSponsorLogo = (sponsor) => {  
  const supportedLocales = ['fr', 'lb'];  
  return supportedLocales.includes(locale.value)  
    ? `/sponsors/${sponsor}_${locale.value}.webp`  
    : `/sponsors/${sponsor}.webp`;  
};

</script>


<template>
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
            <img :src="getSponsorLogo(sponsor)" :alt="sponsor" class="h-20 mb-6 object-contain">
            <p class="text-gray-600 text-center italic">{{ $t(`collaboration.sponsors.${sponsor}.description`) }}</p>
          </div>
        </div>

        <!-- Poseidon Sponsors (Medium) -->
        <div 
          :class="[
            'flex flex-wrap justify-center gap-6',
            poseidonSponsors.length === 4 ? 'max-w-[calc(2*(18rem+1.5rem))] mx-auto' : ''
          ]"
        >
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
</template>