"use strict";

/********************************************************************

Nancy Savoie
Assignment 4: Condiments Cacophony
Original code by Pippin Barr

*********************************************************************/

$(document).ready(setup);

// Loads the date used in the program.
function setup() {
  $.getJSON("data/data.json")
    .done(dataLoaded)
    .fail(dataError);
  $(document).one("click", mousePressed);
}

// Function gets called by JSON once loaded.
function dataLoaded(data) {
  console.log(data);

  // The condiments
  let condiment = getRandomElement(data.condiments);
  console.log(condiment);
  let verb = "is";
  if (condiment.charAt(condiment.length - 1) === "s") {
    verb = "are";
  }
  console.log(verb);

  // The cats
  let cat = getRandomElement(data.cats);
  console.log(cat);
  let catArticle = "a";
  if (
    cat.charAt(0).toLowerCase() === "a" ||
    cat.charAt(0).toLowerCase() === "e" ||
    cat.charAt(0).toLowerCase() === "i" ||
    cat.charAt(0).toLowerCase() === "o" ||
    cat.charAt(0).toLowerCase() === "u"
  ) {
    catArticle = "an";
  }

  // The rooms
  let room = getRandomElement(data.rooms);
  console.log(room);
  let roomArticle = "a";
  if (
    room.charAt(0).toLowerCase() === "a" ||
    room.charAt(0).toLowerCase() === "e" ||
    room.charAt(0).toLowerCase() === "i" ||
    room.charAt(0).toLowerCase() === "o" ||
    room.charAt(0).toLowerCase() === "u"
  ) {
    roomArticle = "an";
  }

  // The teas
  let tea = getRandomElement(data.teas);
  console.log(tea);
  let teaArticle = "a";
  if (
    tea.charAt(0).toLowerCase() === "a" ||
    tea.charAt(0).toLowerCase() === "e" ||
    tea.charAt(0).toLowerCase() === "i" ||
    tea.charAt(0).toLowerCase() === "o" ||
    tea.charAt(0).toLowerCase() === "u"
  ) {
    teaArticle = "an";
  }

  // The fruits
  let fruit = getRandomElement(data.fruits);
  console.log(fruit);
  let fruitArticle = "a";
  if (
    fruit.charAt(0).toLowerCase() === "a" ||
    fruit.charAt(0).toLowerCase() === "e" ||
    fruit.charAt(0).toLowerCase() === "i" ||
    fruit.charAt(0).toLowerCase() === "o" ||
    fruit.charAt(0).toLowerCase() === "u"
  ) {
    fruitArticle = "an";
  }

  // The desription sentence with string.
  let description = `${condiment} ${verb} like ${catArticle} ${cat} in ${roomArticle} ${room} smelling like ${fruitArticle} ${fruit} in ${teaArticle} ${tea}. It makes so much sense!`;
  $("body").append(description);

  // Calls onto the mousePressed function.
  $("html").on("click", mousePressed);
}

function dataError(request, text, error) {
  console.error(error);
}

function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

// Function mousePressed to reload the page when the mouse is clicked.
function mousePressed() {
  location.reload(true);
}
