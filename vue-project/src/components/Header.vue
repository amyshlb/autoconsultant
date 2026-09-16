<template>
  <header class="w-full max-w-[1440px] mx-auto pt-[28px] px-[80px] bg-transparent">
        <div class="w-full flex items-baseline justify-between">
        
        <div class="flex items-center text-[36px] font-bold leading-[90%] tracking-[-1px] select-none font-sans">
            <span class="text-brand-green">auto</span>
            <span class="text-brand-dark">consultant</span>
        </div>
      
        <nav class="hidden md:flex items-baseline" aria-label="Main Navigation">
            <ul class="flex items-baseline gap-[40px]">
            <li v-for="(link, index) in navLinks" :key="index" class="flex items-baseline">
                
                <button 
                v-if="link.label.trim() === 'Хочу купить'" 
                class="bg-brand-dark text-brand-white text-[20px] font-semibold leading-[100%] tracking-[-1%] pt-[14px] pb-[14px] pl-[32px] pr-[32px] rounded-[16px] flex items-center justify-center gap-[4px] hover:opacity-90 transition-opacity whitespace-nowrap font-sans"
                >
                {{ link.label }}
                </button>
                
                <a 
                v-else 
                :href="link.href" 
                class="text-brand-dark text-[20px] font-medium leading-[90%] tracking-[-1%] hover:opacity-70 transition-opacity whitespace-nowrap font-sans"
                >
                {{ link.label }}
                </a>

            </li>
            </ul>
        </nav>

        </div>

  </header>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = ref([
  { href: '#how-it-works', label: 'Как работает бот' },
  { href: '#faq',          label: 'Вопросы и ответы' },
  { href: '#buy',          label: 'Хочу купить' },
]);
</script>
