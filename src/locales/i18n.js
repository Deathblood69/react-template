import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './en/translation.json'
import fr from './fr/translation.json'
import {initReactI18next} from 'react-i18next'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'fr',
    fallbackLng: 'fr',
    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .then()
i18n.addResourceBundle('fr', 'translation', fr, true, true)
i18n.addResourceBundle('en', 'translation', en, true, true)
