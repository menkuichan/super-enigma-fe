/* eslint-disable no-undef */
import { Search } from './pages/Search';

const puppeteer = require('puppeteer');

let browser;
let page;
let searchPage;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 0,
  });
  page = await browser.newPage();
  searchPage = new Search(page);
});

describe('Search', () => {
  it('searches correctly with the correct search value', async () => {
    await searchPage.search('world');
    const searchItems = await searchPage.getSearchItems();
    expect(searchItems.length).toBeGreaterThanOrEqual(1);
    await searchPage.enterPress();
    const movieCard = await searchPage.getMovieCard();
    expect(movieCard.length).toBeGreaterThanOrEqual(1);
  }, 10000);

  it('searches correctly with invalid search value', async () => {
    await searchPage.search('vjmklolnjbvgfch');
    const searchItem = await searchPage.getSearchItem();
    expect(searchItem).toBeNull();
    await searchPage.enterPress();
    const noResults = await searchPage.getNoResults();
    expect(noResults).toBeTruthy();
  }, 10000);
});

afterAll(() => {
  browser.close();
});
