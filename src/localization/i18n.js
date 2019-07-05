import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      address: 'Address',
      belgium: 'Belgium',
      engineeringArchitecture: 'Architect Engineer',
      getInTouch: 'Get in touch',
      intro: "Liesse is cool m'kay",
      introTitle: 'About Liesse',
      phone: 'Phone',
      recentWork: 'Recent work',
      skills: 'Skills',
      siteDescription: 'Belgian engineering architect',
    }
  },
  nl: {
    translation: {
      address: 'Adres',
      belgium: 'België',
      engineeringArchitecture: 'Architect Ingenieur',
      getInTouch: 'Neem contact op',
      intro: "Liesse is cool m'kay",
      introTitle: 'Over Liesse',
      phone: 'Telefoon',
      recentWork: 'Recent werk',
      skills: 'Vaardigheden',
      siteDescription: 'Belgische ingenieur architect',
    }
  },
  fr: {
    translation: {
      address: 'Adresse',
      belgium: 'Belgique',
      engineeringArchitecture: 'Ingénieur Architecte',
      getInTouch: 'Entrer en contact',
      intro: "Liesse est cool m'kay",
      introTitle: 'À propos de Liesse',
      phone: 'Téléphone',
      recentWork: 'Travail récent',
      skills: 'Compétences',
      siteDescription: "Architecte d'ingénierie belge",
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