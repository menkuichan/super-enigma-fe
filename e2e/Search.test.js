/* eslint-disable no-undef */
const puppeteer = require('puppeteer');
const regeneratorRuntime = require('@babel/runtime/regenerator');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
    slowMo: 0,
  });
  page = await browser.newPage();
});

describe('Search', () => {
  const moviesURL = 'http://localhost:8888/movies';
  const searchInputSelector = '[data-testid="searchInput"]';
  const movieCardSelector = '[data-testid="movieCard"]';
  const searchItemSelector = '[data-testid="searchItem"]';
  const noResultsSelector = '[data-testid="noResults"]';

  it('searches correctly with the correct search value', async () => {
    await page.goto(moviesURL);
    await page.waitForSelector(searchInputSelector);
    const searchInput = await page.$(searchInputSelector);
    await searchInput.tap();
    await searchInput.type('world');
    await page.keyboard.press('Enter');
    await page.waitForSelector(movieCardSelector);
    const movieCard = await page.$$(movieCardSelector);
    expect(movieCard.length).toBeGreaterThanOrEqual(1);
  }, 10000);

  it('searches correctly with invalid search value', async () => {
    await page.goto(moviesURL);
    await page.waitForSelector(searchInputSelector);
    const searchInput = await page.$(searchInputSelector);
    await searchInput.tap();
    await searchInput.type('vjmklolnjbvgfch');
    const searchItem = await page.$(searchItemSelector);
    expect(searchItem).toBeNull();
    await page.keyboard.press('Enter');
    await page.waitForSelector(noResultsSelector);
    const noResults = await page.$(noResultsSelector);
    expect(noResults).toBeTruthy();
  }, 10000);
});

afterAll(() => {
  browser.close();
});
