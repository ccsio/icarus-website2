<script setup>
import SplashScreen from '../components/SplashScreen.vue'
import Navbar from '../components/Navbar.vue'
import StemRacing from '../components/StemRacing.vue'
</script>

<template>
  <Navbar />
  <SplashScreen />
  <StemRacing />
  <RouterView />
</template>

<style scoped></style>
