<template>
    <DynamicScroller
        :items="comments"
        :min-item-size="160"
        :buffer="0"
        key-field="id"
        class="h-[600px] max-md:h-[420px]"
    >
        <template #default="{ item, active }">
            <DynamicScrollerItem
                :item="item"
                :active="active"
                class="pr-[10px] pb-[20px] max-md:pb-[14px]"
            >
                <CommentCard :comment="item" />
            </DynamicScrollerItem>
        </template>
    </DynamicScroller>
</template>

<script setup>
import { DynamicScroller, DynamicScrollerItem } from 'vue-virtual-scroller'
import CommentCard from '@/components/Posts/CommentCard.vue'

defineProps({
    comments: {
        type: Array,
        required: true
    }
})
</script>