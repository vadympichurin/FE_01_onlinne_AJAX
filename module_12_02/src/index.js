/*
 * - Пагинация
 * - страница и кол-во на странице
 * - Загружаем статьи при сабмите формы
 * - Загружаем статьи при нажатии на кнопку «Загрузить еще»
 * - Обновляем страницу в параметрах запроса
 * - Рисуем статьи
 * - Сброс значения при поиске по новому критерию
 *
 * https://newsapi.org/
 * 4330ebfabc654a6992c2aa792f3173a3
 * http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 */

import './css/common.css';
import NewsApiService from './js/news-service';
import articlesTemplates from './templates/articles.hbs';
import LoadMoreBtn from './js/components/load-more-btn';

const newsApiService = new NewsApiService();
const loadBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});


const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};

refs.searchForm.addEventListener('submit', onSearch);
loadBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();

  newsApiService.query = event.currentTarget.elements.query.value;
  loadBtn.show();
  newsApiService.resetPage();
  clearArticlesContainer();
  fetchArticles();
}

function onLoadMore() {
  fetchArticles();
}

function fetchArticles() {
  loadBtn.disable();
  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadBtn.enable();
  });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML(
    'beforeend',
    articlesTemplates(articles),
  );
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
