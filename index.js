var Word = require('./word');
var inquirer = require('inquirer');

var wordBank = ['mashed potato', 'mac n cheese', 'french fries'];
var randomWord;
var randomWordSplit = '';
var newWordBlank = '';



// choose a random word from the word bank
pickRandomWord();
// console.log('index.js generated: ' + randomWord);

// create the new word
// that create the letters
var targetWord = new Word(randomWord);
targetWord.createBlank();
// console.log(targetWord.lettersArr);
debugger;

displayNewWord();
guessLetters();

// randomly generate a new word to guess
function pickRandomWord() {
    var randomNum = Math.floor(Math.random() * wordBank.length);
    randomWord = wordBank[randomNum];
}

// loop through new word and print letters as blanks
function displayNewWord() {
    for (var i = 0; i < targetWord.lettersArr.length; i++) {
        randomWordSplit += targetWord.lettersArr[i].letter + ' ';
        newWordBlank += '_ ';
    
    }
    console.log(randomWordSplit);
    console.log(newWordBlank);

}

// ask user for guess
function guessLetters() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'guessedLetter',
                message: 'Please guess a letter:'
            }
        ]).then(function(res) {
            console.log(res);
            // check is guess is correct
            targetWord.guessing(res.guessedLetter);
            targetWord.display();

            // check if all letters are guessed
            targetWord.checkAllLetters();
        });

}
