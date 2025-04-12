import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import recourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { fallbackLng, languages, defaultNS } from './settings'

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(recourcesToBackend((language: string, namespace: string) => import(`./locales/${language}/${namespace}.json`)))
  .init({
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng: undefined, // let detect the language on the client side
    fallbackNS: defaultNS,
    defaultNS,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
    // ns: ['translation'],
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  })

export default i18next
