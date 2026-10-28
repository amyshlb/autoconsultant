import { createI18n } from 'vue-i18n'

import ru from './locales/ru.json'
import en from './locales/en.json'
import kk from './locales/kk.json'

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('locale') || 'ru',
    fallbackLocale: 'ru',
    messages: {
        ru,
        en,
        kk
    }
})

export default i18n