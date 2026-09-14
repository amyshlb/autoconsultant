<template>
  <section class="hero-section w-full bg-brand-white text-brand-dark select-none box-border flex flex-col">
    
    <div class="top-row flex flex-nowrap justify-between items-stretch pt-[92px] pl-[96px] pr-[40px] pb-[60px] w-full">
      
      <div class="flex flex-col justify-start items-start pt-[20px] w-[769px] shrink-0">
        
        <h1 class="font-extrabold text-[84px] leading-[0.95] tracking-tighter mb-[36px]">
          Автоконсультант <br>
          в вашем смартфоне
        </h1>

        <div class="relative w-full max-w-[700px] mb-[48px]">
          <p class="text-[20px] leading-[1.35] text-neutral-500 font-medium max-w-[520px]">
            Бот помогает следить за техническим состоянием 
            вашего автомобиля и сообщит о необходимости сервисного обслуживания
          </p>

          <div class="rotated-phrase-container absolute right-[20px] bottom-[-10px] w-[365px] h-[36px]">
            <img src="../assets/images/phrase.svg" alt="и не только об этом" class="w-full h-full object-contain">
          </div>
        </div>

        <button class="w-[280px] h-[76px] bg-brand-green hover:opacity-90 text-brand-dark font-bold text-[22px] rounded-[28px] shadow-sm transition-opacity duration-200 cursor-pointer flex items-center justify-center">
          Хочу купить
        </button>

      </div>

      <div class="relative flex justify-end items-start pr-[20px] shrink-0">
        <div class="relative w-[394px] h-[790px] mt-[-30px]">
          <div class="telegram-badge absolute top-[70px] left-[-70px] bg-brand-blue text-brand-white font-extrabold text-[16px] px-[24px] py-[10px] rounded-[24px] shadow-md z-30 whitespace-nowrap">
            телеграм-бот
          </div>
          <img src="../assets/images/phone.svg" alt="Телефон с ботом" class="w-full h-full object-contain relative z-20">
        </div>
      </div>

    </div>

     <div class="bottom-row w-full pt-[60px] pb-[92px] px-[40px] flex flex-col items-center box-border">
      
      <h2 class="text-[64px] font-bold text-brand-dark text-center tracking-tighter mb-[56px] w-full">
        Бот напомнит когда
      </h2>

      <div class="grid grid-cols-2 gap-x-[40px] gap-y-[48px] justify-center items-start w-full max-w-[1252px]">
        
        <ReminderCard 
          title="необходимо заменить масло" 
          imageSrc="oil.svg" 
        />

        <ReminderCard 
          title="пройти техосмотр" 
          imageSrc="car.svg" 
        />

        <ReminderCard 
          title="продлить страховку" 
          imageSrc="insurance.svg" 
        />

        <ReminderCard 
          title="и о многом другом" 
          imageSrc="more.svg" 
        />

      </div>

    </div>


  </section>
</template>

<script setup>
import ReminderCard from '../components/ReminderCard.vue';
</script>

<style lang="scss" scoped>
// .rotated-phrase-container {
//   transform: rotate(2.33deg);
// }

.telegram-badge {
  transform: rotate(5deg);
}
</style>
