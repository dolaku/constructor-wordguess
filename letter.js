var Letter = function (letter) {
    this.letter = letter,
    this.isCorrect = false

    this.swapLetter = function () {
        if (!this.isCorrect) {
            return '_';
        } else {
            return this.letter;
        }
    }

    this.checkLetter = function (correctGuess) {
        if (correctGuess === this.letter) {
            this.isCorrect = true;

        }
    }
};

module.exports = Letter;