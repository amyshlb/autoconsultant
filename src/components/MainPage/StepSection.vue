<template>
    <div
        id="how-it-works"
        class="w-full max-w-[1440px] mx-auto pt-[96px] pb-[100px] pl-[24px] px-[40px] flex flex-col items-center box-border max-md:px-0 max-md:pt-[40px] max-md:pb-[48px]"
    >

        <h1
            class="text-[128px] font-extrabold leading-[120px] tracking-[-1px] mb-[60px] translate-x-[30px] translate-y-[5px] max-md:w-[335px] max-md:px-[20px] max-md:text-[36px] max-md:leading-[36px] max-md:mb-[32px] max-md:translate-x-0"
        >
            {{ t('step.title') }}
        </h1>

        <div
            class="flex flex-col gap-[24px] w-full max-w-[1248px] mx-auto max-md:w-full max-md:px-[20px] max-md:box-border"
        >

            <div
                class="relative flex items-start justify-between w-full h-[430px] bg-brand-light-gray rounded-[52px] pl-[40px] pr-[80px] shadow-sm overflow-hidden max-md:h-[416px] max-md:rounded-[40px] max-md:p-0"
            >
                <div
                    class="flex flex-col items-start max-w-[566px] pt-[40px] translate-x-[5px] translate-y-[10px] max-md:w-full max-md:max-w-none max-md:pt-[24px] max-md:px-[24px]"
                >
                    <span
                        class="w-[72px] h-[72px] bg-brand-green text-brand-dark font-medium text-[32px] tracking-[-1px] rounded-full flex items-center justify-center mb-[36px] max-md:w-[52px] max-md:h-[52px] max-md:text-[20px] max-md:mb-[20px]"
                    >
                        01
                    </span>

                    <p
                        class="text-[40px] leading-[48px] tracking-[-1px] font-medium text-brand-gray translate-x-[5px] translate-y-[5px] max-md:w-[283px] max-md:text-[20px] max-md:leading-[24px]"
                    >
                        <span class="whitespace-pre-line">
                            {{ t('step.step-1') }}
                        </span>
                    </p>
                </div>

                <div
                    class="h-full flex items-center justify-end mr-[-88px] mt-[15px] self-center max-md:absolute max-md:top-[172px] max-md:left-[24px] max-md:w-[362px] max-md:h-[212px] max-md:mr-0"
                >
                    <img
                        :src="serviceDataImage"
                        :alt="t('step.step-1-alt')"
                        class="max-h-[350px] object-contain max-md:w-[362px] max-md:h-[212px]"
                    >
                </div>
            </div>

            <div
                class="relative flex items-start justify-between w-full h-[430px] bg-brand-light-gray rounded-[52px] pl-[40px] pr-[80px] shadow-sm overflow-hidden max-md:h-[380px] max-md:rounded-[40px] max-md:p-0"
            >
                <div
                    class="flex flex-col items-start max-w-[566px] pt-[40px] translate-x-[5px] translate-y-[10px] max-md:w-full max-md:max-w-none max-md:pt-[24px] max-md:px-[24px]"
                >
                    <span
                        class="w-[72px] h-[72px] bg-brand-green text-brand-dark font-medium text-[32px] tracking-[-1px] rounded-full flex items-center justify-center mb-[36px] max-md:w-[52px] max-md:h-[52px] max-md:text-[20px] max-md:mb-[20px]"
                    >
                        02
                    </span>

                    <p
                        class="text-[40px] leading-[48px] tracking-[-1px] font-medium text-brand-gray translate-x-[5px] translate-y-[5px] max-md:w-[283px] max-md:text-[20px] max-md:leading-[24px]"
                    >
                        <span class="whitespace-pre-line">
                            {{ t('step.step-2') }}
                        </span>
                    </p>
                </div>

                <div
                    class="h-full flex items-center justify-end mr-[-22px] mt-[15px] self-center max-md:absolute max-md:top-[172px] max-md:left-[24px] max-md:w-[287px] max-md:h-[157px] max-md:mr-0"
                >
                    <img
                        src="@/assets/images/drive.svg"
                        :alt="t('step.step-2-alt')"
                        class="max-h-[300px] object-contain max-md:w-[287px] max-md:h-[157px]"
                    >
                </div>
            </div>

            <div
                class="relative flex items-start justify-between w-full h-[430px] bg-brand-light-gray rounded-[52px] pl-[40px] pr-[80px] shadow-sm overflow-hidden max-md:h-[472px] max-md:rounded-[40px] max-md:p-0"
            >
                <div
                    class="flex flex-col items-start max-w-[566px] pt-[40px] translate-x-[5px] translate-y-[10px] max-md:w-full max-md:max-w-none max-md:pt-[24px] max-md:px-[24px]"
                >
                    <span
                        class="w-[72px] h-[72px] bg-brand-green text-brand-dark font-medium text-[32px] tracking-[-1px] rounded-full flex items-center justify-center mb-[36px] max-md:w-[52px] max-md:h-[52px] max-md:text-[20px] max-md:mb-[20px]"
                    >
                        03
                    </span>

                    <p
                        class="text-[40px] leading-[48px] tracking-[-1px] font-medium text-brand-gray translate-x-[5px] translate-y-[5px] max-md:w-[283px] max-md:text-[20px] max-md:leading-[24px]"
                    >
                        <span class="whitespace-pre-line">
                            {{ t('step.step-3') }}
                        </span>
                    </p>
                </div>

                <div
                    class="h-full flex items-center justify-end mr-[88px] mt-[30px] self-center max-md:absolute max-md:top-[220px] max-md:left-[65px] max-md:w-[202px] max-md:h-[231px] max-md:mr-0 max-md:mt-0"
                >
                    <img
                        :src="handImage"
                        :alt="t('step.step-3-alt')"
                        class="max-h-[360px] object-contain max-md:w-[202px] max-md:h-[231px]"
                    >
                </div>
            </div>

            <div
                class="relative w-full max-w-[1248px] h-[702px] bg-brand-light-gray rounded-[52px] mx-auto mt-[36px] mb-[-56px] shadow-sm overflow-hidden max-md:w-full max-md:h-[184px] max-md:rounded-[24px] max-md:mt-[16px] max-md:mb-0"
            >
                <iframe
                    class="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/mA9HZEJfmGw?si=wZcaP7z5RECIk5Sl"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import serviceDataRu from '@/assets/images/service-data-ru.svg';
import serviceDataEn from '@/assets/images/service-data-en.svg';
import serviceDataKk from '@/assets/images/service-data-kk.svg';
import handRu from '@/assets/images/hand-ru.svg';
import handEn from '@/assets/images/hand-en.svg';
import handKk from '@/assets/images/hand-kk.svg';

const { t, locale } = useI18n();
const serviceDataImage = computed<string>(() => {
    if (locale.value === 'kk') return serviceDataKk;
    if (locale.value === 'en') return serviceDataEn;

    return serviceDataRu;
});
const handImage = computed<string>(() => {
    if (locale.value === 'kk') return handKk;
    if (locale.value === 'en') return handEn;

    return handRu;
});
</script>