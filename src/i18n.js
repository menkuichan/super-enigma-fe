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
      search: {
        placeholder: 'Search films...',
        showAll: 'Show all...',
      },
      filter: {
        genres: 'Genres',
        rating: 'Rating',
        year: 'Year',
        reset: 'Reset',
        apply: 'Apply',
        sortBy: {
          label: 'Sort by',
          popularity: 'Popularity',
          releaseDate: 'Release date',
          originalTitle: 'Original title',
          voteAverage: 'Vote average',
          voteCount: 'Vote count',
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
      search: {
        placeholder: 'Найти фильмы...',
        showAll: 'Показать все...',
      },
      filter: {
        genres: 'Жанры',
        rating: 'Рейтинг',
        year: 'Год',
        reset: 'Сбросить',
        apply: 'Применить',
        sortBy: {
          label: 'Сортировать по',
          popularity: 'Популярности',
          releaseDate: 'Дате выхода',
          originalTitle: 'Названию',
          voteAverage: 'Оценке',
          voteCount: 'Количеству голосов',
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
