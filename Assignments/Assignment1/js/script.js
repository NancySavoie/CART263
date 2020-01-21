// Assignment 1: Pixel Painter Pro++ (Based on Pippin Barr's Pixel Painter)
// Nancy Savoie

// With help from this website:
// https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj

"use strict";

// Global Variable
let rotation = 0;

window.onload = setup;

// Function setup, creating pixel class
function setup() {
  console.log("1,2,1,2, patate, poil");
  for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    pixel.addEventListener("mouseover", paint); // For mouseover
    document.body.appendChild(pixel);
    document.addEventListener("keydown", rotate); // For keydown
  }
}

// For the mouse over event listener
function paint(e) {
  let pixel = e.target;
  pixel.style.backgroundColor = randomColor();
  setTimeout(resetPixel, 1000, pixel);
}

// Returns the color of the pixels to black, like the background
function resetPixel(pixel) {
  pixel.style.backgroundColor = "black";
}

// Creates the random color (Based on above-mentioned website)
function randomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

// For the keydown event listener
function rotate(buttonPressed) {
  let pixels = document.getElementsByClassName("pixel");

  // When the left arrow key is pressed, change the rotation to +1 clockwise
  if (buttonPressed.keyCode === 37) {
    rotation += 1;
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.transform = `rotate(${rotation}deg)`;
    }
  }
  // When the right arrow key is pressed, change the rotation -1 counter-clockwise
  if (buttonPressed.keyCode === 39) {
    rotation += -1;
    for (let i = 0; i < pixels.length; i++) {
      pixels[i].style.transform = `rotate(${rotation}deg)`;
    }
  }
}
