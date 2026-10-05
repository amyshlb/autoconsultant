<template>
    <header
        class="w-full max-w-[1440px] mx-auto pt-[28px] px-[80px] max-md:px-[20px] bg-transparent"
    >
        <div
            class="w-full flex items-center justify-between relative z-50"
        >
            <div
                class="relative z-60 flex items-center text-[36px] max-md:text-[24px] mb-[6px] ml-[5px] max-md:ml-0 font-bold leading-[90%] tracking-[-1px] select-none"
            >
                <span class="text-brand-green">auto</span>
                <span class="text-brand-dark">consultant</span>
            </div>

            <nav
                class="hidden md:flex items-center"
                aria-label="Main Navigation"
            >
                <ul class="flex items-center h-[48px] gap-[37px]">
                    <li
                        v-for="link in navLinks"
                        :key="link.href"
                        class="flex items-center"
                    >
                        <a
                            v-if="link.isButton"
                            :href="link.href"
                            class="..."
                        >
                            {{ link.label }}
                        </a>

                        <a
                            v-else
                            :href="link.href"
                            class="..."
                        >
                            {{ link.label }}
                        </a>
                    </li>
                </ul>
            </nav>

            <BurgerMenu />
        </div>
    </header>
</template>

<script setup>
import BurgerMenu from './BurgerMenu.vue';

const navLinks = [
    { href: '#how-it-works', label: 'Как работает бот' },
    { href: '#faq', label: 'Вопросы и ответы' },
    { href: '#buy', label: 'Хочу купить', isButton: true },
];
</script>