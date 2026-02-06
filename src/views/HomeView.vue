<script setup>
import SplashScreen from '../components/SplashScreen.vue'
import StemRacing from '../components/StemRacing.vue'
import Timeline from '../components/HomeTimeline.vue'
</script>

<template>
  <SplashScreen />
  <StemRacing />
  <Timeline />  
  <RouterView />
</template>

<style scoped></style>
