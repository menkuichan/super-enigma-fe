/* eslint-disable no-undef */
import { MovieDescription } from './pages/MovieDescription';

const puppeteer = require('puppeteer');

let browser;
let page;
let movieDescription;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 0,
  });
  page = await browser.newPage();
  movieDescription = new MovieDescription(page);
});

describe('MovieDescription page', () => {
  it('loads correctly', async () => {
    await movieDescription.goTo();
    const movieInfo = await movieDescription.getMovieInfo();
    expect(movieInfo).toBeTruthy();
  }, 10000);

  it('does not have exceptions', async () => {
    const moviesErrors = await movieDescription.getErrors();
    expect(moviesErrors.length).toBe(0);
  });

  it('goes to similar movie correctly', async () => {
    await movieDescription.goTo();
    const similarMovie = await movieDescription.getSimilarMovie();
    if (!similarMovie) return;
    await similarMovie.tap();
    const movieInfo = await movieDescription.getMovieInfo();
    expect(movieInfo).toBeTruthy();
  }, 10000);
});

afterAll(() => {
  browser.close();
});
