'use strict';

let searchPokemon = [];
const url = `https://pokeapi.co/api/v2/pokemon/`;
const form = document.querySelector('.form');
const input = document.querySelector('.form__search');
const pokemonImage = document.querySelector('.pokemon__img');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonName = document.querySelector('.pokemon__name');
const btnBackward = document.querySelector('.btn-backward');
const btnFordward = document.querySelector('.btn-forward');

const getPokemonFromApi = async (pokemon) => {
  const response = await fetch(`${url}${pokemon}`);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    alert('¡Oppps try it again!');
  }
  console.log(data);
};

const renderPokemon = async (pokemon) => {
  const data = await getPokemonFromApi(pokemon);

  if (data) {
    pokemonImage.src = data.sprites.front_default;
    input.value = '';
    searchPokemon = data.id;
  }
};
form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

renderPokemon(searchPokemon);
