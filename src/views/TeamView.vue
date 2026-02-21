<script setup>
import CurrentMembers from '@/components/CurrentMembers.vue';
import HallOfFame from '@/components/HallOfFame.vue';

</script>

<template>
  <main class="bg-black min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/image_carousel/team_gen3.webp" 
          class="w-full h-full object-cover brightness-[0.4] scale-105 object-[50%_20%]"
          alt="Team Background"
        />
        <!-- Gradient Overlay for smooth transition to content -->
        <div class="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-6 max-w-4xl animate-fade-in">
        <h2 class="text-icarus-red font-black uppercase tracking-[0.4em] text-xs mb-4">
          {{ $t("team.hero_caption") }}
        </h2>
        <h1 class="font-dela text-4xl md:text-6xl text-white uppercase mb-6 tracking-tight">
            {{ $t("team.hero_title") }}
        </h1>
        <p class="text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed italic">
          "{{ $t("team.hero_subtitle") }}"
        </p>
      </div>
    </section>

    <!-- Placeholder for next sections -->
    <div class="bg-black pb-20">
      <CurrentMembers />
      <HallOfFame />
    </div>
  </main>

  
</template>
<style scoped>
.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
</style>