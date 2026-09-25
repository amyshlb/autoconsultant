<template>
  <div class="flex flex-col items-center w-[606px] max-md:w-[334px]">

    <div
      class="box-card flex items-center justify-center w-full h-[268px] max-md:h-[160px] bg-[var(--color-brand-light-gray)] rounded-[52px] max-md:rounded-[32px] shadow-sm mb-[15px] max-md:overflow-hidden"
    >

      <img
        :src="getImageUrl(imageSrc)"
        :alt="title"
        :class="[
          'object-contain transition-all',
          imageClass
        ]"
      />

    </div>

    <p :class="['text-[32px] leading-[40px] font-medium text-[var(--color-brand-gray)] text-center tracking-[-1px] max-md:text-[19px] max-md:leading-[24px]', textClass]">
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
  },
  imageClass: {
  type: String,
  default: 'max-h-[140px]'
  },
  textClass: {
  type: String,
  default: ''
  } 
});

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
};
</script>