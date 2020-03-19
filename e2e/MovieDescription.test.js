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

describe('MovieDescription page', () => {
  const movieURL = 'http://localhost:8888/movies/2';
  const similarMovieSelector = '[data-testid="similarMovie"]';
  const movieInfoSelector = '[data-testid="movieInfo"]';
  const movieErrors = [];

  it('loads correctly', async () => {
    await page.goto(movieURL);
    await page.waitForSelector(movieInfoSelector);
    const movieInfo = await page.$(movieInfoSelector);
    expect(movieInfo).toBeTruthy();
  }, 10000);

  it('does not have exceptions', () => {
    page.on('pageerror', (error) => movieErrors.push(error.text));
    expect(movieErrors.length).toBe(0);
  }, 10000);

  it('goes to similar movie correctly', async () => {
    await page.goto(movieURL);
    const similarMovie = await page.$(similarMovieSelector);
    if (!similarMovie) return;
    await page.waitForSelector(similarMovieSelector);
    await similarMovie.tap();
    await page.waitForSelector(movieInfoSelector);
    const movieInfo = await page.$(movieInfoSelector);
    expect(movieInfo).toBeTruthy();
  }, 10000);
});

afterAll(() => {
  browser.close();
});
