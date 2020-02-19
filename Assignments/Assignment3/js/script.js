"use strict";

/*****************

Assignment 3: Slamina Special
by Nancy Savoie

Original Code by Pippin Barr

Help from // https://www.geeksforgeeks.org/javascript-string-prototype-tolowercase/
******************/

// The Animals array
let animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

// Variables
let correctAnimal;
let answers = [];
let score = 0;
const NUM_OPTIONS = 5;

$(document).ready(setup);

// Setup
function setup() {
  newRound();
  showScore();
}

// AddButton()
function addButton(label) {
  let $button = $("<div></div>");
  $button.addClass("guess");
  $button.text(label);
  $button.button();
  $button.on("click", handleGuess);
  $("body").append($button);
}

// say I give up
if (annyang) {
  let iGiveUp = {
    "I Give Up": function() {
      $(".guess").each(checkAnswer);
      score = 0;
      resetScore();
      setTimeout(newRound, 500);
    }
  };

  // Say It again
  let sayItAgain = {
    "Say It Again": function() {
      sayBackwards(correctAnimal);
    }
  };

  // Say I think it is
  let iThinkItIs = {
    "I Think It Is *animal": function(animal) {
      if (animal.toLowerCase() === correctAnimal.toLowerCase()) {
        $(".guess").each(function(index) {
          let temp = $(this).text();
          if (correctAnimal.toLowerCase() === temp.toLowerCase()) {
            updateScore();
          }
        });
      } else {
        resetScore();
      }
      setTimeout(newRound, 500);
    }
  };

  //Annyang commands
  annyang.addCommands(iGiveUp);
  annyang.addCommands(sayItAgain);
  annyang.addCommands(iThinkItIs);
  annyang.start();
}

// newRound()
function newRound() {
  answers = [];
  $(".guess").remove();
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let theAnswer = animals[Math.floor(Math.random() * animals.length)];
    addButton(theAnswer);
    answers.push(theAnswer);
  }
  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  sayBackward(correctAnimal);
}

// handleGuess()
function handleGuess() {
  if ($(this).text() === correctAnimal) {
    $(".guess").remove();
    setTimeout(newRound, 500);
    updateScore();
  } else {
    $(".guess").effect("shake");
    sayBackward(correctAnimal);
    score = 0;
    resetScore();
  }
}

// updateScore()
function updateScore() {
  score += 1;
  showScore();
}

// resetScore()
function resetScore() {
  score = 0;
  showScore();
}

// showScore()
function showScore() {
  let $score = $("#score");
  $score.text("Score:" + score);
}
// sayBackward()
function sayBackward(text) {
  let backwardsText = text
    .split("")
    .reverse()
    .join("");
  let options = {
    rate: 1,
    pitch: 3
  };
  responsiveVoice.speak(backwardsText, "UK English Male", options);
}

// getAnswer()
function getAnswer() {
  if ($(this).text() === correctAnimal) {
    $(this).effect("shake");
  }
}
