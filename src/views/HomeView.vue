<script setup>
import SplashScreen from '../components/SplashScreen.vue'
import StemRacing from '../components/StemRacing.vue'
import Timeline from '../components/HomeTimeline.vue'
import HomeMedia from '../components/HomeMedia.vue'
</script>

<template>
  <SplashScreen />
  <StemRacing />
  <HomeMedia />
  <Timeline />
  <RouterView />
</template>

<style scoped></style>
