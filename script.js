
/**
 * Awful puns Write your destiny. Will you cut the competition down?! don't get crushed.
 * 
 * Author: Lawrence Goodhead 21/12/21
 * TODO:
 * SET CSS DOM manipulation
 * Remove Console Log Functionality -> Switch to DOM
 * Clean up code
 * 

Logic: 
1: On 'Start click' -> Assign Random choice to the computer
2: Click on one of the choices to pick weapon
3: Return result
4: Display  result on page

 
 
//Computers choice. Assign random number:
/** 
let computerSelection = '';
let = '';
let winCount = 0;
let loseCount = 0;
let total = 0;


play();

function play() {

    for (let i = 0; i < 5; i++) {
        if (winCount === 999) {
            break;
        } else {
            total = i + 1;
        }
        computerPlay();
        playerPlay();
        rockPaperScissors();
    }
    console.log("Wins: " + winCount);
    console.log("Losses: " + loseCount);
    console.log("Total: " + total);


    if (winCount > 2) {
        alert("Nice job. You won. really. Amazing.")
    }
    else if (winCount == loseCount) {
        alert("Hmm.. draw");
    } else {
        alert("Loser! Loooossseeer! Y o U l O s E. double loser.");
    }
}

function computerPlay() {
    computerSelection = Number(Math.floor(Math.random() * 3) + 1);
};

//Ask user for their choice, make case insenstive, assign scoring
function playerPlay() {
    let validInput = 0;
    while (validInput != 1) {
        let answer = window.prompt("Rock paper scissors! Choose your weapon?");
        answer = answer.toLowerCase();

        if (answer === "rock") {
            return playerSelection = 1;
        }
        if (answer === "paper") {
            return playerSelection = 2;
        }
        if (answer === "scissors") {
            return playerSelection = 3;
        }
        if (answer === "nuclear bomb") {
            alert("Cheat code")
            return playerSelection = 4;
        }
        else {
            alert("Looks like you didn't pick any of the right options, try again.");
        }
    }
}
function rockPaperScissors() {
    //cheat code: win
    if (playerSelection === 4) {
        alert("Cheat code activated: Nuclear Bomb detonating in 5..4..3..2..1...You win, obviously.. *sigh*");
        winCount = 999;
        loseCount = -999;
        total = 3.14;
    }
    //draw
    if (playerSelection === computerSelection) {
        alert("Draw!");
    }
    //rock
    else if (playerSelection === 1) {
        if (computerSelection === 2) {
            winnerMessage();
            winCount++;

        } else {
            loserMessage();
            loseCount++;
        }
    }
    //paper
    else if (playerSelection === 2) {
        if (computerSelection === 1) {
            winnerMessage();
            winCount++;
        } else {
            loserMessage();
            loseCount++;
        }
    }
    //scissors
    else if (playerSelection === 3) {
        if (computerSelection === 2) {
            winnerMessage();
            winCount++;
        } else {
            loserMessage();
            loseCount++;
        }
    }
}

function winnerMessage() {
    alert("Congratulations, you win this round.");
}
function loserMessage() {
    alert("You lost this round! Better luck next time.");
}

*/