<template>
    <header
        class="w-full max-w-[1440px] mx-auto pt-[28px] px-[80px] max-md:px-[20px] bg-transparent"
    >
        <div
            class="w-full flex items-center justify-between relative z-50"
            :class="backTo ? 'max-md:flex-col max-md:items-stretch max-md:gap-[20px]' : ''"
        >
            <div class="flex items-center"
                :class="backTo 
                    ? 'gap-[24px] max-md:w-full max-md:justify-between' 
                    : 'gap-[24px]'"
            >
                <router-link 
                    to="/" 
                    class="relative z-60 flex items-center text-[36px] max-md:text-[24px] mb-[6px] ml-[5px] max-md:ml-0 font-bold leading-[90%] tracking-[-1px] select-none"
                >
                    <span class="text-brand-green">auto</span>
                    <span class="text-brand-dark">consultant</span>
                </router-link>

            
                <LanguageSwitcher />
            </div>

            <router-link
                v-if="backTo"
                :to="backTo"
                class="inline-flex items-center gap-[6px] shrink-0 whitespace-nowrap text-[24px] font-semibold text-brand-dark hover:opacity-70 transition-opacity max-md:text-[15px]"
            >
                ← {{ backText }}
            </router-link>


            <nav
                v-if="!backTo"
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

            <BurgerMenu v-if="!backTo"/>
        </div>
    </header>
</template>

<script setup>
import LanguageSwitcher from '@/LanguageSwitcher.vue';
import BurgerMenu from '@/components/Default/BurgerMenu.vue';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t, locale } = useI18n();

const navLinks = computed (() => [
    { path: `/${locale.value}/posts`, label: t('header.posts') },
    { path: `/${locale.value}/how-it-works`, label: t('header.how-it-works') },
    { path: `/${locale.value}/faq`, label: t('header.faq') },
    { path: `/${locale.value}/buy`, label: t('header.buy'), isButton: true },
]);

const props = defineProps({
    backTo: {
        type: String,
        default: ''
    },
    backText: {
        type: String,
        default: ''
    }
})
</script>