/* eslint-disable no-undef */
import { MoviesView } from './pages/MoviesView';

const puppeteer = require('puppeteer');

let browser;
let page;
let moviesViewPage;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 0,
  });
  page = await browser.newPage();
  moviesViewPage = new MoviesView(page);
});

describe('MoviesView page', () => {
  it('loads correctly', async () => {
    await moviesViewPage.goTo();
    const movieCards = await moviesViewPage.getMovieCards();
    expect(movieCards.length).toBeGreaterThanOrEqual(1);
  }, 10000);

  it('does not have exceptions', async () => {
    const moviesErrors = await moviesViewPage.getErrors();
    expect(moviesErrors.length).toBe(0);
  });

  it('goes to next page correctly', async () => {
    await moviesViewPage.goTo();
    const firstActivePage = await moviesViewPage.getActivePage();
    await moviesViewPage.goToNextPage();
    const secondActivePage = await moviesViewPage.getActivePage();
    expect(secondActivePage).toBeGreaterThan(firstActivePage);
  }, 10000);

  it('goes to movie description page correctly', async () => {
    await moviesViewPage.goTo();
    await moviesViewPage.goToMovieCard();
    const movieInfo = await moviesViewPage.getMovieInfo();
    const currentUrl = await moviesViewPage.getUrl();
    expect(/http:\/\/localhost:8888\/movies\/\d+$/.test(currentUrl)).toBeTruthy();
    expect(movieInfo).toBeTruthy();
  }, 10000);

  it('searches correctly with the correct search value', async () => {
    await moviesViewPage.goTo();
    await moviesViewPage.search('world');
    const searchItems = await moviesViewPage.getSearchItems();
    expect(searchItems.length).toBeGreaterThanOrEqual(1);
    await moviesViewPage.enterPress();
    const movieCard = await moviesViewPage.getMovieCards();
    expect(movieCard.length).toBeGreaterThanOrEqual(1);
  }, 10000);

  it('searches correctly with invalid search value', async () => {
    await moviesViewPage.goTo();
    await moviesViewPage.search('vjmklolnjbvgfch');
    const searchItem = await moviesViewPage.getSearchItem();
    expect(searchItem).toBeNull();
    await moviesViewPage.enterPress();
    const noResults = await moviesViewPage.getNoResults();
    expect(noResults).toBeTruthy();
  }, 10000);
});

afterAll(() => {
  browser.close();
});
