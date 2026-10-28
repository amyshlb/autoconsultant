<template>
    <div class="flex min-h-screen flex-col items-center justify-center text-center">
        <h1 class="text-[96px] font-bold">404</h1>

        <p class="mb-[24px] text-[24px]">
            {{ t('not-found.message') }}
        </p>

        <router-link
            :to="`/${locale}`"
            class="rounded-[16px] bg-brand-green px-[28px] py-[16px]"
        >
            {{ t('not-found.home') }}
        </router-link>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>