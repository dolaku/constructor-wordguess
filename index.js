var Word = require('./word');
var inquirer = require('inquirer');
var colors = require('colors');

var wordBank = ['mashed potato', 'mac n cheese', 'french fries', 'cornbread', 'potato salad', 'pasta salad', 'cheddar biscuits', 'garlic bread', 'baked beans', 'baked potato', 'coleslaw', 'salad', 'spinach dip', 'sauteed mushrooms', 'green beans', 'roasted squash'];
var randomWord;


// choose a random word from the word bank
pickRandomWord();

// create the new word
// show the blank spaces
// and ask for user input
var targetWord = new Word(randomWord);
targetWord.createBlank();

console.log('\nWhat is your side dish? Take a guess!'.green);
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
                message: 'Please guess a letter:'.green
            }
        ]).then(function(res) {

            // check if guess is correct & updates display
            targetWord.guessing(res.guessedLetter);
            targetWord.display();

            // check if all letters are guessed
            targetWord.checkAllLetters();
            
            // if there is more to guess, prompt user
            if (targetWord.leftToGuess > 0) {
                console.log(`Not quite there yet. ${targetWord.leftToGuess} more to go!\n`);
                askUser();
            } else {
                // no more to guess, win message
                console.log(`You Win! You get a side of ${targetWord.wordToGuess}!`.cyan);
            }
        });

}
