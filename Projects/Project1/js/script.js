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
const INITIAL_DIALOG_DELAY = 200;
// Constants determining the wait time before a new dialog popup window comes up.
const MIN_DIALOG_DELAY_TIME = 10000;
const MAX_DIALOG_DELAY_TIME = 250000;

// An array of questions to frustratre the player.
let questions = [
  "Place the right vase on the according column - Can you really do this?",
  "Place the right vase on the according column - Are you ready to give up yet?",
  "Place the right vase on the according column - Sisyphus wouldn't quit...because he can't...",
  "Place the right vase on the according column - Are you trying hard enough?",
  "Place the right vase on the according column - Working hard or hardly working?",
  "Place the right vase on the according column - You call this working?",
  "Place the right vase on the according column - It shouldn't be too difficult.",
  "Place the right vase on the according column - Commitment is key...or is it?",
  "Place the right vase on the according column - Perhaps you should quit...",
  "Place the right vase on the according column - No need for pointless struggle.",
  "Place the right vase on the according column - Are you really up to the challenge?",
];

// Load the background music.
let music = new Audio("assets/sounds/backgroundMusic.mp3");
music.volume = 1;

// Variables to hold the columns and the vases
let $column1;
let $column2;
let $column3;
let $column4;
let $column5;
let $vase1;
let $vase2;
let $vase3;
let $vase4;
let $vase5;

// Tracking of the mouse movements to initiate new dialog popup.
const MAX_MOUSE_MOVES = 1000;
let mouseMoves = 0;

$(document).ready(setup);

function setup() {

  $column1 = $("#column1");
  // Make it droppable
  $column1.droppable({
    // The drop option specifies a function to call when a drop is completed.
    drop: onDrop
  });
  // Repeat the same steps for the other columns.
  $column2 = $("#column2");
  $column2.droppable({
    drop: onDrop
  });

  $column3 = $("#column3");
  $column3.droppable({
    drop: onDrop
  });

  $column4 = $("#column4");
  $column4.droppable({
    drop: onDrop
  });

  $column5 = $("#column5");
  $column5.droppable({});

  // Get the vase element.
  $vase1 = $("#vase1");
  // Make it draggable an revert to original position when released.
  $vase1.draggable({
    revert: true
  });
  // Repeat for the other vases.
  $vase2 = $("#vase2");
  $vase2.draggable({
    revert: true
  });

  $vase3 = $("#vase3");
  $vase3.draggable({
    revert: true
  });

  $vase4 = $("#vase4");
  $vase4.draggable({
    revert: true
  });

  $vase5 = $("#vase5");
  $vase5.draggable({
    revert: true
    //revertDuration: 500,
  });

  // Calls the mouseMoved function when mouse is moved.
  $(document).on("mousemove", mouseMoved);
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
  let $dialog = $(`<div></div>`).attr(`title`, `ασήμαντος αγώνας`);
  // Choose a random question text from the array
  let question = questions[Math.floor(randomInRange(0, questions.length))];
  // Add a p tag to the dialog div that contains the question text
  $dialog.append(`<p>${question}</p>`);
  // Finally, add the div to the page
  $("body").append($dialog);

  // The music starts with first popup
  handleMusic();

  // Transforms div into dialog with help from jQuery UI's.dialog() (https://api.jqueryui.com/dialog/#option-dialogClass).
  $dialog.dialog({
    buttons: {
      Ok: function() {
        $(this).dialog(`close`);
      },
      No: function() {
        $(this).dialog(`close`);
      }
    },
    close: closeDialog,
    containment: "body"
  });

  // Use of .offset() on the .parent() of the dialog box and set it at the center of page.
  $dialog.parent().offset({
    center: ($(window).height(), $(window).width() - $dialog.parent().height())
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
  return min + Math.random() * (max - min);
}

// handleMusic function
function handleMusic() {
  music.play;
  music.loop;
}

// OnDrop event
function onDrop(event, ui) {
  //$( ".vase5" ).draggable( "OnDrop", "revertDuration", 200 );
}
