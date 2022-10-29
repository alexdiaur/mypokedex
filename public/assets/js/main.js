'use strict';

let searchPokemon = 25;
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
};

const renderPokemon = async (pokemon) => {
  const data = await getPokemonFromApi(pokemon);

  if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data.sprites.other.dream_world.front_default;
    input.value = '';
    searchPokemon = data.id;
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

btnBackward.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

btnFordward.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);

//# sourceMappingURL=main.js.map
