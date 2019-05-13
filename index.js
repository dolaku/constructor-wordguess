var Word = require('./word');
var inquirer = require('inquirer');

var wordBank = ['mashed potato', 'mac n cheese', 'french fries'];
var randomWord;
var randomWordSplit = '';
var newWordBlank = '';



// choose a random word from the word bank
pickRandomWord();
console.log('index.js generated: ' + randomWord);

// create the new word
// that create the letters
var targetWord = new Word(randomWord);
targetWord.createBlank();
// console.log(targetWord.lettersArr);

targetWord.display();
// displayNewWord();
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
                message: 'Please guess a letter:'
            }
        ]).then(function(res) {
            console.log(res);

            // check if guess is correct & updates display
            targetWord.guessing(res.guessedLetter);
            targetWord.display();

            // check if all letters are guessed
            targetWord.checkAllLetters();

        });

}
