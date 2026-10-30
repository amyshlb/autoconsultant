<template>
    <footer
        class="relative w-full max-w-[1360px] h-[258px] bg-brand-white rounded-t-[60px] shadow-sm flex items-start justify-between px-[92px] pt-[92px] box-border mx-auto text-brand-secondary-black max-md:w-full max-md:h-[220px] max-md:max-w-none max-md:rounded-t-[32px] max-md:px-0 max-md:pt-0"
    >
        <div
            class="flex items-center gap-[168px] max-md:absolute max-md:left-[20px] max-md:top-[40px] max-md:flex-col max-md:items-start max-md:gap-[32px]"
        >
            <a
                class="text-[24px] font-normal leading-normal tracking-[-1px] hover:opacity-80 transition-opacity cursor-pointer decoration-none translate-x-[-35px] translate-y-[5px] max-md:w-[250px] max-md:h-[20px] max-md:text-[16px] max-md:leading-[20px] max-md:translate-x-0"
            >
                {{ t('footer.agreement') }}
            </a>

            <a
                class="text-[24px] font-normal leading-normal tracking-[-1px] hover:opacity-80 transition-opacity cursor-pointer decoration-none translate-x-[-16px] translate-y-[5px] max-md:w-[179px] max-md:h-[20px] max-md:text-[16px] max-md:leading-[20px] max-md:translate-x-0"
            >
                {{ t('footer.support') }}
            </a>
        </div>

        <div
            class="flex flex-col items-end w-[400px] translate-x-[28px] translate-y-[5px] max-md:absolute max-md:left-[20px] max-md:top-[140px] max-md:w-auto max-md:translate-x-0 max-md:translate-y-0"
        >
            <span
                class="text-[24px] text-neutral-400 font-normal leading-normal max-md:w-[220px] max-md:h-[20px] max-md:text-[16px] max-md:leading-[20px] max-md:translate-x-0 max-md:translate-y-[-5px]"
            >
                {{ t('footer.developed') }}
            </span>

            <div
                class="flex items-center w-[162px] h-[38px] mt-[10px] max-md:w-[137px] max-md:h-[32px] max-md:mt-[8px] max-md:mr-[84px]"
            >
                <img
                    src="../assets/images/credits.svg"
                    class="w-full h-full object-contain"
                >
            </div>
        </div>
    </footer>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>