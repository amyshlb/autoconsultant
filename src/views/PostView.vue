
<template>
    <main
        class="min-h-screen bg-brand-bg text-brand-dark px-[40px] pt-[28px] pb-[40px] max-md:px-[20px] max-md:pt-[20px]"
    >
        <Header
            :back-to="`/${locale}/posts`"
            :back-text="t('posts.backToPosts')"
        />

        <section
            class="max-w-[1360px] mx-auto mt-[36px] bg-brand-white rounded-[52px] px-[60px] py-[72px] max-md:mt-[36px] max-md:rounded-[32px] max-md:px-[24px] max-md:py-[40px]"
        >

            <Loader v-if="isLoading" />

            <p v-else-if="error" class="mt-[40px] text-brand-gray">
                {{ error }}
            </p>

            <template v-else>
                <article v-if="post" class="mt-[20px]">
                    <h1
                        class="text-[56px] leading-[1.1] font-extrabold tracking-[-1px] max-w-[1000px] max-md:text-[32px] max-md:tracking-[-1px]"
                    >
                        {{ post.title }}
                    </h1>

                    <p
                        class="mt-[32px] text-[24px] leading-[1.6] text-brand-gray max-w-[1000px] max-md:text-[16px] max-md:mt-[20px]"
                    >
                        {{ post.body }}
                    </p>
                </article>

                <section class="mt-[72px]">
                    <h2 class="text-[44px] font-bold mb-[32px] max-md:text-[26px]">
                        {{ t('posts.comments') }}
                    </h2>

                    <p v-if="commentsError" class="text-brand-gray">
                        {{ commentsError }}
                    </p>

                    <div v-else class="flex flex-col gap-[20px]">
                        <article
                            v-for="comment in comments"
                            :key="comment.id"
                            class="rounded-[24px] border border-brand-light-gray p-[28px] max-md:p-[20px]"
                        >
                            <h3 class="text-[24px] font-semibold max-md:text-[17px]">
                                {{ comment.name }}
                            </h3>

                            <p class="mt-[8px] text-brand-green text-[20px] max-md:text-[14px]">
                                {{ comment.email }}
                            </p>

                            <p class="mt-[16px] text-brand-gray leading-[1.5] max-md:text-[14px]">
                                {{ comment.body }}
                            </p>
                        </article>
                    </div>
                </section>
            </template>
        </section>
    </main>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Loader from '@/components/Loader.vue'

const route = useRoute()
const { t, locale } = useI18n()
const post = ref(null)
const isLoading = ref(true)
const error = ref('')
const comments = ref([])
const commentsError = ref('')

const fetchPost = async () => {
    error.value = ''

    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${route.params.id}`
        )
        if (!response.ok) {
            throw new Error('Failed to load post')
        }

        post.value = await response.json()
    } catch (err) {
        error.value = t('posts.postError')
    } 
}

const fetchComments = async () => {
    commentsError.value = ''

    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments`
        )

        if (!response.ok) {
            throw new Error('Failed to load comments')
        }

        comments.value = await response.json()
    } catch (err) {
        commentsError.value = t('posts.commentsError')
    }
}
const fetchData = async () => {
    isLoading.value = true
    
    await Promise.all([
        fetchPost(),
        fetchComments()
    ])

    isLoading.value = false
}

watch(
    () => route.params.id,
    () => {
        fetchData()
    },
    { immediate: true }
)
</script>