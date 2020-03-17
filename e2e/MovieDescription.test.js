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
  await page.goto('http://localhost:8888/movies/2');
});

describe('On movie description page load ', () => {
  test('loads correctly', async () => {
    const movieInfo = await page.$('[data-testid="movieInfo"]');
    expect(movieInfo).toBeTruthy();
  }, 10000);
});

afterAll(() => {
  browser.close();
});
