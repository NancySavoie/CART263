"use strict";

/********************************************************************

Welcome to the Future
Project 2 - Nancy Savoie

A small game about feeding our internet to a robot from the future so he may understand our ways.

Inspired by class exercises and examples by Pippin Barr.
Images: Nancy Savoie and creative commons (Vecteezy & Freepik).
Music: Tomorrowland Area Music Loop (YouTube).

*********************************************************************/


// Load the background music and sound effect.
let music = new Audio("assets/sounds/backgroundMusic.mp3");

// Variables to hold the robot and the internet trash objects
let $robot;
let $trashFingerPuppet;
let $trashHeadSwitch;
let $trashRandomGenerator;
let $trashRapeShirt;
// Set to eventually stop the animation after the robot is fed internet garbage.
let timer;
// Variable for the number value of the dragged trash image.
let currentDraggable = 0;

$(document).ready(setup);

function setup() {

  // Responsive voice with welcome message and directions.
  responsiveVoice.speak(
    "Welcome human survivor. Click the mouse for some mood music.",
    "UK English Female", {
      pitch: 0.5,
      rate: 1
    });
  // setTimeout function to create a pause between responsive voice dialogue.
  setTimeout(function() {
    // Responsive voice with welcome message and directions.
    responsiveVoice.speak(
      "Good. Now let us begin. I am from the future. The year 3021 to be exact. Please help me understand the decimation of human intelligence by feeding me your in-ternet garbage",
      "UK English Female", {
        pitch: 0.5,
        rate: 1
      })
  }, 7700);
  $robot = $("#robot");
  $robot.droppable({
    // The drop option specifies a function to call when a drop is completed.
    drop: onDrop
  });

  // The "trash" elements are made draggable and are assigned a number.
  $trashFingerPuppet = $("#trashFingerPuppet");
  $trashFingerPuppet.draggable({
    drag: function(event, ui) {
      currentDraggable = 1;
    }
  });

  $trashHeadSwitch = $("#trashHeadSwitch");
  $trashHeadSwitch.draggable({
    drag: function(event, ui) {
      currentDraggable = 2;
    }
  });

  $trashRandomGenerator = $("#trashRandomGenerator");
  $trashRandomGenerator.draggable({
    drag: function(event, ui) {
      currentDraggable = 3;
    }
  });

  $trashRapeShirt = $("#trashRapeShirt");
  $trashRapeShirt.draggable({
    drag: function(event, ui) {
      currentDraggable = 4;
    }
  });
}

$(document).one("click", mouseClick);

//Music plays after the user clicks the mouse for the firt time.
function mouseClick() {
  music.play();
  music.stop();
}

// OnDrop event
function onDrop(event, ui) {
  console.log("Drop");
  ui.draggable.remove();
  timer = setInterval(feedInternet, 250);
  setTimeout(stop, 2000); // The animation between images stops after 2 seconds.
  // Voice message response for each of the trash elements.
  // Find the right voiceline based on their number.
  if (currentDraggable === 1) {
    responsiveVoice.speak(
      "What is this?",
      "UK English Female", {
        pitch: 0.5,
        rate: 1
      });

  };
  if (currentDraggable === 2) {
    responsiveVoice.speak(
      "This makes me sad.",
      "UK English Female", {
        pitch: 0.5,
        rate: 1
      });

  };
  if (currentDraggable === 3) {
    responsiveVoice.speak(
      "Why?",
      "UK English Female", {
        pitch: 0.5,
        rate: 1
      });
  };
  if (currentDraggable === 4) {
    responsiveVoice.speak(
      "System...failing...",
      "UK English Female", {
        pitch: 0.5,
        rate: 1
      });
  };
}

// Function that creates a small animation between the images when the robot is fed internet garbage.
function feedInternet() {
  if ($robot.attr("src") === "assets/images/robotNormal.png") {
    $robot.attr("src", "assets/images/robotSad.png");
  } else {
    $robot.attr("src", "assets/images/robotNormal.png");
  }
}

// This function clears the interval action between the images that create the short animation.
function stop() {
  clearInterval(timer);
  $robot.attr("src", "assets/images/robotNormal.png");
}
