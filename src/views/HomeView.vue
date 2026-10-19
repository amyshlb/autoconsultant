<template>
  <div>
    <section class="main-section w-full max-w-[1440px] mx-auto px-[40px] mt-[92px] max-md:px-0">
      <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
        <HeroSection />
      </div>
    </section>

    <section class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px] max-md:px-0">
      <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
        <StepSection class="pb-[120px]"/>
      </div>
    </section>

    <section class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px] max-md:px-0">
      <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
        <BuySection/> 
      </div>
    </section>

    <section class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px] max-md:px-0">
      <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full">
        <FaqSection class="pb-[60px]" />
      </div>
    </section>

    <section class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[16px] relative z-10 max-md:px-0">
      <div class="bg-brand-white rounded-[60px] shadow-sm relative w-full">
        <PriceSection/>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroSection from '@/components/MainPage/HeroSection.vue'
import StepSection from '@/components/MainPage/StepSection.vue'
import BuySection from '@/components/MainPage/BuySection.vue'
import FaqSection from '@/components/MainPage/FaqSection.vue'
import PriceSection from '@/components/MainPage/PriceSection.vue'
</script>

<style lang="scss" scoped>
.main-section {
  width: 100%;
  margin-top: 22px;
}
</style>
