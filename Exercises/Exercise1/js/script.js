// With help from these websites:
// https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj

"use strict";

window.onload = setup;

function setup() {
  console.log("1,2,1,2, patate, poil");
  for (let i = 0; i < 1000; i++) {
    let pixel = document.createElement("div");
    pixel.setAttribute("class", "pixel");
    pixel.addEventListener("mouseover", paint);
    document.body.appendChild(pixel);
  }
}

function paint(e) {
  let pixel = e.target;
  pixel.style.backgroundColor = randomColor();
  setTimeout(resetPixel, 1000, pixel);
}

function resetPixel(pixel) {
  pixel.style.backgroundColor = "black";
}

function randomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
