const regeneratorRuntime = require('@babel/runtime/regenerator');

export class MovieDescription {
  constructor(page) {
    this.page = page;
    this.moviesURL = 'http://localhost:8888/movies/2';
    this.selectors = {
      movieInfoSelector: '[data-testid="movieInfo"]',
      similarMovieSelector: '[data-testid="similarMovie"]',
    };
    this.moviesErrors = [];
  }

  async goTo() {
    await this.page.goto(this.moviesURL);
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

  async getSimilarMovie() {
    await this.page.waitForSelector(this.selectors.similarMovieSelector);
    const similarMovie = await this.page.$(this.selectors.similarMovieSelector);
    return similarMovie;
  }
}
