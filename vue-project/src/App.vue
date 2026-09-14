<template>
    <div class="min-h-screen bg-brand-bg font-sans antialiased text-brand-dark">
        
        <Header />
        
        <main class="main-section w-full max-w-[1440px] mx-auto px-[40px] mt-[92px]">
            <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
                <HeroSection />
            </div>
        </main>
      
    </div>
</template>

<script setup>
import AOS from 'aos';
import { onMounted } from 'vue';
import 'aos/dist/aos.css';
import Header from './components/Header.vue';
import HeroSection from './sections/HeroSection.vue';

onMounted(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
});
</script>
<style lang="scss" scoped>
.main-section {
  width: 1360px;
  /* height: 1943px; */
  min-height: 900px; 
  margin-top: 92px;
}
</style>