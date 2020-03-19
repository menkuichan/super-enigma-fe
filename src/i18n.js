import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    header: {
      labels: {
        popular: 'Popular',
        upcoming: 'Upcoming',
        mostrated: 'Most rated',
        mostVoted: 'Most voted',
      },
    },
  },
  ru: {
    header: {

      labels: {
        popular: 'Популярные',
        Upcoming: 'Ожидаемые',
        mostRated: 'Cамые рейтинговые',
        mostVoted: 'Наиболее оцененные',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
