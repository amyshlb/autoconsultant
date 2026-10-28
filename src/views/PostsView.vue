<template>
    <main
        class="min-h-screen bg-brand-bg text-brand-dark px-[40px] pt-[28px] pb-[40px] max-md:px-[20px] max-md:pt-[20px]"
    >
        <header
            class="flex items-center justify-between max-w-[1360px] mx-auto px-[24px] max-md:px-[24px]"
        >
            <router-link
                :to="`/${locale}`"
                class="text-[36px] font-bold tracking-[-1px] hover:opacity-70 transition-opacity max-md:text-[20px]"
            >
                <span class="text-brand-green">auto</span>
                <span class="text-brand-dark">consultant</span>
            </router-link>
        </header>

        <section
            class="max-w-[1360px] mx-auto mt-[36px] bg-brand-white rounded-[52px] px-[60px] py-[72px] min-h-[440px] max-md:mt-[36px] max-md:rounded-[32px] max-md:px-[24px] max-md:py-[40px] max-md:min-h-[360px]"
        >
            
            <h1
                class="text-[72px] leading-[1.05] font-extrabold tracking-[-2px] max-w-[800px] max-md:text-[40px] max-md:tracking-[-1px]"
            >
                {{ t('posts.title') }}
            </h1>

            <p
                class="mt-[28px] text-[24px] leading-[1.4] text-brand-gray max-w-[650px] max-md:text-[17px] max-md:mt-[20px]"
            >
                {{ t('posts.description') }}
            </p>

            <div
                class="mt-[56px] border-t border-[var(--color-brand-light-gray)] pt-[24px] flex items-center justify-between gap-[20px] max-md:mt-[40px]"
            >
                <p class="text-[16px] text-brand-gray max-md:text-[14px]">
                    {{ t('posts.coming-soon') }}
                </p>

                <router-link
                    :to="`/${locale}`"
                    class="shrink-0 flex items-center justify-center rounded-[20px] bg-brand-green px-[28px] py-[16px] text-[16px] font-semibold hover:opacity-80 transition-opacity max-md:px-[18px] max-md:py-[12px] max-md:text-[14px]"
                >
                    {{ t('posts.home') }}
                </router-link>
            </div>
        </section>
    </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>