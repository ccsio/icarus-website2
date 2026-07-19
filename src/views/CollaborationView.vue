<script setup>
import Tiers from '@/components/collaboration/Tiers.vue';
import PastSponsors from '@/components/collaboration/PastSponsors.vue';
import CurrentSponsors from '@/components/collaboration/CurrentSponsors.vue';
import FundAllocation from '@/components/collaboration/FundAllocation.vue';
import Benefits from '@/components/collaboration/Benefits.vue';


</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 mt-20">
    
    <CurrentSponsors />

    <PastSponsors />

    <FundAllocation />

    <Benefits />

    <Tiers />
    
  </div>
</template>
