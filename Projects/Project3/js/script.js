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
// The pick-up lines variable
let pickupLines;

$(document).ready(setup);

function setup() {
// function setup() {
$.getJSON("data/data.json")
  .done(dataLoaded)
  .fail(dataError)
  responsiveVoice.speak()
  mouseClick()
  }

  // Function gets called by JSON once loaded.
function dataLoaded(data) {
  console.log(data);

  // The pick-up lines
  pickupLines = getRandomElement(data.pickupLines);
  console.log(pickupLines);
  }

  // The desription sentence with string.
    let description = `${pickupLines}`;
    $("body").append(description);

    // Calls onto the mousePressed function.
    //$("html").on("click", mousePressed);
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

$(document).one("click", mouseClick);

//Music plays after the user clicks the mouse for the first time.
//function mouseClick() {
//  music.play();
//}

// This removes the start screen.
function off() {
  document.getElementById("startscreen").style.display = "none";
}
