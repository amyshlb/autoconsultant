<template>
    <footer
        class="relative w-full max-w-[1360px] h-[258px] bg-brand-white rounded-t-[60px] shadow-sm flex items-start justify-between px-[92px] pt-[92px] box-border mx-auto text-brand-secondary-black max-md:w-full max-md:h-[160px] max-md:max-w-none max-md:rounded-t-[32px] max-md:px-0 max-md:pt-0"
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
    </footer>
</template>
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>