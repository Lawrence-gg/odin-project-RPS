/**
 * Awful puns Write your destiny. Will you cut the competition down?! don't get crushed.
 * 
 * Author: Lawrence Goodhead 21/12/21
 * TODO:
 * SET CSS DOM manipulation
 * Remove Console Log Functionality -> Switch to DOM
 * Clean up code
 
*/
const grumpyRock = "rps-images/angryRock-hover-png.png";
const angryLetter = "rps-images/paper-hover.png";
const sharpScissors = "rps-images/scissors-hover.png";

const pun = document.querySelector('.pun');
const playGame = document.querySelector('.playGame');
const startButton = document.querySelector('.startButton');
const choices = document.querySelectorAll('div.choice');
const result = document.querySelector('.result');
const battleBox = document.querySelector('.battleBox');
const replay = document.querySelector('.replayButton');
const playerBox = document.querySelector('.player')
const computerBox = document.querySelector('.computer')
let playersImageAssignment;
let computersImageAssignment;

//Clicking the start button begins game
startButton.addEventListener('click', (e) => {
    let name = startButton;
    toggleHidden(name);
    chooseYourWeapon();
    toggleWeapons();
}, {
    once: true //Fix to prevent multiple 'choose your weapons' text popping up
}
);
//Play another game
function playAgain() {
    const replayButton = document.createElement('button');
    replayButton.classList.add('replayButton');
    replayButton.textContent = "Play again?";
    playGame.appendChild(replayButton);
    replayButton.addEventListener('click', function() {
        clearSlate(playerBox);
        clearSlate(computerBox);
        clearSlate(playGame);
        chooseYourWeapon();
        toggleWeapons();


    })
}
//Removes generated childNodes
function clearSlate(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

};
//Computers choice of weapon, as well as their battle card
function computerPlay() {
    computersChoice = Number(Math.floor(Math.random() * 3) + 1);
    console.log(`Computer choice ${computersChoice}`);
    if (computersChoice ===1) {
        computersImageAssignment = grumpyRock;
    } else if (computersChoice ===2) {
        computersImageAssignment = angryLetter;
    } else {
        computersImageAssignment = sharpScissors;
    }
    
};

//Player selects Rock = 1, Paper = 2 Scissors =3, assigns battle card to  player

for (let i = 0; i<choices.length;i++) {
    choices[i].index = i;
    choices[i].addEventListener('click', function () {
        playersChoice = this.index+1;
        if (playersChoice ===1) {
            playersImageAssignment = grumpyRock;
        } else if (playersChoice ===2) {
            playersImageAssignment = angryLetter;
        } else {
            playersImageAssignment = sharpScissors;
        }
    
       displayChoice(playersChoice);
       computerPlay();
       rockPaperScissors(); 
       toggleWeapons();
       battleWeaponImages();
       
    })};

    displayChoice = (choice) => {
        if (choice ===1) {
            choice = "Grumpy Rock";
        } else if (choice ===2) {
            choice ="Angry Letter"
        } else {
            choice = "Sharp scissors"
        }
        document.querySelector('.gameText').innerHTML = `You chose... ${choice}!`
    };


  


function transformText(name) {
    if (!name.classList.contains("transformText")) {
        name.classList.add('transformText');
    } else {
        name.classList.remove('transformText');
    }
};
function toggleHidden(name) {
    if (!name.classList.contains('hidden')) {
        name.classList.add('hidden');
    } else{
        name.classList.remove('hidden');

    }
};


function toggleWeapons() {
    let weaponContainer = document.querySelector("div.container");
    displayValue="";
    if (weaponContainer.style.display=="")
    displayValue = "none";
    weaponContainer.style.display = displayValue;
}
 
    function transform(name) {
    if (!name.classList.contains("transform")) {
        name.classList.add('transform');
    } else {
        name.classList.remove('transform');
    }
};

function chooseYourWeapon() {
    const content = document.createElement('h2');
    content.textContent = "Choose your weapon...".toUpperCase();
    content.classList.add('gameText');
    playGame.appendChild(content);
    content.classList.add('visible');
};
    
function gameResult(resultMessage) {
    document.querySelector('.gameText').innerHTML = resultMessage;
}

function battleWeaponImages() {
    
    const playerImage = document.createElement('img');
    const computerImage = document.createElement('img');
    playerImage.src = playersImageAssignment;
    computerImage.src= computersImageAssignment;
   playerBox.appendChild(playerImage);
    computerBox.appendChild(computerImage)
    
}

const rpsObject = {
    1: {
        1: 'draw',
        2: 'lose',
        3: 'win'
    },
    2: {
        1: 'win',
        2: 'draw',
        3: 'lose'
    },
    3: {
        1: 'lose',
        2: 'win',
        3: 'draw'
    }
}



win = () => gameResult(winMessage);
draw = () => gameResult(drawMessage);
lose = () => gameResult(loseMessage);

const winMessage ="You Win!";
const loseMessage ="You lose!";
const drawMessage ="Draw!";

function rockPaperScissors() {
    switch(rpsObject[playersChoice][computersChoice]) {
        case 'win':
            console.log("Win");
            win();
            break;
        case 'lose':
            lose();
            console.log("Lose");
            break;
        case 'draw':
            draw();
            console.log("draw");
            break;
    }
    playAgain();
    }


