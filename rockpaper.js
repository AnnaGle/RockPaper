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
const yourpoints = document.querySelector('.yourpoints')
const comppoints = document.querySelector('.comppoints')

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
        const p = document.createElement('p')
        p.innerText = 'You loose! Computer picked paper'
        outcomeDiv.appendChild(p)
        return -1
    }
    else if (x === paper && y === scissors) {
        const p = document.createElement('p')
        p.innerText = 'You loose! Computer picked scissors'
        outcomeDiv.appendChild(p)
        return -1
    }
    else if (x === scissors && y === rock) {
        const p = document.createElement('p')
        p.innerText = 'You loose! Computer picked rock'
        outcomeDiv.appendChild(p)
        // alert(looseMessage)
        return -1
    }

    else if (x === y) {
        const p = document.createElement('p')
        p.innerText = 'It is a draw!'
        outcomeDiv.appendChild(p)
        return 0
    }
    else {
        const p = document.createElement('p')
        p.innerText = 'You win!'
        outcomeDiv.appendChild(p)
        return 1
    }
}

function playRound(playersChoice) {
    if (startingComputerPoints >= 3) {
        const h1 = document.createElement('h1')
        h1.innerText = "It's your final defeat! Computer got 3 ponts."
        outcomeDiv.appendChild(h1)
        return
    }
    else if (startingUsersPoints >= 3) {
        const h1 = document.createElement('h1')
        h1.innerText = "It's your Victory! You got 3 points."
        outcomeDiv.appendChild(h1)
        return
    }
    const computerChoice = getComputerChoice()
    const result = checkResult(playersChoice, computerChoice)
    scoreCalculation(result)
    console.log(result, computerChoice, playersChoice)
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
    const playersChoice = rock
    playRound(playersChoice)
    yourpoints.innerText = `Players score:  ${startingUsersPoints}`
    comppoints.innerText = `Computers score:  ${startingComputerPoints}`

})

paperButton.addEventListener('click', () => {
    const playersChoice = paper
    playRound(playersChoice)
    yourpoints.innerText = `Players score:  ${startingUsersPoints}`
    comppoints.innerText = `Computers score:  ${startingComputerPoints}`

})
scissorsButton.addEventListener('click', () => {
    const playersChoice = scissors
    playRound(playersChoice)
    yourpoints.innerText = `Players score:  ${startingUsersPoints}`
    comppoints.innerText = `Computers score:  ${startingComputerPoints}`
})

