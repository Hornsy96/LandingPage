const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const display = document.querySelector("#resultscreen");
const score = document.querySelector("#score");
const game = document.querySelector("#game");
const selections = document.querySelector("#selections");

let gameResult = "";
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

/* Logic to randomise the computers choice */
function getComputerChoice() {
  const random = Math.floor(Math.random() * 3) + 1;
  if (random === 1) {
    return "rock";
  } else if (random === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
function selection() {
  selections.textContent = (`You chose ${playerSelection}, CPU chose ${computerSelection}!`);
}

function updateScore() {
  score.textContent = (`${playerScore} - ${computerScore}`);
}

function isRock() {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  displayResult(playGame(playerSelection, computerSelection));
  selection();
  checkGameResult();
}

function isPaper() {
  playerSelection = "paper";
  computerSelection = getComputerChoice();
  displayResult(playGame(playerSelection, computerSelection));
  selection();
  checkGameResult();
}

function isScissors() {
  playerSelection = "scissors";
  computerSelection = getComputerChoice();
  displayResult(playGame(playerSelection, computerSelection));
  selection();
  checkGameResult();
}

rock.addEventListener("click", isRock);

paper.addEventListener("click", isPaper);

scissors.addEventListener("click", isScissors);

/* This is the basic game logic */
function playGame(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    game.textContent = ("You Lose! Paper beats rock.");
    return "You Lose! Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    game.textContent = ("You Win! Rock beats scissors.");
    return "You Win! Rock beats scissors.";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    game.textContent = ("You Win! Paper beats rock.");
    return "You Win! Paper beats rock.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    game.textContent = ("You Lose! Scissors beats paper.");
    return "You Lose! Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    game.textContent = ("You Lose! Rock beats scissors.");
    return "You Lose! Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    game.textContent = ("You Win! Scissors beats paper.");
    return "You Win! Scissors beats paper.";
  } else {
    game.textContent = ("It's a tie!");
    return "It's a tie!";
  }
}

function displayResult(result) {
  updateScore(); 
  }

function checkGameResult() {
  if (playerScore === 5) {
    gameResult = "You win!";
    alert(gameResult);
  } else if (computerScore === 5) {
    gameResult = "You lose..";
    alert(gameResult);
  }  
  
  resetGame();
  } 



function resetGame() {
  if (gameResult === "You win!" || gameResult === "You lose..") {
    playerScore = 0;
    computerScore = 0;
  }
}

