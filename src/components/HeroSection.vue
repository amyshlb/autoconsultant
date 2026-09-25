<template>
  <section class="hero-section w-full bg-brand-white text-brand-dark select-none box-border flex flex-col max-md:rounded-[32px]">
    
    <div class="top-row relative flex flex-nowrap justify-between items-start pt-[36px] pl-[56px] pr-[56px] pb-[60px] w-full max-w-[1440px] mx-auto box-border max-md:flex-col max-md:px-[36px]">
      
      <div class="flex flex-col justify-start items-start pt-[20px] w-[769px] shrink-0 max-md:w-full max-md:pt-0">
        
        <h1 class="font-extrabold text-[128px] leading-[120px] tracking-[-1px] mb-[36px] max-md:mx-[-20px] max-md:text-[38px] max-md:leading-[36px]">
          Автоконсультант <br>
          в вашем смартфоне
        </h1>
        <div class="hidden max-md:flex w-[112px] h-[37px] items-center justify-center bg-brand-blue text-brand-white font-bold text-[13px] rounded-[24px] whitespace-nowrap rotate-[5.17deg] translate-x-[180px] translate-y-[-100px] mb-[-50px]">
          телеграм-бот
        </div>
        

        <div class="relative w-full max-w-[769px] h-auto mb-[48px] max-md:max-w-full max-md:h-[150px] max-md:mx-[-20px]">
          <p class="text-[40px] leading-[48px] text-brand-gray font-medium tracking-[-1px] w-full max-w-[769px] max-md:w-[335px] max-md:h-[96px] max-md:text-[19px] max-md:leading-[24px]">
            <span class="max-md:hidden">
              Бот помогает следить за техническим <br>
              состоянием вашего автомобиля <br>
              и сообщит о необходимости <br>
              сервисного обслуживания
            </span>

            <span class="hidden max-md:block">
              Бот помогает следить за техническим <br>
              состоянием вашего автомобиля <br>
              и сообщит о необходимости 
              сервисного обслуживания
            </span>
            </p>

      <div class="rotated-phrase-container absolute left-[350px] w-[365px] bottom-[-46px] max-md:left-[100px] max-md:bottom-[20px] max-md:w-[175px] max-md:h-[50px] translate-x-[60px] translate-y-[-5px] max-md:translate-x-[50px] max-md:translate-y-0">
        <img src="../assets/images/phrase.svg" alt="и не только об этом" class="w-full h-full object-contain">
      </div>
        </div>

        <a href="#buy" class="w-[378px] h-[132px] bg-brand-green hover:opacity-90 text-brand-dark font-semibold text-[28px] rounded-[48px] shadow-sm transition-opacity duration-200 cursor-pointer flex items-center justify-center mt-[18px] max-md:w-[335px] max-md:h-[60px] max-md:mx-[-20px] max-md:rounded-[20px] max-md:text-[17px] max-md:mt-[-44px]">
          Хочу купить
        </a>

      </div>

      <div class="absolute top-[190px] left-[880px] w-[394px] h-[790px] z-20 max-md:static max-md:w-[267px] max-md:h-[535px] max-md:ml-[36px] max-md:mt-[32px]">        
        <div class="telegram-badge absolute top-[10px] left-[-180px] bg-brand-blue text-brand-white font-bold text-[28px] tracking-[-1px] px-[24px] py-[20px] rounded-[44px] shadow-md z-30 whitespace-nowrap max-md:hidden">
          телеграм-бот
        </div>
        
        <img src="../assets/images/phone.svg" alt="Телефон" class="w-full h-full object-contain relative z-20 max-md:mx-[-20px]">
        
      </div>
    </div>

     <div class="bottom-row w-full pt-[165px] pb-[56px] px-[40px] flex flex-col items-center box-border max-md:pt-[22px] max-md:pb-[40px]">
      <h2 class="text-[88px] leading-[88px] font-bold text-brand-dark text-center tracking-[-1px] mb-[40px] w-full max-md:w-[333px] max-md:text-[37px] max-md:leading-[36px] max-md:font-extrabold max-md:ml-[18px] max-md:mb-[32px]">
        Бот напомнит когда
      </h2>

      <div class="grid grid-cols-2 gap-x-[36px] gap-y-[36px] justify-center items-start w-full max-w-[1280px] translate-x-[10px] max-md:grid-cols-1 max-md:gap-y-[24px] max-md:w-[334px] max-md:translate-x-0">

        
        <ReminderCard title="необходимо заменить масло" imageSrc="oil.svg" imageClass="w-[250px] max-h-[115px] max-md:w-[156px] max-md:h-[70px] translate-x-[10px] max-md:translate-x-[-5px] translate-y-[-10px]" textClass="translate-x-[5px] translate-y-[5px]"/> 
        <ReminderCard title="пройти техосмотр" imageSrc="car.svg" imageClass="w-[286px] max-h-[174px] max-md:w-[158px] max-md:h-[96px] translate-x-[-5px] translate-y-[0px]" textClass="translate-x-[-10px] translate-y-[5px]"/>
        <ReminderCard title="продлить страховку" imageSrc="insurance.svg" imageClass="w-[212px] max-h-[182px] max-md:w-[112px] max-md:h-[96px] translate-x-[10px] translate-y-[5px]" textClass="translate-x-[8px] translate-y-[10px]"/>
        <ReminderCard title="и о многом другом" imageSrc="more.svg" imageClass="w-[550px] max-h-[192px] max-md:w-[378px] max-md:h-[106px] translate-x-[30px] translate-y-[0px]" textClass="translate-x-[-10px] translate-y-[10px]"/>

      </div>

    </div>


  </section>
</template>

<script setup>
import ReminderCard from './ReminderCard.vue';
</script>

<style lang="scss" scoped>
.telegram-badge{
  transform: rotate(5.17deg);
}
@media (max-width: 767px) {
  .rotated-phrase-container {
    transform: rotate(-4.50deg);
  }
}
</style>
