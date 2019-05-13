var Letter = require('./letter');

var Word = function (word) {
    this.wordToGuess = word,
    this.lettersArr = []

    // splits the word into an array
    // loops through to create letter placeholders of the word
    this.createBlank = function () {
        var wordArr = this.wordToGuess.split('');
        for (var i = 0; i < wordArr.length; i++) {
            var indivLetters = new Letter(wordArr[i]);
            this.lettersArr.push(indivLetters);
        }
    }

    // takes in user input and evaluates against
    this.guessing = function (guess) {
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].checkLetter(guess);
        };
    }

    // loops through word, updates the blanks to show correctly guessed letters
    this.display = function () {
        var answer = '';
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].swapLetter();

            // show space characters correctly (without underscore)
            if (this.lettersArr[i].letter === ' ') {
                this.lettersArr[i].shownLetter = ' ';
            }

            answer += this.lettersArr[i].shownLetter + ' ';
        }
        console.log(`\n${answer}\n`);
    }

    // evaluates whether all letters have been guessed
    this.checkAllLetters = function () {
        var stillGuessing = false;
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (this.lettersArr[i].isCorrect === false) {
                stillGuessing = true;
            }
        }
        console.log('\n~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~');
        console.log('Not quite there yet.\n');
        return stillGuessing;
    }
}

module.exports = Word;

// console.log('word file linked');