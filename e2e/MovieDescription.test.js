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

describe('On movies view page load', () => {
  const moviesURL = 'http://localhost:8888/movies';

  test('loads correctly', async () => {
    await page.goto(moviesURL);
    await page.waitForSelector('[data-testid="movieCard"]');
    const movieCard = await page.$('[data-testid="movieCard"]');
    expect(movieCard).toBeTruthy();
  }, 10000);

  test('goes to movie description page correctly', async () => {
    await page.goto(moviesURL);
    await page.waitForSelector('[data-testid="movieCard"]');
    const movieCard = await page.$('[data-testid="movieCard"]');
    await movieCard.tap();
    await page.waitForSelector('[data-testid="movieInfo"]');
    const movieInfo = await page.$('[data-testid="movieInfo"]');
    expect(movieInfo).toBeTruthy();
  }, 10000);

  test('searches correctly', async () => {
    await page.goto(moviesURL);
    await page.waitForSelector('[data-testid="searchInput"]');
    const searchInput = await page.$('[data-testid="searchInput"]');
    await searchInput.tap();
    await searchInput.type('world');
    await page.waitForSelector('[data-testid="searchItem"]');
    const searchItem = await page.$('[data-testid="searchItem"]');
    expect(searchItem).toBeTruthy();
  }, 10000);
});

describe('On movie description page load', () => {
  const movieURL = 'http://localhost:8888/movies/2';

  test('loads correctly', async () => {
    await page.goto(movieURL);
    await page.waitForSelector('[data-testid="movieInfo"]');
    const movieInfo = await page.$('[data-testid="movieInfo"]');
    expect(movieInfo).toBeTruthy();
  }, 10000);

  test('goes to similar movie correctly', async () => {
    await page.goto(movieURL);
    await page.waitForSelector('[data-testid="similarMovie"]');
    const similarMovie = await page.$('[data-testid="similarMovie"]');
    await similarMovie.tap();
    await page.waitForSelector('[data-testid="movieInfo"]');
    const movieInfo = await page.$('[data-testid="movieInfo"]');
    expect(movieInfo).toBeTruthy();
  }, 10000);
});

afterAll(() => {
  browser.close();
});
