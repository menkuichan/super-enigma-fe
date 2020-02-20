export const NAV_LINKS = [
  {
    title: 'Popular',
    filter: 'popularity.desc',
  },
  {
    title: 'Now playing',
    filter: 'release_date.desc',
  },
  {
    title: 'Upcoming',
    filter: 'release_date.desc',
  },
  {
    title: 'Most rated',
    filter: 'vote_count.desc',
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
export const EVENT_TYPE = {
  MOUSEDOWN: 'mousedown',
};
export const FIRST_PAGES_COUNT = 3;
export const LAST_PAGES_COUNT = 3;
export const ACTUAL_PAGES_COUNT = 3;
