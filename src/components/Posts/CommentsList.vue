<template>
    <DynamicScroller
        :items="comments"
        :min-item-size="160"
        :buffer="0"
        key-field="id"
        class="h-[600px]"
    >
        <template #default="{ item, active }">
            <DynamicScrollerItem
                :item="item"
                :active="active"
                class="pb-[20px]"
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