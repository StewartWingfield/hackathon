'use strict';


const assert = require('assert');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const wordBank = ['hello', 'goal', 'water', 'space', 'beans']

const random = wordBank[Math.floor(Math.random()*wordBank.length)]

const guesses = []

let lives = 5

const updateBoard = () => {
    if (guesses.length === 0) {
    for (let i = 0; i < random.length; i++) {
        guesses.push(' _ ')
    }}
    console.log(guesses.join(''))
} 


const game = (userGuess) => {
    userGuess = userGuess.toLowerCase().trim()

    for (let i = 0; i < random.length; i++){
        if (userGuess === random[i]) {
            guesses[i] = userGuess
        }
    }

    if (!random.includes(userGuess)) {
        console.log('You have guessed an incorrect letter')
        lives--
        console.log(`You have ${lives} guesses remaining`)
        return false
    }  
}

const checkWin = () => {
    if (!guesses.includes(' _ ')){
        console.log('Congrats you won!')
    } else if (lives === 0) {
        console.log('You lose')
    }
}

const hangman = (userGuess) => {
    game(userGuess) 

    checkWin()
    }


const getPrompt = () => {
    updateBoard()
    rl.question('Guess a letter', (userGuess) => {
      hangman(userGuess)
      getPrompt();
    });
  }

  getPrompt()