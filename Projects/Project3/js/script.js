"use strict";

/********************************************************************

Social Distancing Pick-up Lines
Project 3 - Nancy Savoie

A small program inspired by the current state of affairs (with hopes of lightening up moods and trying
to find a little something to smile about during these unprecedented times).
Mainly based on Assignment 4 and Project 2 (with mild influence from other class activities).

Images: Nancy Savoie and creative commons (Freepik).
Background Music: Royalty Free Music - Sexy and Romantic song for YouTube Videos (https://www.youtube.com/watch?v=qBOGf-qCDNg).

*********************************************************************/

// Load the background music and sound effect.
let music = new Audio("assets/sounds/backgroundMusic.mp3");
// The start screen <div>
let startscreen;
// The array of pickup lines available from data.json
let pickupLines;

$(document).ready(setup);

// Loads the data used use to get random pick lines using jQuery's .getJSON() function.
function setup() {
  $("#startscreen").one("click", off);
  $.getJSON("data/data.json") // Location of the file.
    .done(dataLoaded)
    .fail(dataError);
}

// Function gets called by JSON once loaded.
function dataLoaded(data) {
  console.log(data);
  pickupLines = data.pickupLines;
}

// This function is called if the JSON does not load and it reports the error to the console.
function dataError(request, text, error) {
  console.error(error);
}

// The pick up lines, gets a random line from the array in the JSON.
function showPickupLine() {
  let pickupLine = getRandomElement(pickupLines);
  $("body").text(pickupLine);
  responsiveVoice.speak(
    pickupLine,
    "UK English Male",
    { pitch: 0.3 },
    { rate: 0.5 }
  );
}

// Returns a random element from the pickuplines array.
function getRandomElement(array) {
  let element = array[Math.floor(Math.random() * array.length)];
  return element;
}

// This removes the start screen, plays the music and activates the responsive voice as well as new pickuplines when the mouse is clicked.
function off(e) {
  document.getElementById("startscreen").style.display = "none";
  music.play();
  showPickupLine();
  e.stopPropagation();
  $(document).click(showPickupLine);
}
