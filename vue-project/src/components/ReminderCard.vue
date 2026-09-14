<template>
  <div class="flex flex-col items-center w-[606px]">
    
    <div class="box-card flex items-center justify-center w-full h-[268px] bg-[var(--color-brand-light-gray)] rounded-[52px] shadow-sm mb-[20px]">
      <img :src="getImageUrl(imageSrc)" :alt="title" class="max-h-[140px] object-contain">
    </div>

    <p class="text-[24px] leading-[32px] font-semibold text-[var(--color-brand-dark)] text-center tracking-tight">
      {{ title }}
    </p>

  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  }
});

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};
</script>
