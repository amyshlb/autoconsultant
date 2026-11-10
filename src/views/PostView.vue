<template>
    <main
        class="min-h-screen bg-brand-bg text-brand-dark px-[40px] pt-[28px] pb-[40px] max-md:px-[20px] max-md:pt-[20px]"
    >

        <section
            class="max-w-[1360px] mx-auto mt-[36px] bg-brand-white rounded-[52px] px-[60px] py-[72px] max-md:mt-[36px] max-md:rounded-[32px] max-md:px-[24px] max-md:py-[40px]"
        >

            <Loader v-if="isPostLoading" />

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

                    <div 
                        v-else-if="isCommentsLoading"
                        class="flex flex-col gap-[20px]"
                    >
                        <div
                            v-for="item in 3"
                            :key="item"
                            class="rounded-[24px] border border-brand-light-gray p-[28px] animate-pulse max-md:p-[20px]"
                        >
                            <div class="h-[24px] w-1/2 rounded bg-brand-light-gray"></div>
                            <div class="h-[18px] w-1/3 rounded bg-brand-light-gray mt-[12px]"></div>
                            <div class="h-[14px] w-full rounded bg-brand-light-gray mt-[20px]"></div>
                            <div class="h-[14px] w-4/5 rounded bg-brand-light-gray mt-[8px]"></div>
                        </div>
                    </div>

                    <CommentsList
                        v-else
                        :comments="comments"
                    />
                </section>
            </template>
        </section>
    </main>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import Loader from '@/components/Loader.vue'
import CommentsList from '@/components/Posts/CommentsList.vue'

const route = useRoute()
const { t } = useI18n()
const post = ref(null)
const isPostLoading = ref(true)
const isCommentsLoading = ref(true)
const error = ref('')
const comments = ref([])
const commentsError = ref('')

const fetchPost = async () => {
    isPostLoading.value = true
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
        throw err
    }  finally {
        isPostLoading.value = false
    }
}

const fetchComments = async () => {
    isCommentsLoading.value = true
    commentsError.value = ''

    try {
        // await new Promise(resolve => setTimeout(resolve, 3000))

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments`
        )

        if (!response.ok) {
            throw new Error('Failed to load comments')
        }

        comments.value = await response.json()
    } catch (err) {
        commentsError.value = t('posts.commentsError')
        throw err
    }  finally {
        isCommentsLoading.value = false
    }
}
const fetchData = async () => {
    await Promise.allSettled([
        fetchPost(),
        fetchComments()
    ])
}

watch(
    () => route.params.id,
    () => {
        fetchData()
    },
    { immediate: true }
)
</script>