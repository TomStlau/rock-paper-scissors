const CHOICES = ['rock', 'paper', 'scissor']

function getComputerChoice (list) {
  let randomNumber = Math.floor(Math.random() * list.length)
  return CHOICES[randomNumber]
}

function getPlayerChoice () {
  let playerAnswer = ''
  while (true) {
    playerAnswer = prompt('Rock, Paper or Scissor?\n').toLowerCase()
    if (CHOICES.includes(playerAnswer)) break
    alert('Invalid input. Please enter rock, paper or scissor.')
  }
  return playerAnswer
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
  if (playerAnswer === computerAnswer) return `It's a tie!`
  if (didIWin(playerAnswer, computerAnswer)) {
    console.log(`You win! ${playerAnswer} beats ${computerAnswer}`)
    return 'win'
  }
  console.log(`You lose! ${computerAnswer} beats ${playerAnswer}`)
  return 'loss'
}

function game () {
  let score = 0
  for (let i = 0; i < 5; i++) {
    let result = playAGame(getPlayerChoice(), getComputerChoice(CHOICES))
    console.log(result)
    result === 'win' ? score++ : ''
  }
  if (score >= 3) {
    console.log('You are the winner!')
    return 1
  }
  console.log('Sorry, try again.')
  return 0
}

game()
