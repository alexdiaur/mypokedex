'use strict';

let initialPokemon = [];
let pokemon = [];
let favorites = [];

const searchText = document.querySelector('.js_searchText');
const searchBtn = document.querySelector('.js_searchBtn');
const errorMsg = document.querySelector('.js_errorMsg');
const listBox = document.querySelector('.js_listBox');
const favsMenuBtn = document.querySelector('.js_showFavs');
const searchMenuBtn = document.querySelector('.js_showSearches');
const favoritesIcon = document.querySelector('.js_favsIcon');
const favsBox = document.querySelector('.js_favs');
const searchesIcon = document.querySelector('.js_searchesIcon');
const favsList = document.querySelector('.js_favsList');
const deleteAllFavoritesButton = document.querySelector('.js_resetFavs');
const searchBox = document.querySelector('.js_searchBox');
const searchList = document.querySelector('.js_searchList');
const searchTitle = document.querySelector('.js_searchTitle');

function pokemonsFromApi() {
  const url_server = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;

  fetch(url_server)
    .then((response) => response.json())
    .then((data) => {
      const pokemons = data.drinks;

      initialPokemon = pokemons.map((item) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.back_default,
        };
      });

      // Función to generate a random number to sort the cocktails randomly
      const randomPokemon = () => Math.random() - 0.5;

      const randominitialPokemon = initialPokemon.sort(randomPokemon);

      const reducedRandominitialPokemon = randominitialPokemon.splice(7, 20);

      initialPokemon = reducedRandominitialPokemon;

      renderinitialPokemon();
      renderFavorites(favorites);

      searchTitle.innerHTML = 'Algunos cócteles';
    })
    .catch(() => {
      searchContainer.classList.add('hidden');

      deletePreviousQueries();
      deleteErrorMessage();

      errorMessage(
        'No lo intentes. Hazlo o no lo hagas. Pero en este caso inténtalo de nuevo por favor. Hemos tenido un problemilla momentáneo.',
        './assets/images/noTrys.jpg',
        'Yoda',
        'El imperio contrataca - Yoda enseñando a luke a usar la fuerza - "No lo intentes. Hazlo o no lo hagas. Pero no lo intentes."'
      );
    });
}
