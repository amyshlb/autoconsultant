<template>
    <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden flex flex-col items-center justify-center relative z-50 w-[36px] h-[36px] gap-[6px] bg-brand-white rounded-[8px]"   
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

        <nav
            :class="isMenuOpen ? 'block' : 'hidden'"
            class="fixed inset-0 z-40 md:hidden bg-brand-bg px-[20px] pt-[100px]"
        >
            <div class="w-full flex flex-col gap-[16px]">

                <a
                href="#how-it-works"
                @click.prevent="goToSection('#how-it-works')"
                class="w-full h-[36px] flex items-center text-[34px] leading-[36px] font-extrabold text-brand-dark"
                >
                Как работает бот
                </a>

                <a
                href="#faq"
                @click.prevent="goToSection('#faq')"
                class="w-full h-[36px] flex items-center text-[34px] leading-[36px] font-extrabold text-brand-dark"
                >
                Вопросы и ответы
                </a>

                <a
                href="#buy"
                @click.prevent="goToSection('#buy')"
                class="w-full h-[60px] mt-[31px] bg-brand-green text-brand-dark text-[17px] font-semibold rounded-[20px] flex items-center justify-center"
                >
                Хочу купить
                </a>

            </div>
        </nav>
</template>


<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const goToSection = (id) => {
  isMenuOpen.value = false;

  document.querySelector(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
</script>