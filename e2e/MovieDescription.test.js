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
  test('loads correctly', async () => {
    await page.goto('http://localhost:8888/movies');
    await page.waitForSelector('[data-testid="movieCard"]');
    const movieInfo = await page.$('[data-testid="movieCard"]');
    expect(movieInfo).toBeTruthy();
  }, 10000);
});

describe('On movie description page load', () => {
  test('loads correctly', async () => {
    await page.goto('http://localhost:8888/movies/2');
    await page.waitForSelector('[data-testid="movieInfo"]');
    const movieInfo = await page.$('[data-testid="movieInfo"]');
    expect(movieInfo).toBeTruthy();
  }, 10000);
});

afterAll(() => {
  browser.close();
});
