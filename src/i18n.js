import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        labels: {
          popular: 'Popular',
          upcoming: 'Upcoming',
          mostRated: 'Most rated',
          mostVoted: 'Most voted',
        },
      },
    },
  },
  ru: {
    translation: {
      header: {
        labels: {
          popular: 'Популярные',
          upcoming: 'Ожидаемые',
          mostRated: 'Cамые рейтинговые',
          mostVoted: 'Наиболее оцененные',
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    keySeparator: '.',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
