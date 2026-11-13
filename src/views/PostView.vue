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
                    <div
                        v-if="!isCommentsLoading && !commentsError && totalCommentPages > 1"
                        class="mt-[48px] flex items-center justify-center gap-[12px] max-md:gap-[6px]"
                    >
                        <button
                            @click="goToCommentPage(commentsCurrentPage - 1)"
                            :disabled="commentsCurrentPage === 1"
                            class="px-[16px] py-[10px] rounded-[12px] bg-brand-bg disabled:opacity-40 max-md:px-[10px]"
                        >
                            ←
                        </button>

                        <template
                            v-for="(page, index) in visiblePages"
                            :key="index"
                        >
                            <span
                                v-if="page === '...'"
                                class="flex items-center justify-center w-[24px]"
                            >
                                ...
                            </span>

                            <a
                                v-else
                                :href="router.resolve({ 
                                    query: { 
                                        ...route.query, 
                                        commentsPage: page 
                                    } 
                                }).href"
                                @click.prevent="goToCommentPage(page)"
                                class="w-[42px] h-[42px] rounded-[12px] font-semibold transition-colors flex items-center justify-center max-md:w-[34px] max-md:h-[34px]"
                                :class="commentsCurrentPage === page
                                    ? 'bg-brand-green text-brand-dark'
                                    : 'bg-brand-bg hover:bg-brand-green hover:text-brand-dark'"
                            >
                                {{ page }}
                            </a>
                        </template>

                        <button
                            @click="goToCommentPage(commentsCurrentPage + 1)"
                            :disabled="commentsCurrentPage === totalCommentPages"
                            class="px-[16px] py-[10px] rounded-[12px] bg-brand-bg disabled:opacity-40 max-md:px-[10px]"
                        >
                            →
                        </button>
                    </div>
                </section>
            </template>
        </section>
    </main>
</template>
<script setup>
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import Loader from '@/components/Default/Loader.vue'
import CommentsList from '@/components/Posts/CommentsList.vue'
import api from '@/api/axios.js'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const post = ref(null)
const isPostLoading = ref(true)
const isCommentsLoading = ref(true)
const error = ref('')
const comments = ref([])

const commentsError = ref('')
const commentsCurrentPage = ref(1)
const totalComments = ref(0)

const commentsPerPage = 2

const totalCommentPages = computed(() => {
    return Math.ceil(totalComments.value / commentsPerPage)
})

const visiblePages = computed(() => {
    const pages = []
    const total = totalCommentPages.value
    const current = commentsCurrentPage.value

    if (total <= 5) {
        for (let i = 1; i <= total; i++) {
            pages.push(i)
        }
    } else {
        pages.push(1)

        if (current > 3) pages.push('...')

        for (
            let i = Math.max(2, current - 1);
            i <= Math.min(total - 1, current + 1);
            i++
        ) {
            pages.push(i)
        }

        if (current < total - 2) pages.push('...')

        pages.push(total)
    }

    return pages
})

const fetchPost = async () => {
    isPostLoading.value = true
    error.value = ''

    try {
        const response = await api.get(`/posts/${route.params.id}`)

        post.value = response.data
    } catch (err) {
        error.value = t('posts.postError')
        throw err
    }  finally {
        isPostLoading.value = false
    }
}


const fetchComments = async (page = commentsCurrentPage.value) => {
    isCommentsLoading.value = true
    commentsError.value = ''

    try {
        const response = await api.get(
            `/posts/${route.params.id}/comments`,
            {
                params: {
                    _page: page,
                    _limit: commentsPerPage
                }
            }
        )

        comments.value = response.data
        totalComments.value = Number(response.headers['x-total-count'])
        commentsCurrentPage.value = page
    } catch (err) {
        commentsError.value = t('posts.commentsError')
        throw err
    }  finally {
        isCommentsLoading.value = false
    }
}
const fetchData = async (page = 1) => {
    await Promise.allSettled([
        fetchPost(),
        fetchComments(page)
    ])
}

const goToCommentPage = (page) => {
    router.push({
        query: {
            ...route.query,
            page: page
        }
    })
}
watch(
    () => route.params.id,
    () => {
        const page = Number(route.query.page)

        fetchData(
            Number.isInteger(page) && page > 0
            ? page
            : 1
        )
    },
    { immediate: true }
)
watch(
    () => route.query.page,
    (page) => {
        const currentPage = Number(page)

        fetchComments(
            Number.isInteger(currentPage) && currentPage > 0
            ? currentPage
            : 1
        )
    }
)
</script>