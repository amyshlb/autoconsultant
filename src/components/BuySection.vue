<template>
    <section id="buy" class="buy-section relative w-full max-w-[1360px] min-h-[620px] bg-brand-black flex flex-col items-center justify-center overflow-hidden rounded-[54px] mx-auto px-4 max-md:w-[375px] max-md:h-[388px] max-md:min-h-0 max-md:rounded-[32px] max-md:px-0">        
        <div class="black-car absolute top-[-6px] left-[-8px] w-full h-full z-0 pointer-events-none translate-x-[5px] translate-y-[2px]">
        
        <img
            src="../assets/images/black-car-desktop.svg"
            alt="Черный автомобиль"
            class="w-full h-full object-contain max-md:hidden"
        >

        <img
            src="../assets/images/black-car-mobile.svg"
            alt="Черный автомобиль"
            class="hidden max-md:block max-md:w-full max-md:h-full max-md:object-contain"
        >

        </div>
        
        <h2 class="relative z-10 text-[80px] leading-[80px] font-extrabold text-brand-white text-center tracking-[-1px] w-full max-w-[1200px] translate-x-[4px] translate-y-[-8px] max-md:w-[335px] max-md:h-[108px] max-md:text-[35px] max-md:leading-[36px] max-md:max-w-none max-md:translate-x-0 max-md:translate-y-0">
            Ваш персональный <br>
            АвтоКонсультант в кармане
        </h2>
        
        <p class="relative z-10 text-[40px] leading-[48px] font-medium text-brand-white text-center tracking-[-1px] mt-[12px] translate-x-[35px] w-full max-md:hidden">
        Максимально комфортная и безопасная <br>
        эксплуатация автомобиля
        </p>

        <p class="hidden max-md:block relative z-10 w-[335px] h-[72px] text-[20px] leading-[24px] font-medium text-brand-white text-center tracking-[-1px]">
        напомнит когда пора менять масло или обновить срок действия автостраховки
        </p>

        <button class="relative z-10 w-[254px] h-[92px] bg-brand-green hover:opacity-90 text-brand-dark font-semibold text-[28px] rounded-[28px] shadow-sm translate-x-[4px] translate-y-[18px] transition-opacity duration-200 cursor-pointer flex items-center justify-center mt-[40px] max-md:w-[189px] max-md:h-[60px] max-md:text-[17px] max-md:rounded-[20px] max-md:mt-[40px] max-md:translate-x-0 max-md:translate-y-0">
        Купить
        </button>

    </section>
</template>
