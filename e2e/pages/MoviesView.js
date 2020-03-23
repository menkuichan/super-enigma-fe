const regeneratorRuntime = require('@babel/runtime/regenerator');

export class MoviesView {
  constructor(page) {
    this.page = page;
    this.moviesURL = 'http://localhost:8888/movies';
    this.selectors = {
      movieCardSelector: '[data-testid="movieCard"]',
      searchItemSelector: '[data-testid="searchItem"]',
      noResultsSelector: '[data-testid="noResults"]',
      searchInputSelector: '[data-testid="searchInput"]',
    };
  }

  async goTo() {
    await this.page.goto(this.moviesURL);
  }

  async getSearchItems() {
    await this.page.waitForSelector(this.selectors.searchItemSelector);
    const searchItems = await this.page.$$(this.selectors.searchItemSelector);
    return searchItems;
  }

  async getSearchItem() {
    const searchItem = await this.page.$(this.selectors.searchItemSelector);
    return searchItem;
  }

  async getMovieCard() {
    await this.page.waitForSelector(this.selectors.movieCardSelector);
    const movieCard = await this.page.$$(this.selectors.movieCardSelector);
    return movieCard;
  }

  async getNoResults() {
    await this.page.waitForSelector(this.selectors.noResultsSelector);
    const noResults = await this.page.$(this.selectors.noResultsSelector);
    return noResults;
  }

  async enterPress() {
    await this.page.keyboard.press('Enter');
  }

  async search(value) {
    await this.page.waitForSelector(this.selectors.searchInputSelector);
    const searchInput = await this.page.$(this.selectors.searchInputSelector);
    await searchInput.tap();
    await searchInput.type(value);
  }
}
