'use strict';

const url = `https://pokeapi.co/api/v2/pokemon/`;
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonName = document.querySelector('.pokemon__name');
const buttonPrev = document.querySelector('.btn-backward');
const buttonNext = document.querySelector('.btn-forward');

const fetchPokemon = async (pokemon) => {
  const response = await fetch(`${url}${pokemon}`);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    alert('Oppps try it again');
  }
  console.log(data);
};
