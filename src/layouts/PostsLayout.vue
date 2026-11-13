<template>
    <main class="min-h-screen bg-brand-bg font-sans antialiased text-brand-dark">
        <PostsHeader
            :back-to="backTo"
            :back-text="backText"
        />

        <router-view />

        <Footer class="mt-[16px] relative z-0" />
    </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import PostsHeader from '@/components/Posts/PostsHeader.vue'
import Footer from '@/components/Default/Footer.vue'

const route = useRoute()
const { t } = useI18n()

const backTo = computed(() => {
    return route.params.id
        ? `/${route.params.locale}/posts`
        : `/${route.params.locale}`
})

const backText = computed(() => {
    return route.params.id
        ? t('posts.backToPosts')
        : t('posts.back')
})
</script>