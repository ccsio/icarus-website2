import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'
import de from './locales/de.json'
import lb from './locales/lb.json'

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'en', // Default locale
  fallbackLocale: 'en',
  messages: {
    en,
    fr,
    de,
    lb
  },
})

export default i18n