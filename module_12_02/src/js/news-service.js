const API_KEY = '01b61f75267d43e69f7416bcb60a0a05';
const BASE_URL = 'https://newsapi.org/v2';
const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    return fetch(
      `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`,
      options,
    )
      .then(res => res.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      })
      .catch(console.log);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
