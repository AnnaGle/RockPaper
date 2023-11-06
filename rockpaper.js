const rock = "rock"
const paper = "paper"
const scissors = "scissors"
const looseMessage = "You loose!"
const drawMessage = "It's a draw!"
const winMessage = "You win!"

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const outcomeDiv = document.querySelector('.outcome');

function getComputerChoice() {
    const randomNumberChoice = Math.random();
    if (randomNumberChoice < 0.33) {
        return rock
    }
    else if (randomNumberChoice >= 0.33 && randomNumberChoice <= 0.66) {
        return paper
    }
    else {
        return scissors
    }
}

function checkResult(x, y) {
    if (x === rock && y === paper) {
        alert(looseMessage)
        return -1
    }
    else if (x === paper && y === scissors) {
        alert(looseMessage)
        return -1
    }
    else if (x === scissors && y === rock) {
        alert(looseMessage)
        return -1
    }

    else if (x === y) {
        alert(drawMessage)
        return 0
    }
    else
        alert(winMessage)
    return 1
}

function playRound() {
    const playerSelection = prompt("Rock, paper, scissors. Which one you choose?");
    const playersChoice = playerSelection.toLowerCase();
    if (playersChoice !== paper && playersChoice !== rock && playersChoice !== scissors)
        alert("Wrong spelling!")
    const computerChoice = getComputerChoice()
    const result = checkResult(playersChoice, computerChoice)
    alert("You get" + " " + result + " " + "point. Computer chose" + " " + computerChoice + "!")

    return result
}

let startingUsersPoints = 0
let startingComputerPoints = 0

function scoreCalculation(stefan) {
    if (stefan === -1) {
        startingComputerPoints = startingComputerPoints + 1
    }
    else if (stefan === 1) {
        startingUsersPoints = startingUsersPoints + 1
    }
}


rockButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    const playersChoice = 'rock'
    playRound(playersChoice, computerChoice)

})

paperButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    const playersChoice = 'paper'
    playRound(playersChoice, computerChoice)

})
scissorsButton.addEventListener('click', () => {
    const computerChoice = getComputerChoice()
    const playersChoice = 'scissors'
    playRound(playersChoice, computerChoice)

})