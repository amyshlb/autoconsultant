<template>
  <header class="w-full max-w-[1440px] mx-auto pt-[28px] px-[80px] max-md:px-[56px] bg-transparent">

    <div class="w-full flex items-center justify-between">

    <div class="flex items-center text-[36px] max-md:text-[24px] mb-[6px] ml-[5px] max-md:ml-0 font-bold leading-[90%] tracking-[-1px] select-none font-sans">
        <span class="text-brand-green">auto</span>
        <span class="text-brand-dark">consultant</span>
      </div>

      <nav class="hidden md:flex items-center" aria-label="Main Navigation">
        <ul class="flex items-center h-[48px] gap-[37px]">
          <li v-for="(link, index) in navLinks" :key="index" class="flex items-center">

            <a v-if="link.label.trim() === 'Хочу купить' ":href="link.href"
              class="w-[185px] h-[48px] bg-brand-dark text-brand-white text-[20px] font-semibold leading-none tracking-[-1%] px-[32px] rounded-[16px] flex items-center justify-center gap-[4px] hover:opacity-90 transition-opacity whitespace-nowrap font-sans">
              {{ link.label }}
            </a>

            <a v-else :href="link.href"
              class="text-brand-dark text-[20px] font-medium leading-[90%] tracking-[-1%] hover:opacity-70 transition-opacity whitespace-nowrap font-sans translate-y-[5px]">
              {{ link.label }}
            </a>

          </li>
        </ul>
      </nav>


      <button
        @click="isMenuOpen = !isMenuOpen; emit('menu-toggle', isMenuOpen)"
        class="md:hidden flex flex-col items-center justify-center relative w-[36px] h-[36px] gap-[6px] bg-brand-white rounded-[8px]"
        aria-label="Open menu"
      >
        <span
          class="w-[24px] h-[2px] bg-brand-secondary-black rounded-[2px] transition-all duration-200"
          :class="isMenuOpen ? 'absolute rotate-45' : ''"
        ></span>

        <span
          class="w-[24px] h-[2px] bg-brand-secondary-black rounded-[2px] transition-all duration-200"
          :class="isMenuOpen ? 'absolute -rotate-45' : ''"
        ></span>

        <span
          class="w-[24px] h-[2px] bg-brand-secondary-black rounded-[2px] transition-all duration-200"
          :class="isMenuOpen ? 'opacity-0' : ''"
        ></span>
      </button>

    </div>

  </header>
    <nav
      v-if="isMenuOpen"
      class="md:hidden w-full px-[56px] pt-[100px]"
    >
      <div class="w-full flex flex-col gap-[16px]">

        <a
          href="#how-it-works"
          @click="isMenuOpen = false"
          class="w-full h-[36px] flex items-center text-[34px] leading-[36px] font-extrabold text-brand-dark"
        >
          Как работает бот
        </a>

        <a
          href="#faq"
          @click="isMenuOpen = false"
          class="w-full h-[36px] flex items-center text-[34px] leading-[36px] font-extrabold text-brand-dark"
        >
          Вопросы и ответы
        </a>

        <a
          href="#buy"
          @click="isMenuOpen = false"
          class="w-full h-[60px] mt-[31px] bg-brand-green text-brand-dark text-[17px] font-semibold rounded-[20px] flex items-center justify-center"
        >
          Хочу купить
        </a>

      </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const navLinks = ref([
  { href: '#how-it-works', label: 'Как работает бот' },
  { href: '#faq', label: 'Вопросы и ответы' },
  { href: '#buy', label: 'Хочу купить' },
]);
const isMenuOpen = ref(false);
const emit = defineEmits(['menu-toggle']);
</script>