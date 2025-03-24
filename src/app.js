import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Variables
const suits = ["♠", "♣", "♥", "♦"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

const suitUp = document.querySelector("#suitUp");
const value = document.querySelector("#value");
const suitDown = document.querySelector("#suitDown");
const generateBtn = document.querySelector("#generateBtn");
const timerDisplay = document.querySelector("#timer");

let secondsLeft = 10;
let timerInterval;

function generateCard() {
  const randomSuit = valueExtract(suits);
  const randomValue = valueExtract(values);

  suitUp.textContent = randomSuit;
  value.textContent = randomValue;
  suitDown.textContent = randomSuit;

  const redSuits = ["♥", "♦"];
  const color = redSuits.includes(randomSuit) ? "red" : "black";

  suitUp.style.color = color;
  suitDown.style.color = color;
  value.style.color = color;
}

// Función para extraer un valor aleatorio
const randoMaker = arr => Math.floor(Math.random() * arr.length);
const valueExtract = arr => arr[randoMaker(arr)];

function startTimer() {
  clearInterval(timerInterval); 
  secondsLeft = 10;
  timerDisplay.textContent = `Nueva carta en: ${secondsLeft}s`;

  timerInterval = setInterval(() => {
    secondsLeft--;
    timerDisplay.textContent = `Nueva carta en: ${secondsLeft}s`;

    if (secondsLeft === 0) {
      generateCard();
      secondsLeft = 10;
    }
  }, 1000);
}

window.onload = () => {
  generateCard(); 
  startTimer();  

  generateBtn.addEventListener("click", () => {
    generateCard();
    startTimer();
  });
};
