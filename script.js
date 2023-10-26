const CHOICES = ['rock', 'paper', 'scissor']

function getComputerChoice (list) {
  let randomNumber = Math.floor(Math.random() * list.length)
  return CHOICES[randomNumber]
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

function playAGame () {
  let playerAnswer = ''
  while (true) {
    playerAnswer = prompt('Rock, Paper or Scissor?\n').toLowerCase()
    if (CHOICES.includes(playerAnswer)) break
    alert('Invalid input. Please enter rock, paper or scissor.')
  }
  let computerAnswer = getComputerChoice(CHOICES)
  if (playerAnswer === computerAnswer) return `It's a tie!`
  if (didIWin(playerAnswer, computerAnswer)) {
    return `You win! ${playerAnswer} beats ${computerAnswer}`
  }
  return `You lose! ${computerAnswer} beats ${playerAnswer}`
}