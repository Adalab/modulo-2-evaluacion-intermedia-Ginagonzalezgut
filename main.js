"use strict";

// 1.la usuaria hace clik en el boton prueba
// 2.Recoger el numero que ha enviado la usuaria
// 3. IF -----si la usuario escribe un Numero > y haga click en prueba:
// Muestre en en el parrafo es demasiado alto
// Si la usuaria escribe un numero < y haga click en prueba,
//  muestra  en el parrafo demasiado bajo
// Si la usuaria introduce un numeor = que el aleatorio y hace click
// muestra en el parrafo Has ganado campeona
// Cuanod la jugadora no introduzca un numero valido y pulse  en prueba:
// muestre en el parrafo el número debe estar entre 1 y 100

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const button = document.querySelector(".js-button");
const inputNumber = document.querySelector(".js-input-number");
const randomNumber = getRandomNumber(100);
const ParagraphClue = document.querySelector(".js-paragraph-clue");

console.log(randomNumber);

button.addEventListener("click", (event) => {
  event.preventDefault();

  const number = inputNumber.value;
  if (number > randomNumber) {
    ParagraphClue.innerHTML = "Es demasiado alto";
  }
});
