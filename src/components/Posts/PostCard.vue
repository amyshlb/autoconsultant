<template>
    <router-link
        :to="`/${locale}/posts/${post.id}`"
        class="rounded-[32px] border border-brand-light-gray p-[36px] transition-shadow hover:shadow-md max-md:rounded-[24px] max-md:p-[24px]"
    >
        <h2 class="text-[36px] font-bold leading-[1.5] tracking-[-1px] max-md:text-[22px]">
            {{ post.title }}
        </h2>

        <p class="mt-[20px] text-[20px] leading-[1.5] text-brand-gray max-md:text-[15px]">
            {{ post.body }}
        </p>

        <div class="mt-[28px] flex justify-end">
            <span
                class="bg-brand-blue text-brand-white rounded-full px-[32px] py-[16px] text-[16px] font-semibold transition-opacity hover:opacity-70 max-md:px-[24px] max-md:py-[13px] max-md:text-[14px]"
            >
                {{ t('posts.details') }}
            </span>
        </div>
    </router-link>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
    post: {
        type: Object,
        required: true
    }
})

const { t, locale } = useI18n()
</script>