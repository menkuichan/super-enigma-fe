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
  const moviesErrors = [];

  test('loads correctly', async () => {
    await page.goto(moviesURL);
    await page.waitForSelector('[data-testid="movieCard"]');
    const movieCard = await page.$('[data-testid="movieCard"]');
    expect(movieCard).toBeTruthy();
  }, 10000);

  test('does not have exceptions', () => {
    page.on('pageerror', (error) => moviesErrors.push(error.text));
    expect(moviesErrors.length).toBe(0);
  });

  test('goes to next page correctly', async () => {
    await page.goto(moviesURL);
    await page.waitForSelector('[data-testid="nextPage"]');
    const nextPage = await page.$('[data-testid="nextPage"]');
    await nextPage.tap();
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
});

afterAll(() => {
  browser.close();
});
