/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

import '../css/common.css';
import pokemonCardTemplate from '../templates/pokemon-card.hbs';
import API from './api-service';
import getRefs from './refs';

// console.log('getRefs : ', getRefs);

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  // console.log(form);
  const searchQuery = form.elements.query.value;
  // console.log(searchQuery);
  API.fetchPokemon(searchQuery)
    .then(renderPokemon)
    .catch(error => onError(error))
    .finally(() => form.reset());
}

// fetch('https://pokeapi.co/api/v2/pokemon/2')
//   .then(response => response.json())
//   .then(pokemon => {
//     const markup = pokemonCardTemplate(pokemon);
//     refs.cardContainer.innerHTML = markup;
//   })
//   .catch(error => {
//     console.log('This is CATCH!!!');
//     console.dir(error);
//   });

// Best way to implement fetch

function renderPokemon(pokemon) {
  const markup = pokemonCardTemplate(pokemon);
  refs.cardContainer.innerHTML = markup;
}

function onError(error) {
  console.dir(error);
  console.error('Невірний запит, такого немає на сайті!');
}

// ========================================

// fetch('https://pokeapi.co/api/v2/pokemon?limit=30')
//   .then(r => r.json())
//   .then(console.log);

// 'https://pokeapi.co/api/v2/pokemon?імя=значення&імя=значення'

// fetch('https://pixabay.com/api?key=22967856-19c9b377e326e636a6dabb7ea&q=dog&orientation=vertical')
//   .then(res => res.json())
//   .then(console.log);

const API_KEY_NEWS = '01b61f75267d43e69f7416bcb60a0a05';
const url = `https://newsapi.org/v2/everything?q=tesla&from=2021-07-17&sortBy=publishedAt`;

const options = {
  headers: {
    Authorization: API_KEY_NEWS,
  },
};

fetch(url, options)
  .then(res => res.json())
  .then(console.log);

//==============

fetch(
  'http://api.weatherstack.com/current?access_key=40cfd7afeb1f8ca9c204cf702a91978a&query=New York',
)
  .then(r => r.json())
  .then(console.log);
