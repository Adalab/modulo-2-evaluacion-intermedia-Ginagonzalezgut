"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const button = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-input-number");
const randomNumber = getRandomNumber(100);
const ParagraphClue = document.querySelector(".js-paragraph-clue");
const ParagraphTries = document.querySelector(".paragraph__numberoftries");
let acc = 0;

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(randomNumber);
  const number = inputNumber.value;
  console.log(number);

  if (number > randomNumber) {
    ParagraphClue.innerHTML = "Es demasiado alto";
  }
  if (number < randomNumber) {
    ParagraphClue.innerHTML = "Es demasiado bajo";
  }
  if (number == randomNumber) {
    ParagraphClue.innerHTML = "Has ganado campeona!!!";
  }
  if ((number < 1, number > 100)) {
    ParagraphClue.innerHTML = "El número debe estar entre 1 y 100";
  }

  acc += 1;

  ParagraphTries.innerHTML = `número de intentos:${acc}`;
});
