let gæt;
let antal = 0;
let min = 0;
let max = 100;
const startGame = document.querySelector(".startgame");
const rigtig = document.querySelector(".rigtig");
const mindre = document.querySelector(".mindre");
const højere = document.querySelector(".højere");
const comGuess = document.querySelector(".comguess");
startGame.addEventListener("click", start);

function guess() {
  gæt = Math.floor((min + max) / 2);
  comGuess.textContent = "Jeg gætter på" + " " + gæt;
  antal++;
}

function start() {
  min = 0;
  max = 100;
  rigtig.addEventListener("click", korrekt);
  mindre.addEventListener("click", lavere);
  højere.addEventListener("click", mere);

  antal = 0;
  startGame.textContent = "Genstart";
  guess();
}

function lavere() {
  max = gæt;
  guess();
}

function mere() {
  min = gæt + 1;
  guess();
}

function korrekt() {
  comGuess.textContent = "Yes, jeg gættede dit tal" + " " + gæt + " " + "på" + " " + antal + " " + "forsøg";
  rigtig.removeEventListener("click", korrekt);
  mindre.removeEventListener("click", lavere);
  højere.removeEventListener("click", mere);
  startGame.addEventListener("click", start);
}
