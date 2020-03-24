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
      activePageSelector: '[data-testid="active"]',
      nextPageSelector: '[data-testid="nextPage"]',
      movieInfoSelector: '[data-testid="movieInfo"]',
    };
    this.moviesErrors = [];
  }

  async goTo() {
    await this.page.goto(this.moviesURL);
  }

  async goToNextPage() {
    await this.page.waitForSelector(this.selectors.nextPageSelector);
    const nextPage = await this.page.$(this.selectors.nextPageSelector);
    await nextPage.tap();
  }

  async goToMovieCard() {
    await this.page.waitForSelector(this.selectors.movieCardSelector);
    const movieCard = await this.page.$(this.selectors.movieCardSelector);
    await movieCard.tap();
  }

  async getUrl() {
    return this.page.url();
  }

  async getErrors() {
    await this.page.on('pageerror', (error) => this.moviesErrors.push(error.text));
    return this.moviesErrors;
  }

  async getMovieInfo() {
    await this.page.waitForSelector(this.selectors.movieInfoSelector);
    const movieInfo = await this.page.$(this.selectors.movieInfoSelector);
    return movieInfo;
  }

  async getActivePage() {
    await this.page.waitForSelector(this.selectors.activePageSelector);
    const activePage = await this.page.$eval(
      this.selectors.activePageSelector,
      (el) => +el.textContent,
    );
    return activePage;
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

  async getMovieCards() {
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
