<template>
    <main
        class="min-h-screen bg-brand-bg text-brand-dark px-[40px] pt-[28px] pb-[40px] max-md:px-[20px] max-md:pt-[20px]"
    >


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
                <PostCard
                    v-for="post in paginatedPosts"
                    :key="post.id"
                    :post="post"
                />
            
                <div
                    class="mt-[48px] flex items-center justify-center gap-[12px] max-md:gap-[6px]"
                >
                    <button
                        @click="goToPage(currentPage - 1)"
                        :disabled="currentPage === 1"
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

                        <button
                            v-else
                            @click="goToPage(page)"
                            class="w-[42px] h-[42px] rounded-[12px] font-semibold transition-colors max-md:w-[34px] max-md:h-[34px]"
                            :class="currentPage === page
                                ? 'bg-brand-green text-brand-dark'
                                : 'bg-brand-bg hover:bg-brand-light-gray'"
                        >
                            {{ page }}
                        </button>
                    </template>

                    <button
                        @click="goToPage(currentPage + 1)"
                        :disabled="currentPage === totalPages"
                        class="px-[16px] py-[10px] rounded-[12px] bg-brand-bg disabled:opacity-40 max-md:px-[10px]"
                    >
                        →
                    </button>
                </div>

            </div>
        </section>
    </main>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref, onMounted, computed } from 'vue'
import Loader from '@/components/Loader.vue'
import PostCard from '@/components/Posts/PostCard.vue'

const { t } = useI18n()
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

const currentPage = ref(1)
const postsPerPage = 10

const totalPages = computed(() => {
    return Math.ceil(posts.value.length / postsPerPage)
})

const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * postsPerPage
    const end = start + postsPerPage

    return posts.value.slice(start, end)
})
const visiblePages = computed(() => {
    if (totalPages.value <= 5) {
        return Array.from(
            { length: totalPages.value },
            (_, index) => index + 1
        )
    }

    if (currentPage.value <= 3) {
        return [1, 2, 3, '...', totalPages.value - 1, totalPages.value]
    }

    if (currentPage.value >= totalPages.value - 2) {
        return [1, 2, '...', totalPages.value - 2, totalPages.value - 1, totalPages.value]
    }

    return [
        1,
        '...',
        currentPage.value - 1,
        currentPage.value,
        currentPage.value + 1,
        '...',
        totalPages.value
    ]
})
const goToPage = (page) => {
        currentPage.value = page
}

onMounted(() => {
    fetchPosts()
})
</script>