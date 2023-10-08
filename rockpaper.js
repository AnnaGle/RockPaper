const rock = "rock"
const paper = "paper"
const scissors = "scissors"

function getComputerChoice() {
    const randomNumberChoice = Math.random();
    if (randomNumberChoice < 0.33) {
        return "rock"
    }
    else if (randomNumberChoice >= 0.33 && randomNumberChoice <= 0.66) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(playersChoice, getComputerChoice) {
    if (playersChoice == "rock" && getComputerChoice == "paper")
        return "You loose"
    else if (playersChoice == "paper" && getComputerChoice == "scissors")
        return "You loose"
    else if (playersChoice == "scissors" && getComputerChoice == "rock")
        return "You loose"
    else
        return "You win!"
}

const playerSelection = prompt("Rock, paper, scissors. Which one you choose?");
const playersChoice = playerSelection.toLowerCase();
if (playersChoice !== paper && playersChoice !== rock && playersChoice !== scissors)
    alert("Wrong spelling!")
alert(playRound(playersChoice, getComputerChoice()))




