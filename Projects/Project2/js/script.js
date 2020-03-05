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
let timer // To eventually stop the animation

$(document).ready(setup);

function setup() {
//Responsive voice with welcome message.
responsiveVoice.speak(
"Welcome human. I am from the future. The year 3021 to be exact. Please help me understand the decimation of human intelligence by feeding me your internet garbage",
"UK English Female",
{pitch: 0.5, rate: 1});
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
  setTimeout(stop, 2000);
// Message for the Finger puppets
  if ($trashFingerPuppet.draggable())
  responsiveVoice.speak(
  "This makes me sad",
  "UK English Female",
  {pitch: 0.5, rate: 1});
 else {
// Message for
$trashRandomGenerator.draggable();
responsiveVoice.speak(
"What is this",
"UK English Female",
{pitch: 0.5, rate: 1});
}


// Function that creates a small animation when the robot is fed internet garbage.
function feedInternet(){
  if ($robot.attr("src") === "assets/images/robotNormal.png") {
    $robot.attr("src", "assets/images/robotSad.png");
  } else {
    $robot.attr("src", "assets/images/robotNormal.png");
  }
}

// This function clears the interval action between the images that create the short animation.
function stop(){
clearInterval(timer);
$robot.attr("src", "assets/images/robotNormal.png");
}
}
