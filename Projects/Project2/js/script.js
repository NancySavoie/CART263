"use strict";

/********************************************************************

Welcome to the Future (of the internet)
Project 2 - Nancy Savoie

A small program about feeding our internet to a robot from the future so he may understand our ways.
Inspired by class exercises and examples by Pippin Barr as well as web examples.

Images: Nancy Savoie and creative commons (Vecteezy & Freepik).
Background Music: Tomorrowland Area Music Loop (YouTube).
Sound effects: http://soundbible.com/
Helpful website: https://www.codeseek.co/

*********************************************************************/

// Load the background music and sound effect.
let music = new Audio("assets/sounds/backgroundMusic.mp3");
let trashSound = new Audio("assets/sounds/trashSound.mp3");

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
// The start screen <div> with Annyang directions.
let startscreen;
// The amount of images dropped on the robot.
let imagesDropped = 0;

$(document).ready(setup);

function setup() {
  // Responsive voice with welcome message and directions.
  setTimeout(function() {
    responsiveVoice.speak(
      "Welcome human survivor. Click the mouse for some mood music.",
      "UK English Female",
      {
        pitch: 0.5,
        rate: 1
      }
    );
  }, 5000); // Ammount of time before the robot speaks for the first time to give enough time for the user to talk to annyang.

  // setTimeout function to create a pause between responsive voice dialogue.
  setTimeout(function() {
    // Responsive voice with welcome message and directions.
    responsiveVoice.speak(
      "Good. Now let us begin. I am from the future. The year 3021 to be exact. Please help me understand the decimation of human intelligence by feeding me your in-ternet garbage",
      "UK English Female",
      {
        pitch: 0.5,
        rate: 1
      }
    );
  }, 10000); // Ammount of time before the robot speaks again.
  $robot = $("#robot");
  $robot.droppable({
    // The drop option specifies a function to call when a drop is completed.
    drop: onDrop
  });

  // The "trash" elements are made draggable and are assigned a number.
  $trashFingerPuppet = $("#trashFingerPuppet");
  $trashFingerPuppet.draggable({
    revert: true,
    revertDuration: 500,
    start: function() {
      trashSound.play();
    },
    stop: function() {
      trashSound.pause();
    },
    drag: function(event, ui) {
      currentDraggable = 1;
    }
  });

  $trashHeadSwitch = $("#trashHeadSwitch");
  $trashHeadSwitch.draggable({
    revert: true,
    revertDuration: 500,
    start: function() {
      trashSound.play();
    },
    stop: function() {
      trashSound.pause();
    },
    drag: function(event, ui) {
      currentDraggable = 2;
    }
  });

  $trashRandomGenerator = $("#trashRandomGenerator");
  $trashRandomGenerator.draggable({
    revert: true,
    revertDuration: 500,
    start: function() {
      trashSound.play();
    },
    stop: function() {
      trashSound.pause();
    },
    drag: function(event, ui) {
      currentDraggable = 3;
    }
  });

  $trashRapeShirt = $("#trashRapeShirt");
  $trashRapeShirt.draggable({
    revert: true,
    revertDuration: 500,
    start: function() {
      trashSound.play();
    },
    stop: function() {
      trashSound.pause();
    },
    drag: function(event, ui) {
      currentDraggable = 4;
    }
  });

  // Annyang -> Making sure it is available.
  let command = {
    // This hides the start screen.
    "I am ready": off
  };
  // Annyang commands.
  annyang.addCommands(command);

  // Tell annyang to start.
  annyang.start();
}

$(document).one("click", mouseClick);

//Music plays after the user clicks the mouse for the firt time.
function mouseClick() {
  music.play();
}

// OnDrop event
function onDrop(event, ui) {
  console.log("Drop");
  ui.draggable.remove();
  timer = setInterval(feedInternet, 250);
  // The animation between images stops after 2 seconds.
  setTimeout(stop, 2000);
  // Voice message response for each of the trash elements.
  // It finds the right voiceline based on their number.
  if (currentDraggable === 1) {
    responsiveVoice.speak("This makes me sad...", "UK English Female", {
      pitch: 0.5,
      rate: 1
    });
    imagesDropped += 1;
    checkIfAllDropped();
  }
  if (currentDraggable === 2) {
    responsiveVoice.speak("What is this?", "UK English Female", {
      pitch: 0.5,
      rate: 1
    });
    imagesDropped += 1;
    checkIfAllDropped();
  }
  if (currentDraggable === 3) {
    responsiveVoice.speak("Why?", "UK English Female", {
      pitch: 0.5,
      rate: 1
    });
    imagesDropped += 1;
    checkIfAllDropped();
  }
  if (currentDraggable === 4) {
    responsiveVoice.speak("System failing.", "UK English Female", {
      pitch: 0.5,
      rate: 1
    });
    imagesDropped += 1;
    checkIfAllDropped();
  }
}

// Function that creates a small animation between the images when the robot is fed internet garbage.
function feedInternet() {
  if ($robot.attr("src") === "assets/images/robotNormal.gif") {
    $robot.attr("src", "assets/images/robotSad.png");
  } else {
    $robot.attr("src", "assets/images/robotNormal.gif");
  }
}

// This function clears the interval action between the images that create the short animation.
function stop() {
  clearInterval(timer);
  $robot.attr("src", "assets/images/robotNormal.gif");
}

// This removes the start screen.
function off() {
  document.getElementById("startscreen").style.display = "none";
}

// The function that checks if all the trash elements were dropped on the robot.
function checkIfAllDropped() {
  if (imagesDropped >= 4) {
    setTimeout(function() {
      responsiveVoice.speak(
        "Enough. I am done. Please. No more.",
        "UK English Female",
        {
          pitch: 0.5,
          rate: 1
        }
      );
      // Gif image changes after the robot has had enough of the internet.
      $robot.attr("src", "assets/images/robotSad.gif");
    }, 2000);
  }
}
