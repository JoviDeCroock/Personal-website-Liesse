import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      'siteDescription': 'Belgian engineering architect'
    }
  },
  nl: {
    translation: {
      'siteDescription': 'Belgische ingenieur architect'
    }
  },
  fr: {
    translation: {
      'siteDescription': "Architecte d'ingénierie belge"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: { escapeValue: false }
  });

  export default i18n;