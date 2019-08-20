import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import pt from './translations/pt.json';
import en from './translations/en.json';

const resources = {
  pt: {
    translation: pt,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt',
  });

export default i18n;
