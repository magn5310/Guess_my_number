"use strict";

console.log(Math.floor(Math.random() * 100));

// Generate a Random Number
let y = Math.floor(Math.random() * 100 + 1);

// Counting the number of guesses
// made for correct Guess
let guess = 1;

document.getElementById("submitguess").onclick = function () {
  // Number guessed by user
  let x = document.getElementById("guessField").value;

  if (x == y) {
    console.log("Korrekt, du brugte " + guess + " forsøg ");
  } else if (x > y) {
    /* If guessed number is greater than actual number*/
    guess++;
    console.log("Mindre");
  } else {
    guess++;
    console.log("Højere");
  }
};
