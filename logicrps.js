const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

/* Logic to randomise the computers choice */
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
      if (random === 1) {
        return 'rock';
    } else if (random === 2) {
        return 'paper';
    } else {
        return 'scissors'
    }    
};

let playerSelection = '';
let computerSelection = '';

function isRock() {
    playerSelection = 'rock';
    computerSelection = getComputerChoice();
    displayResult(playGame(playerSelection, computerSelection));
};

function isPaper() {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    displayResult(playGame(playerSelection, computerSelection));
};

function isScissors() {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    displayResult(playGame(playerSelection, computerSelection));
};

rock.addEventListener('click', isRock);

paper.addEventListener('click', isPaper);

scissors.addEventListener('click', isScissors);


/* This is the basic game logic */
function playGame(playerSelection, computerSelection) { 
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats rock.";
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats scissors.";
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats rock.";
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beats paper.";
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats scissors.";
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beats paper.";
        } else {
        return "It's a tie!";
        }          
    };

    function displayResult(result) {
        alert(`${result} Play Again?`);
        console.log(playerSelection);
        console.log(computerSelection);        
    };

    
    
/* This is the function to play the game, using a loop to play bets of 5*/       
/*function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++){
        const result = playGame();
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;  
        } else if (result.includes('Lose'))
            computerScore++;
        }

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore > computerScore) {
        return 'You win!'
    } else if (computerScore > playerScore) {
        return 'You lose!'
    } else {
        return 'Tie game..'
    };
};

    console.log(game());
*/