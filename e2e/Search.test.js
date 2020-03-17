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

afterAll(() => {
  browser.close();
});
