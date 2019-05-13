var Word = require('./word');
var inquirer = require('inquirer');

var wordBank = ['mashed potato', 'mac n cheese', 'french fries', 'cornbread'];
var randomWord;



// choose a random word from the word bank
pickRandomWord();
console.log('GENERATED: ' + randomWord);

// create the new word
// that create the letters
var targetWord = new Word(randomWord);
targetWord.createBlank();
// console.log(targetWord.lettersArr);

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
                message: 'Please guess a letter:'
            }
        ]).then(function(res) {
            console.log(res);

            // check if guess is correct & updates display
            targetWord.guessing(res.guessedLetter);
            targetWord.display();
            // check if all letters are guessed
            targetWord.checkAllLetters();

            askUser();
        });

}
