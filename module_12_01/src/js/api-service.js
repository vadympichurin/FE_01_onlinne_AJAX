
const URL = 'https://pokeapi.co/';

function fetchPokemon(pokemonId) {
    return fetch(`${URL}api/v2/pokemon/${pokemonId}`).then(
      response => response.json(),
    );
  }

export default {fetchPokemon};

