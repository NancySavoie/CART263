"use strict";

/********************************************************************

Nancy Savoie
Assignment 4: Condiments Cacophony
Original code by Pippin Barr

*********************************************************************/

$(document).ready(setup);

function setup() {
  $.getJSON('data/data.json')
    .done(dataLoaded)
    .fail(dataError)
}

function dataLoaded(data) {
  console.log(data);
  let condiment = getRandomElement(data.condiments);
  console.log(condiment);
  let verb = 'is';
  if (condiment.charAt(condiment.length - 1) === 's') {
    verb = 'are';
  }
  console.log(verb);

  let cat = getRandomElement(data.cats);
  console.log(cat);

  let room = getRandomElement(data.rooms);
  console.log(room);

  let tea = getRandomElement(data.teas);
  console.log(tea);

  let teaArticle = 'a';
  if (tea.charAt(0).toLowerCase() === 'a' || tea.charAt(0).toLowerCase() === 'e' || tea.charAt(0).toLowerCase() === 'i' || tea.charAt(0).toLowerCase() === 'o' || tea.charAt(0).toLowerCase() === 'u') {
    teaArticle = 'an';
  }

  let fruit = getRandomElement(data.fruits);
  console.log(fruit);
  let description = `${condiment} ${verb} like a ${cat} in a ${room} smelling like ${fruit} in ${teaArticle} ${tea}.`;
  $('body').append(description);
  }

function dataError(request, text, error) {
  console.error(error);
}

function getRandomElement(array) {
let element = array[Math.floor(Math.random() * array.length)];
  return element;
}
