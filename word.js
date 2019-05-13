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

    this.guessing = function (guess) {
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].checkLetter(guess);
        };
    }

    this.display = function () {
        var answer = '';
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].swapLetter();
            if (this.lettersArr[i].letter === ' ') {
                this.lettersArr[i].shownLetter = ' ';
            }
            answer += this.lettersArr[i].shownLetter + ' ';
        }
        console.log(`${answer}\n`);
    }

    this.checkAllLetters = function () {
        var stillGuessing = false;
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (this.lettersArr[i].isCorrect === false) {
                stillGuessing = true;
            }
        }
        console.log('Not quite there yet.');
        return stillGuessing;
    }
}

module.exports = Word;

// console.log('word file linked');