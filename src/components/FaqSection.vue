<template>
  <div id="faq" class="w-full flex flex-col items-center pt-[92px] px-10 box-border max-md:w-[375px] max-md:min-h-[544px] max-md:h-auto max-md:px-0 max-md:pt-[40px] max-md:rounded-[32px]">
      <h1 class="text-[128px] leading-[128px] font-extrabold text-center tracking-[-1px] mb-[60px] w-full text-brand-dark translate-x-[-5px] translate-y-[10px] max-md:w-[331px] max-md:h-[72px] max-md:text-[38px] max-md:leading-[36px] max-md:mb-[40px] max-md:translate-x-0 max-md:translate-y-0">
      Вопросы и ответы
    </h1>
    
    <div class="w-full max-w-[1204px] min-h-[340px] bg-brand-bg rounded-[40px] pt-12 pb-6 px-10 flex flex-col box-border mx-auto translate-y-[8px] max-md:w-[335px] max-md:h-auto max-md:min-h-[352px] max-md:rounded-[24px] max-md:pt-[32px] max-md:pr-[16px] max-md:pb-[32px] max-md:pl-[16px] max-md:translate-y-0">
      <div v-for="(item, index) in faqList" :key="index" class="w-full flex flex-col border-b border-brand-grayish pb-[16px] mb-[26px]">
        
        <button type="button" @click="toggleAccordion(index)"class="w-full flex items-center justify-between text-left font-regular text-[32px] leading-[38px] text-brand-dark  transition-colors duration-200 cursor-pointer group translate-y-[10px] max-md:text-[20px] max-md:leading-[24px] max-md:translate-y-0">
          <span class="pr-6">{{ item.question }}</span>

      <div
        class="w-[38px] h-[38px] rounded-full bg-brand-green flex items-center justify-center shrink-0 relative mr-2"
        :class="{ 'bg-brand-dark': activeIndex === index }"
      >
        <div
          class="absolute left-[12px] top-[12px] w-[14px] h-[14px] transition-transform duration-300"
          :class="{ 'rotate-45': activeIndex === index }"
        >
          <span
            class="absolute left-0 top-1/2 w-[14px] h-[3px] bg-brand-dark  -translate-y-1/2"
          ></span>

          <span
            class="absolute left-1/2 top-0 w-[3px] h-[14px] bg-brand-dark  -translate-x-1/2"
          ></span>
        </div>
      </div>
        </button>

        <div class="grid transition-all duration-300 ease-in-out"
          :class="activeIndex === index ? 'grid-rows-[1fr] mt-4 max-md:mt-[12px] opacity-100' : 'grid-rows-[0fr] opacity-0'">
          <div class="overflow-hidden">
            <p class="text-body text-[24px] leading-relaxed pb-2 pr-16 text-brand-dark max-md:w-[241px] max-md:text-[16px] max-md:leading-[20px] max-md:font-normal max-md:tracking-[-1%] max-md:pr-0 max-md:pb-0">
              {{ item.answer }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref(null)

const toggleAccordion = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqList = ref([
  {
    question: 'Можно ли вернуть деньги если передумал?',
    answer: 'Да, вы можете вернуть средства в течение 14 дней с момента оплаты, если вы еще не пользовались услугами бота.'
  },
  {
    question: 'Какие дополнительные функции планируете добавить?',
    answer: 'В будущем появится интеграция с СТО и автомагазинами, учет расходов на топливо, а также проверка и оплата штрафов прямо через интерфейс бота.'
  },
  {
    question: 'Как работает бот?',
    answer: 'Вы добавляете машину в раздел «Мой гараж», бот рассчитывает график обслуживания и присылает напоминания, когда пора менять масло или проходить техосмотр.'
  }
])
</script>
