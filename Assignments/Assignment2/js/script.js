"use strict";

/*****************

Raving Redactionist Redux
Assignment 2 - Nancy Savoie (Base code by Pippin Barr)

******************/

// The chance a span will be revealed per update
const REVEAL_POSSIBILITY = 0.1;
// How often to update the spans (potentially revealing them)
const UPDATE_FREQUENCY = 500;

// A place to store the jQuery selection of all spans
let $spans;
// Variables to track how many secrets were found
let secretsFound = 0;
let secretsTotal = 5;

// When the document is loaded we call the setup function
$(document).ready(setup);

// setup()
//
// Sets the click handler and starts the time loop
function setup() {
  // Save the selection of all spans (since we do stuff to them multiple times)
  $spans = $('span');
  // Set a click handler on the spans (so we know when they're clicked)
  $spans.on('click', spanClicked);
  // Set an interval of 500 milliseconds to update the state of the page
  setInterval(update, UPDATE_FREQUENCY);
  // Set the score display text
  $('#scoreDisplay').text("You found " + secretsFound + " out of " + secretsTotal + " secrets");
// Calculate the total number of secrets on the page
  secretsTotal = $('.secret').length;
  // Event for "mouseover" to all the secrets, tirggers The "secretsReveal" function
  $('.secret').on('mouseover', secretsReveal);
};

// spanClicked()
//
// When a span is clicked we remove its revealed class and add the redacted class
// thus blacking it out
function spanClicked() {
  $(this).removeClass('revealed');
  $(this).addClass('redacted');
}

// When the mouse goes over a secret, the found class, the secret, is highighted in yellow, thus revealed
function secretsReveal() {
  $(this).addClass('found'); // The CSS class "found"
  $('.found').off('mouseover'); // Removes the mouse over event from the found element after the secret is found
  secretsFound += 1; // Counter variable increased by one
  $('#scoreDisplay').text();
}
// update()
//
// Update is called every 500 milliseconds and it updates all the spans on the page
// using jQuery's each() function which calls the specified function on _each_ of the
// elements in the selection
function update() {
  $spans.each(updateSpan);
}

// updateSpan()
//
// With random chance it unblanks the current span by removing the
// redacted class and adding the revealed class. Because this function is called
// by each(), "this" refers to the current element that each has selected.
function updateSpan() {
  let r = Math.random();
  if (r < REVEAL_POSSIBILITY) {
    $(this).removeClass('redacted');
    $(this).addClass('revealed');
  }
}
