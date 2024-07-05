import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import backend from 'i18next-http-backend'
import languageDetector from 'i18next-browser-languagedetector'

import uzLang from './languages/uz.json'
import enLang from './languages/en.json'
import ruLang from './languages/ru.json'

const language = localStorage.getItem('i18nextLng') || 'uz'

i18next
.use(backend)
.use(languageDetector)
.use(initReactI18next)
.init({
    defaultLang: 'uz',
    lang: language,
    debug: true,
    resources: {
        uz: {
            translation: uzLang
        },
        en: {
            translation: enLang
        },
        ru: {
            translation: ruLang
        }
    }
})

export default i18next