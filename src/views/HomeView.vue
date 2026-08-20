<script setup>
import SplashScreen from '../components/SplashScreen.vue'
import StemRacing from '../components/StemRacing.vue'
import Timeline from '../components/HomeTimeline.vue'
import ArticleSection from '../components/ArticleSection.vue'
</script>

<template>
  <SplashScreen />
  <StemRacing />
  <ArticleSection />
  <Timeline />
  <RouterView />
</template>

<style scoped></style>
