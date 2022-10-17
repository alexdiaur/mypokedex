'use strict';

let initialPokemon = [];
let pokemon = [];
let favorites = [];

const url = `https://pokeapi.co/api/v2/pokemon/`;
const searchInput = document.querySelector('.js_searchInput');
const searchBtn = document.querySelector('.js_searchBtn');
const resetClear = document.getElementById('js_resetBtn');
const errorMsg = document.querySelector('.js_errorMsg');
const listBox = document.querySelector('.js_listBox');
const favsMenuBtn = document.querySelector('.js_showFavs');
const searchMenuBtn = document.querySelector('.js_showSearches');
const favoritesIcon = document.querySelector('.js_favsIcon');
const favsBox = document.querySelector('.js_favs');
const searchesIcon = document.querySelector('.js_searchesIcon');
const favsList = document.querySelector('.js_favsList');
const deleteFavsBtn = document.querySelector('.js_resetFavs');
const appNode = document.querySelector('.js_searchBox');
const searchList = document.querySelector('.js_searchList');
const searchTitle = document.querySelector('.js_searchTitle');

function getPokemons(e) {
  e.preventDefault();
  window
    .fetch(`${url}${searchInput.value.toLowerCase()}`)
    .then((response) => {
      if (response.status === 404) {
        alert('Upps, try again');
      } else {
        return response.json();
      }
    })
    .then((responseJSON) => {
      const allPokemons = [];

      const result = [];

      for (let pokemonInfo in responseJSON) {
        result.push([pokemonInfo, responseJSON[pokemonInfo]]);
      }
      console.table(result);
    });
}

function resetPokemons(e) {
  e.preventDefault();
  console.log('you reseted');
}

searchBtn.addEventListener('click', getPokemons);
searchBtn.addEventListener('touchstart', getPokemons);

resetClear.addEventListener('click', resetPokemons);
resetClear.addEventListener('touchstart', resetPokemons);

//# sourceMappingURL=main.js.map
