"use strict";

/********************************************************************

Welcome to the Future (of the Internet)
Project 2 - Nancy Savoie

A small game about helping the citizens of the future understand our (sad) internet ways.

Inspired by class exercises and examples by Pippin Barr.
Images: Nancy Savoie and creative commons (Vecteezy & Freepik).
Music: Tomorrowland Area Music Loop (YouTube).

*********************************************************************/
$(document).ready(setup);

// Load the background music and sound effect.
let music = new Audio("assets/sounds/backgroundMusic.mp3");
//let robotSound = new Audio("assets/sounds/robotSound.mp3");
music.volume = 1;

// Variables to hold the columns and the vases
let $robots;
//let $vase1;
//let $vase2;
//let $vase3;
//let $vase4;
//let $vase5;

function setup() {
  $robots = $(".robots");
  // Make it droppable
  $robots.droppable({
    // The drop option specifies a function to call when a drop is completed.
    drop: onDrop
  });

  // Get the vase element.
  //$vase1 = $("#vase1");
  // Make it draggable an revert to original position when released (after set amount of time).
//  $vase1.draggable({
  //  revert: true,
//    revertDuration: 5000,
//    start: function() {
///      vaseSound.play();
//    },
//    stop: function() {
//      vaseSound.pause();
//    }
//  });

  // Repeat the steps for the subsequent vases (with different revertDuration for each of them).
//  $vase2 = $("#vase2");
//  $vase2.draggable({
//    revert: true,
//    revertDuration: 25000,
  //  start: function() {
    //  vaseSound.play();
    //},
    //stop: function() {
      //vaseSound.pause();
  //  }
  //});

//  $vase3 = $("#vase3");
//  $vase3.draggable({
//    revert: true,
  //  revertDuration: 2000,
  //  start: function() {
//      vaseSound.play();
//    },
//    stop: function() {
//      vaseSound.pause();
//    }
//  });

//  $vase4 = $("#vase4");
//  $vase4.draggable({
//    revert: true,
//    revertDuration: 10000,
//    start: function() {
//      vaseSound.play();
//    },
//    stop: function() {
//      vaseSound.pause();
//    }
//  });

///  $vase5 = $("#vase5");
//  $vase5.draggable({
//    revert: true,
//    revertDuration: 500,
//    start: function() {
//      vaseSound.play();
//   },
//    stop: function() {
//      vaseSound.pause();
//    }
//  });

  // Calls the mouseMoved function when mouse is moved.
//  $(document).on("mousemove", mouseMoved);
  $(document).one("click", mouseClick);
}

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
function onDrop(event, ui) {}
