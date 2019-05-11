var Letter = function (letter) {
    this.letter = letter,
    this.shownLetter = '_',
    this.isCorrect = false

    this.swapLetter = function () {
        if (!this.isCorrect) {
            return '_';
        } else {
            this.shownLetter = this.letter;
        }
    }

    this.checkLetter = function (correctGuess) {
        if (correctGuess === this.letter) {
            this.isCorrect = true;

        }
    }
};

module.exports = Letter;

// console.log('letter file linked');