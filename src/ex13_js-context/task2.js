function Hangman(word) {
  this.wrongLetters = [];
  this.errors = 6;
  this.guessedString = '_________';

  this.guess = function (letter) { //eslint-disable-line
    if (word.indexOf(letter) === -1) {
      this.countErrors -= 1;
      this.wrongLetters.push(letter);
      console.log(`wrong letter, errors left ${this.errors} | ${this.wrongLetters}`);
      return this;
    }

    const wordArray = this.guessedString.split('');

    for (let i = 0; i <= word.length; i += 1) {
      if ((word[i] === letter)) {
        wordArray[i] = letter;
      }
    }

    this.guessedString = wordArray.join('');
    console.log();

    return this;
  };

  this.getGuessedString = function () { //eslint-disable-line
    return this.guessedString;
  };

  this.getErrorsLeft = function () { //eslint-disable-line
    return this.errors;
  };

  this.getWrongSymbols = function () { //eslint-disable-line
    return this.wrongLetters;
  };

  this.getStatus = function () { //eslint-disable-line
    return `${this.guessedString} | errors left ${this.errors}`;
  };

  this.startAgain = function () { //eslint-disable-line
    this.wrongLetters = [];
    this.errors = 6;
    this.guessedString = '_________';
  };
}

const hangman = new Hangman('webpurple');

module.exports = hangman;
