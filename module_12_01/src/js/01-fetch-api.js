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

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  // console.log(form);
  const searchQuery = form.elements.query.value;
  // console.log(searchQuery);
  fetchPokemon(searchQuery)
    .then(renderPokemon)
    .catch(error => console.log(error))
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

function fetchPokemon(pokemonId) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then(
    response => response.json(),
  );
}

function renderPokemon(pokemon) {
  const markup = pokemonCardTemplate(pokemon);
  refs.cardContainer.innerHTML = markup;
}
