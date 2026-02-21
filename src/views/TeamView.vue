<script setup>
import CurrentMembers from '@/components/CurrentMembers.vue';
import HallOfFame from '@/components/HallOfFame.vue';
import TeamHero from '@/components/TeamHero.vue';

</script>

<template>
  <main class="bg-black min-h-screen">
    <!-- Hero Section -->
    <TeamHero />
    
    <div class="bg-black pb-20">
      <CurrentMembers />
      <HallOfFame />
    </div>
  </main>

  
</template>
