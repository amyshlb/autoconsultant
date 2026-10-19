<template>
  <main class="min-h-screen bg-brand-bg font-sans antialiased text-brand-dark">
    <Header />

    <router-view />

    <Footer class="mt-[16px] relative z-0" />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  })
})
</script>
