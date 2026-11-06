<template>
    <main
        class="min-h-screen bg-brand-bg text-brand-dark px-[40px] pt-[28px] pb-[40px] max-md:px-[20px] max-md:pt-[20px]"
    >
        <Header
            :back-to="`/${locale}`"
            :back-text="t('posts.back')"
        />

        <section
            class="max-w-[1360px] mx-auto mt-[36px] bg-brand-white rounded-[52px] px-[60px] py-[72px] min-h-[440px] max-md:mt-[36px] max-md:rounded-[32px] max-md:px-[24px] max-md:py-[40px] max-md:min-h-[360px]"
        >
            
            <h1
                class="mt-[20px] text-[72px] leading-[1.05] font-extrabold tracking-[-1px] max-w-[800px] max-md:text-[40px] max-md:tracking-[-1px]"
            >
                {{ t('posts.title') }}
            </h1>

            <p
                class="mt-[28px] text-[24px] leading-[1.4] text-brand-gray max-w-[650px] max-md:text-[17px] max-md:mt-[20px]"
            >
                {{ t('posts.description') }}
            </p>

            <Loader v-if="isLoading" />

            <p v-else-if="error">
                {{ error }}
            </p>


            <div
                v-else
                class="mt-[56px] flex flex-col gap-[24px]"
            >
                <article
                    v-for="post in posts"
                    :key="post.id"
                    class="rounded-[32px] border border-brand-light-gray p-[36px] transition-shadow hover:shadow-md max-md:rounded-[24px] max-md:p-[24px]"
                >
                    <h2 class="text-[36px] font-bold leading-[1.5] tracking-[-1px] max-md:text-[22px]">
                        {{ post.title }}
                    </h2>

                    <p class="mt-[20px] text-[20px] leading-[1.5] text-brand-gray max-md:text-[15px]">
                        {{ post.body }}
                    </p>

                    <div class="mt-[28px] flex justify-end">
                        <router-link
                            :to="`/${locale}/posts/${post.id}`"
                            class="bg-brand-blue text-brand-white rounded-full px-[32px] py-[16px] text-[16px] font-semibold transition-opacity hover:opacity-70 max-md:px-[24px] max-md:py-[13px] max-md:text-[14px]"
                        >
                            {{ t('posts.details') }}
                        </router-link>
                    </div>
                </article>
            </div>
        </section>
    </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted } from 'vue'
import Loader from '@/components/Loader.vue'
import Header from '@/components/Header.vue'

const { t, locale } = useI18n()
const posts = ref([])
const isLoading = ref(true)
const error = ref('')

const fetchPosts = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        if (!response.ok) {
            throw new Error('Failed to load posts')
        }

        posts.value = await response.json()
    } catch (err) {
        error.value = t('posts.loadError')
    } finally {
        isLoading.value = false
    }
}

onMounted(() => {
    fetchPosts()
})
</script>