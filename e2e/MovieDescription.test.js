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

describe('On movie description page load', () => {
  const movieURL = 'http://localhost:8888/movies/2';
  const movieErrors = [];

  test('loads correctly', async () => {
    await page.goto(movieURL);
    await page.waitForSelector('[data-testid="movieInfo"]');
    const movieInfo = await page.$('[data-testid="movieInfo"]');
    expect(movieInfo).toBeTruthy();
  }, 10000);

  test('does not have exceptions', () => {
    page.on('pageerror', (error) => movieErrors.push(error.text));
    expect(movieErrors.length).toBe(0);
  });

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
