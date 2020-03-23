export const NAV_LINKS = [
  {
    title: 'Popular',
    filter: 'popularity.desc',
    value: 'popular',
  },
  {
    title: 'Upcoming',
    filter: 'release_date.desc',
    value: 'upcoming',
  },
  {
    title: 'Most rated',
    filter: 'vote_average.desc',
    value: 'mostRated',
  },
  {
    title: 'Most voted',
    filter: 'vote_count.desc',
    value: 'mostVoted',
  },
];
const PORT = 3000;
export const API_URL = `http://localhost:${PORT}`;
export const SEARCH_PARAMS = {
  REQUEST_PAGE: 1,
  REQUEST_PER_PAGE: 3,
};
export const MOVIES_PARAMS = {
  PER_PAGE: 20,
};
export const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';
export const SIMILAR_POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w154/';
export const EVENT_TYPE = {
  MOUSEDOWN: 'mousedown',
};
export const FIRST_PAGES_COUNT = 3;
export const LAST_PAGES_COUNT = 3;
export const ACTUAL_PAGES_COUNT = 3;
export const ENTER_KEY = 13;
