<template>
    <div class="relative">
        <button
            type="button"
            @click="isOpen = !isOpen"
            class="flex w-[56px] shrink-0 items-center justify-between text-brand-dark"
        >
            {{ locale.toUpperCase() }}
            <span
                class="text-[12px] transition-transform"
                :class="isOpen ? 'rotate-180' : ''"
            >
                ▼
            </span>
        </button>

        <div
            v-if="isOpen"
            class="absolute right-0 top-full mt-[8px] z-[60] min-w-[120px] rounded-[12px] bg-white p-[6px] shadow-md"
        >
            <button
                v-for="language in languages"
                :key="language.code"
                type="button"
                @click="changeLanguage(language.code)"
                class="block w-full rounded-[8px] px-[12px] py-[8px] text-left text-[14px] hover:bg-gray-100"
            >
                {{ language.name }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();

const isOpen = ref(false);

const languages = [
    { code: 'kk', name: 'Қазақша' },
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' }
];

const changeLanguage = (language) => {
    const newPath = route.fullPath.replace(
        /^\/(ru|en|kk)(?=\/|$|#)/,
        `/${language}`
    );

    router.push(newPath);
    isOpen.value = false;
};
</script>