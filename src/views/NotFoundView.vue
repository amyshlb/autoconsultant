<template>
    <div class="flex min-h-screen flex-col">
        <Header />
        
        <main class="flex flex-1 flex-col items-center justify-center text-center">
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
        </main>

        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/Default/Header.vue'
import Footer from '@/components/Default/Footer.vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>