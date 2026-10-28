<template>
    <header
        class="w-full max-w-[1440px] mx-auto pt-[28px] px-[80px] max-md:px-[20px] bg-transparent"
    >
        <div
            class="w-full flex items-center justify-between relative z-50"
        >
            <router-link 
                to="/" 
                class="relative z-60 flex items-center text-[36px] max-md:text-[24px] mb-[6px] ml-[5px] max-md:ml-0 font-bold leading-[90%] tracking-[-1px] select-none"
            >
                <span class="text-brand-green">auto</span>
                <span class="text-brand-dark">consultant</span>
            </router-link>

        
            <LanguageSwitcher />

            <nav
                class="hidden md:flex items-center"
                aria-label="Main Navigation"
            >
                <ul class="flex items-center h-[48px] gap-[37px]">
                    <li
                        v-for="link in navLinks"
                        :key="link.path"
                        class="flex items-center"
                    >
                        <router-link
                            :to="link.path"
                            :class="link.isButton
                                ? 'bg-brand-dark text-brand-white text-[20px] font-semibold rounded-[16px] tracking-[-1px] px-[24px] py-[8px]'
                                : 'text-brand-dark hover:text-brand-green transition-colors'"
                        >
                            {{ link.label }}
                        </router-link>
                    </li>
                </ul>
            </nav>

            <BurgerMenu />
        </div>
    </header>
</template>

<script setup>
import LanguageSwitcher from '@/LanguageSwitcher.vue';
import BurgerMenu from './BurgerMenu.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t, locale } = useI18n();

const navLinks = computed (() => [
    { path: `/${locale.value}/how-it-works`, label: t('header.how-it-works') },
    { path: `/${locale.value}/faq`, label: t('header.faq') },
    { path: `/${locale.value}/buy`, label: t('header.buy'), isButton: true },
]);
</script>