const game = ["камень", "ножницы", "бумага"];

const optionRock = document.querySelector('[data-choice="rock"]');
const optionScissors = document.querySelector('[data-choice="scissors"]');
const optionPaper = document.querySelector('[data-choice="paper"]');

let userOption = "";
let step = document.querySelector('[data-step=""]');

let gameResultBot = document.querySelector('[data-computer="bot"]');
let gameResultUser = document.querySelector('[data-user="selection"]');
let gameResult = document.querySelector('[data-winner="win"]');

function getRandomChoice() {
  const randomIndexGame = Math.floor(Math.random() * game.length);
  return game[randomIndexGame];
}

function compareGame(bot, user) {
  gameResultBot.textContent = bot;
  console.log("Бот выбрал: " + bot);
  console.log("Пользователь выбрал: " + user);

  if (bot === user) {
    console.log("Ничья!");
    gameResult.textContent = "Ничья!";
    gameResult.style.color = "yellow";
  } else if (
    (bot === "камень" && user === "ножницы") ||
    (bot === "ножницы" && user === "бумага") ||
    (bot === "бумага" && user === "камень")
  ) {
    console.log("Бот победил!");
    gameResult.textContent = "Джон Уик победил!";
    gameResult.style.color = "red";
    getRandomMemReplick().play();
  } else {
    console.log("Пользователь победил!");
    gameResult.textContent = "Победа!";
    gameResult.style.color = "green";
    getRandomMemReplickVin().play();
  }
}

optionRock.addEventListener("click", () => {
  userOption = "камень";
  console.log("Вы выбрали: " + userOption);
  gameResultUser.textContent = userOption;

  const randomChoice = getRandomChoice();
  compareGame(randomChoice, userOption);
});

optionScissors.addEventListener("click", () => {
  userOption = "ножницы";
  console.log("Вы выбрали: " + userOption);
  gameResultUser.textContent = userOption;

  const randomChoice = getRandomChoice();
  compareGame(randomChoice, userOption);
});

optionPaper.addEventListener("click", () => {
  userOption = "бумага";
  console.log("Вы выбрали: " + userOption);
  gameResultUser.textContent = userOption;

  const randomChoice = getRandomChoice();
  compareGame(randomChoice, userOption);
});

const playButton = document.getElementById("play-music");
const audioSaund = document.getElementById("game-sound");
const BG = document.querySelector('[data-saundBG="BG"]');

playButton.addEventListener("click", function () {
  BG.style.display = "block";
  audioSaund.play();
});

let memReplickOver = [
  document.querySelector('[data-mem="1"]'),
  document.querySelector('[data-mem="2"]'),
  document.querySelector('[data-mem="3"]'),
  document.querySelector('[data-mem="4"]'),
  document.querySelector('[data-mem="5"]'),
  document.querySelector('[data-mem="6"]'),
];
let memReplickVin = [
  document.querySelector('[data-mem-vin="1"]'),
  document.querySelector('[data-mem-vin="2"]'),
  document.querySelector('[data-mem-vin="3"]'),
  document.querySelector('[data-mem-vin="4"]'),
  document.querySelector('[data-mem-vin="5"]'),
  document.querySelector('[data-mem-vin="6"]'),
];

function getRandomMemReplick() {
  const randomMem = Math.floor(Math.random() * memReplickOver.length);
  return memReplickOver[randomMem];
}
function getRandomMemReplickVin() {
  const randomMemVin = Math.floor(Math.random() * memReplickVin.length);
  return memReplickVin[randomMemVin];
}
