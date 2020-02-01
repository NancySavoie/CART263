"use strict";

/********************************************************************

Trivial Sisyphean Struggle
Project 1 - Nancy Savoie

An unachievable goal orientated game remenescing of a Sisyphean task.

Inspired by class exercises and examples (Mainly "Eat Up" and "Endless Dialogs").
Images: Nancy Savoie and creative commons (Vecteezy & Freepik).
Music: Greek Balcanic Instrumental Music - Bouzouki and Guitar (YouTube).

*********************************************************************/

// The initial wait time for the fist window popup.
const INITIAL_DIALOG_DELAY = 2000;
// Constants determining the wait time before a new dialog popup window comes up.
const MIN_DIALOG_DELAY_TIME = 50000;
const MAX_DIALOG_DELAY_TIME = 500000;

// An array of questions to frustratre the player.
let questions = [
  "Place the right vase on the according column - Can you really do this?",
  "Place the right vase on the according column - Are you ready to give up yet?",
  "Place the right vase on the according column - Sisyphus wouldn't quit.",
  "Place the right vase on the according column - Are you trying hard enough?",
  "Place the right vase on the according column - Working hard or hardly working?",
  "Place the right vase on the according column - You call this working?",
];

// Load our disco Beethoven into a variable
let music = new Audio('assets/sounds/backgroundMusic.mp3');

// Tracking of the mouse movements to initiate new dialog popup.
const MAX_MOUSE_MOVES = 2000;
let mouseMoves = 0;

$(document).ready(setup);

function setup() {

  if (mouseMoved) {
    music.play;
  }

  // Calls the mouseMoved function when mouse is moved.
  $(document).on('mousemove', mouseMoved);
  // Add a popup dialog after set amount of time.
  setTimeout(addDialog, INITIAL_DIALOG_DELAY);
}

// Tracking of mouse movement by player on page.
function mouseMoved() {
  mouseMoves++;
  // Check if it goes beyond the set maximum.
  if (mouseMoves > MAX_MOUSE_MOVES) {
    // If it does, dialog is added.
    addDialog();
    // Counter reset.
    mouseMoves = 0;
  }
}

// Randomly adds dialog to page.
function addDialog() {

  // Creates a div to store variables.
  let $dialog = $(`<div></div>`).attr(`title`, `Question`);
  // Choose a random question text from the array
  let question = questions[Math.floor(randomInRange(0, questions.length))];
  // Add a p tag to the dialog div that contains the question text
  $dialog.append(`<p>${question}</p>`);
  // Finally, add the div to the page
  $('body').append($dialog);

// The music starts with first popup
  handleMusic();

  // Transforms div into dialog with help from jQuery UI's.dialog() (https://api.jqueryui.com/dialog/#option-dialogClass).
  $dialog.dialog({
    buttons: {
      "Ok": function() {
        $(this).dialog(`close`);
      },
      "No": function() {
        $(this).dialog(`close`);
      }
    },
    close: closeDialog,
    containment: 'body'
  });

  // Use of .offset() on the .parent() of the dialog to give a random position + .height() and .width() to get the dimensions of elements on page.
  $dialog.parent().offset({
    top: Math.random() * ($(window).height() - $dialog.parent().height()),
    left: Math.random() * ($(window).width() - $dialog.parent().width())
  });
}

// Closes the dialog popup window.
function closeDialog() {

  // Random time delay.
  let delay = randomInRange(MIN_DIALOG_DELAY_TIME, MAX_DIALOG_DELAY_TIME);
  // Set a timeout and add a new dialog after the delay.
  setTimeout(addDialog, delay);
}

// Returns a random number (Min & Max).
function randomInRange(min, max) {
  return min + (Math.random() * (max - min));
}


// Called when the user stops resizing an element...
function handleMusic() {
  // If it's currently paused, we should start it
//  if (music.play) {

    music.loop
    //music.play();
  }
