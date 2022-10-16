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
