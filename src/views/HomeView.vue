<script setup>
import SplashScreen from '../components/SplashScreen.vue'
import Navbar from '../components/Navbar.vue'
import StemRacing from '../components/StemRacing.vue'
import Timeline from '../components/HomeTimeline.vue'
</script>

<template>
  <Navbar />
  <SplashScreen />
  <StemRacing />
  <Timeline />  
  <RouterView />
</template>

<style scoped></style>
