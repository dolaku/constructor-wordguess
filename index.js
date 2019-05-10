var Word = require('./word');
var inquirer = require('inquirer');

var wordBank = ['mashed potato', 'mac n cheese', 'french fries'];
var randomWord;


function pickRandomWord () {
    var randomNum = Math.floor(Math.random() * wordBank.length);
    randomWord = wordBank[randomNum];
}

// choose a random word from the word bank
pickRandomWord();
console.log('index.js generated: ' + randomWord);

// create the new word
// which create the letters from
var targetWord = new Word(randomWord);
targetWord.createBlank();
console.log(targetWord.lettersArr);
debugger;
targetWord.display();

