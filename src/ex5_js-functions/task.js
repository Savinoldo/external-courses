function Calculator() {
  let counter = 0;

  function add(num) {
    if (num) {
      counter += num;

      return add;
    }

    return add;
  }

  function subtract(num) {
    if (num) {
      counter -= num;

      return subtract;
    }
    return subtract;
  }

  function divide(num) {
    if (num) {
      counter /= num;

      return divide;
    }

    return divide;
  }

  function multiply(num) {
    if (num) {
      counter *= num;

      return multiply;
    }

    return multiply;
  }

  function getResult() {
    return counter;
  }

  function reset() {
    counter = 0;

    return counter;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
}

const calculator = Calculator();
module.exports = calculator;
