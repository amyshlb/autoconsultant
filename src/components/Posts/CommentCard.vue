<template>
    <article
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
</template>

<script setup>
defineProps({
    comment: {
        type: Object,
        required: true
    }
})
</script>