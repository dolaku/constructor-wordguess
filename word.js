var Letter = require('./letter');

var Word = function (word) {
    this.wordToGuess = word,
    this.lettersArr = [],
    this.leftToGuess;

    // splits the word into an array
    // loops through to create letter placeholders of the word
    this.createBlank = function () {
        var wordArr = this.wordToGuess.split('');
        for (var i = 0; i < wordArr.length; i++) {
            var indivLetters = new Letter(wordArr[i]);
            this.lettersArr.push(indivLetters);
        }
    }

    // takes in user input and evaluates against lettersArr
    this.guessing = function (guess) {
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].checkLetter(guess);
        };
    }

    // loops through word, updates the blanks to show correctly guessed letters
    this.display = function () {
        var blankSpaces = '';
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].swapLetter();

            // show space characters correctly (without underscore)
            if (this.lettersArr[i].letter === ' ') {
                this.lettersArr[i].shownLetter = ' ';
                this.lettersArr[i].isCorrect = true;
            }

            blankSpaces += this.lettersArr[i].shownLetter + ' ';
        }
        console.log(`\n${blankSpaces}\n`);
    }

    // evaluates whether all letters have been guessed
    this.checkAllLetters = function () {
        this.leftToGuess = 0;
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (this.lettersArr[i].isCorrect === false) {
                this.leftToGuess++;
            }
        }

        console.log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~');
        
    }
}

module.exports = Word;