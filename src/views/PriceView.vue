<template>
    <div class="section w-full max-w-[1440px] mx-auto px-[40px] mt-[92px] max-md:px-0">
        <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-visible w-full">
            <PriceSection />
        </div>
        <div class="bg-brand-white rounded-[60px] shadow-sm relative overflow-hidden w-full mt-[36px]">
            <BuySection />
        </div>
    </div>
</template>

<script setup lang="ts">
import BuySection from '@/components/MainPage/BuySection.vue';
import PriceSection from '@/components/MainPage/PriceSection.vue';
</script>