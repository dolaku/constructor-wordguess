var Word = require('./word');
var inquirer = require('inquirer');
var colors = require('colors');

var wordBank = ['mashed potato', 'mac n cheese', 'french fries'];
var randomWord;


// choose a random word from the word bank
pickRandomWord();

// create the new word
// show the blank spaces
// and ask for user input
var targetWord = new Word(randomWord);
targetWord.createBlank();
targetWord.display();
askUser();


// randomly generate a new word to guess
function pickRandomWord() {
    var randomNum = Math.floor(Math.random() * wordBank.length);
    randomWord = wordBank[randomNum];
}


// ask user for guess
function askUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'guessedLetter',
                message: 'Please guess a letter:'.magenta
            }
        ]).then(function(res) {

            // check if guess is correct & updates display
            targetWord.guessing(res.guessedLetter);
            targetWord.display();

            // check if all letters are guessed
            targetWord.checkAllLetters();
            debugger;
            // if there is more to guess, prompt user
            if (targetWord.leftToGuess > 0) {
                debugger;
                console.log(`Not quite there yet. ${targetWord.leftToGuess} more to go!\n`.grey);
                debugger;
                askUser();
            } else {
                // no more to guess, win message
                console.log(`You Win! You get a side of ${targetWord.wordToGuess}!`.cyan);
            }
        });

}
