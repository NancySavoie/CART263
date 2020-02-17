"use strict";

/*****************

Assignment 3: Slamina Special
by Nancy Savoie

Original Code by Pippin Barr

******************/

// An array of animal names that we use to create our guessing game
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

// How many possible answers there are per round
const NUM_OPTIONS = 5;

// Variable to keep track of the score
let score = 0;
let correctAnimal;
let answers = [];

// Annyang variables
let speechRepeat;
let speechSurrender;
let speechGuess;

// Get setup
$(document).ready(setup);

// setup()
function setup() {
  $('body').append(`<p id="theScore"> Score: ${score} </p>`)
   speechRepeat = {"Say it again": repeat};
   speechSurrender = {"I give up": surrender};
   speechGuess = {"The answer is *animal": guess};
   annyang.addCommands(speechRepeat);
   annyang.addCommands(speechSurrender);
   annyang.addCommands(speechGuess);
   annyang.start({autoRestart: false});
  newRound();
}

// newRound()
function newRound() {
  answers = [];
  for (let i = 0; i < NUM_OPTIONS; i++) {
    let answer = animals[Math.floor(Math.random() * animals.length)];
    addButton(answer);
    answers.push(answer);
  }

  correctAnimal = answers[Math.floor(Math.random() * answers.length)];
  sayBackwards(correctAnimal);
}

// sayBackwards(text)
function sayBackwards(text) {
  let backwardsText = text.split('').reverse().join('');

  // Set some random numbers for the voice's pitch and rate parameters for a bit of fun
  let options = {
    pitch: Math.random(),
    rate: Math.random()
  };

  // Use ResponsiveVoice with UK English Male voice
  responsiveVoice.speak(backwardsText, 'UK English Male', options);
}

// addButton(label)
function addButton(label) {
  // Create a div with jQuery using HTML
  let $button = $('<div></div>');
  // Give it the guess class
  $button.addClass("guess");
  // Set the text in the div to our label
  $button.text(label);
  // Turn the div into a button using jQuery UI's .button() method
  $button.button();
  // Listen for a click on the button which means the user has guessed
  $button.on('click', handleGuess);
  // Finally, add the button to the page so we can see it
  $('body').append($button);
}

// handleGuess()
function handleGuess() {
  if ($(this).text() === correctAnimal) {
    $('.guess').remove();
    setTimeout(newRound, 1000);
  }
  else {
    $(this).effect('shake');
    speakAnimal(correctAnimal);
  }


}
