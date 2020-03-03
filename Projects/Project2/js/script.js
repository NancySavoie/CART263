"use strict";

/********************************************************************

Welcome to the Future (of the Internet)
Project 2 - Nancy Savoie

A small game about feeding our internet to a robot from the future so he may learn our ways.

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
let timer

$(document).ready(setup);

function setup() {
$robot = $("#robot");
// The trash elements
$trashFingerPuppet = $("#trashFingerPuppet");
$trashFingerPuppet.draggable();
$trashHeadSwitch = $("#trashHeadSwitch");
$trashHeadSwitch.draggable();
$trashRandomGenerator = $("#trashRandomGenerator");
$trashRandomGenerator.draggable();
$trashRapeShirt = $("#trashRapeShirt");
$trashRapeShirt.draggable();
$robot.droppable({
// The drop option specifies a function to call when a drop is completed.
    drop: onDrop
  });
}

// Get the trash element.


  // Repeat the steps for the subsequent vases (with different revertDuration for each of them).
//$trashHeadSwitch = $("#trashHeadSwitch");
//$trashHeadSwitch.draggable({
//revert: true,
//revertDuration: 25000,
// start: function() {
    //  vaseSound.play();
//  },
//stop: function() {
      //vaseSound.pause();
//  }
//});

//$trashRandomGenerator = $("#trashRandomGenerator");
//$trashRandomGenerator.draggable({
//revert: true,
//revertDuration: 2000,
//start: function() {
//      vaseSound.play();
//  },
// stop: function() {
//      vaseSound.pause();
//  }
// });

//$trashRapeShirt = $("#trashRapeShirt");
//$trashRapeShirt.draggable({
// revert: true,
// revertDuration: 10000,
//  start: function() {
//      vaseSound.play();
//  },
// stop: function() {
//      vaseSound.pause();
//   }
//  });


  // Calls the mouseMoved function when mouse is moved.
//  $(document).on("mousemove", mouseMoved);
  $(document).one("click", mouseClick);


//Music plays after the user clicks the mouse for the firt time.
function mouseClick() {
  music.play();
}

// Tracking of mouse movement by player on page.
//function mouseMoved() {
//  mouseMoves++;
  // Check if it goes beyond the set maximum.
//  if (mouseMoves > MAX_MOUSE_MOVES) {
    // If it does, dialog is added.
  //  addDialog();
    // Counter reset.
  //  mouseMoves = 0;
//  }
//}

// OnDrop event
function onDrop(event, ui) {
  console.log("Drop");
  ui.draggable.remove();
  timer = setInterval(feedInternet, 250);
  setTimeout(stop, 2000);
}

function feedInternet(){
  if ($robot.attr("src") === "assets/images/robotNormal.png") {
    $robot.attr("src", "assets/images/robotSad.png");
  } else {
    $robot.attr("src", "assets/images/robotNormal.png");
  }
}

function stop(){
clearInterval(timer);
$robot.attr("src", "assets/images/robotNormal.png");
}
