const CHOICES = ['rock', 'paper', 'scissor']
const playerActions = document.querySelectorAll('.player-action')
const playerScoreNode = document.getElementById('player-score')
const computerScoreNode = document.getElementById('computer-score')
let playerScore = 0
let computerScore = 0
let replayBtnAppended = false

const card1 = document.querySelector('#card-1')
const card2 = document.querySelector('#card-2')
const winnerText = document.querySelector('#winner-text')
const playerImg = document.querySelector('#player-img')
const computerImg = document.querySelector('#computer-img')
const playerSquare = document.querySelector('#player-choice')
const computerSquare = document.querySelector('#computer-choice')

function getComputerChoice (list) {
  let randomNumber = Math.floor(Math.random() * list.length)
  return CHOICES[randomNumber]
}

function getPlayerChoice (event) {
  let choice = event.target.id
  return choice === 'rock-img'
    ? 'rock'
    : choice === 'scissor-img'
    ? 'scissor'
    : choice === 'paper-img'
    ? 'paper'
    : 'Invalid Answer'
}

function didIWin (playerAnswer, computerAnswer) {
  switch (playerAnswer) {
    case 'rock': {
      return computerAnswer === 'paper' ? false : true
    }
    case 'paper': {
      return computerAnswer === 'scissor' ? false : true
    }
    case 'scissor': {
      return computerAnswer === 'rock' ? false : true
    }
  }
}

function playAGame (playerAnswer, computerAnswer) {
  playerImg.src = `./images/${playerAnswer}.webp`
  computerImg.src = `./images/${computerAnswer}.webp`
  card1.classList.toggle('ease-out-down')

  const timeout1 = setTimeout(() => {
    card1.classList.toggle('hidden')
    card1.classList.toggle('ease-out-down')
    card2.classList.toggle('hidden')
  }, 1000)
  const timeout2 = setTimeout(() => {
    card2.classList.toggle('hidden')
    card1.classList.toggle('hidden')
  }, 5000)

  function endGame () {
    if (replayBtnAppended) {
      return
    }
    const replayButton = document.createElement('button')
    replayButton.innerText = 'Play Again'
    replayButton.classList.add('replay-btn')
    card2.appendChild(replayButton)
    replayButton.addEventListener('click', () => {
      location.reload()
    })
    replayBtnAppended = true
    playerSquare.classList.add('hidden')
    computerSquare.classList.add('hidden')
    clearTimeout(timeout1)
    clearTimeout(timeout2)
    clearTimeout(timeout3)
  }

  function checkScore () {
    if (playerScore === 2) {
      winnerText.innerText = 'You are the winner!'
      winnerText.classList.add('winning')
      endGame()
    }
    if (computerScore === 2) {
      winnerText.innerText = 'You lost the game!'
      endGame()
    }
  }

  const timeout3 = setTimeout(() => {
    if (playerAnswer === computerAnswer) {
      playerScore += 1
      computerScore += 1
      playerScoreNode.innerText = playerScore
      computerScoreNode.innerText = computerScore
      winnerText.innerText = "It's a tie!"
      checkScore()
      return `It's a tie!`
    }
    if (didIWin(playerAnswer, computerAnswer)) {
      playerScore += 1
      winnerText.innerText = 'You win!'
      playerScoreNode.innerText = playerScore
      console.log(`You win! ${playerAnswer} beats ${computerAnswer}`)
      checkScore()
      return 'win'
    }
    computerScore += 1
    checkScore()
    winnerText.innerText = 'You lose!'
    computerScoreNode.innerText = computerScore
    console.log(`You lose! ${computerAnswer} beats ${playerAnswer}`)
    checkScore()
    return 'loss'
  }, 1000)
}

document.addEventListener('DOMContentLoaded', () => {
  for (let action of playerActions) {
    action.addEventListener('click', e => {
      playAGame(getPlayerChoice(e), getComputerChoice(CHOICES))
    })
  }
})

const card = document.querySelector('.card')
