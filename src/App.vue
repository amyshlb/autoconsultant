<template>
    <main class="min-h-screen bg-brand-bg font-sans antialiased text-brand-dark">
        <Header />

            <div class="main-section w-full max-w-[1440px] mx-auto px-[40px] mt-[92px] max-md:px-0">
                <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
                    <HeroSection />
                </div>
            </div>

            <div class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px] max-md:px-0">
                <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
                    <StepSection class="pb-[120px]"/>
                </div>
            </div>

            <div class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px] max-md:px-0">
                <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
                    <BuySection/> 
                </div>
            </div>

            <div class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px] max-md:px-0">
                <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
                    <FaqSection class="pb-[60px]" />
                </div>
            </div>

            <div class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px] relative z-10 max-md:px-0">
                <div class="bg-brand-white rounded-[60px] shadow-sm relative w-full">
                    <PriceSection/>
                </div>
            </div>

            <Footer class="mt-[16px] relative z-0" />
        </main>


</template>

<script setup>
import AOS from 'aos';
import { onMounted } from 'vue';
import 'aos/dist/aos.css';
import Header from './components/MainPage/Header.vue';
import HeroSection from './components/MainPage/HeroSection.vue';
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
</script>

<style lang="scss" scoped>
.main-section {
  width: 100%;
//   min-height: 900px; 
  margin-top: 22px;
}
</style>