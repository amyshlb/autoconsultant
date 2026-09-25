<template>
    <div class="min-h-screen bg-brand-bg font-sans antialiased text-brand-dark">
    <Header @menu-toggle="isMenuOpen = $event" />
    
    <div v-if="!isMenuOpen">
        <main class="main-section w-full max-w-[1440px] mx-auto px-[40px] mt-[92px]">
            <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
                <HeroSection />
            </div>
        </main>

        <section class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px]">
            <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
                <StepSection class="pb-[120px]"/>
            </div>
        </section>

        <section class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px]">
            <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
                <BuySection/> 
            </div>
        </section>

        <section class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px]">
            <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
                <FaqSection class="pb-[60px]" />
            </div>
        </section>
        <section class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px] relative z-10">
            <div class="bg-brand-white rounded-[60px] shadow-sm relative w-full">
                <PriceSection/>
            </div>
        </section>
        <Footer class="mt-[16px] relative z-0" />
        </div>

    </div>
</template>

<script setup>
import AOS from 'aos';
import { onMounted } from 'vue';
import 'aos/dist/aos.css';
import { ref } from 'vue';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import StepSection from './components/StepSection.vue';
import BuySection from './components/BuySection.vue';
import FaqSection from './components/FaqSection.vue';
import PriceSection from './components/PriceSection.vue';
import Footer from './components/Footer.vue';

onMounted(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
  });
});
const isMenuOpen = ref(false);
</script>
<style lang="scss" scoped>
.main-section {
  width: 100%;
//   min-height: 900px; 
  margin-top: 22px;
}
</style>