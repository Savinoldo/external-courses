function Calculator() {
  let counter = 0;

  function add(num) {
    if (typeof num === 'number') {
      counter += num;

      return add;
    }
    if (!(typeof num === 'number')) {
      console.log('Введите число');

      return undefined;
    }
    return add;
  }

  function subtract(num) {
    if (typeof num === 'number') {
      counter -= num;

      return subtract;
    }
    if (!(typeof num === 'number')) {
      console.log('Введите число');

      return undefined;
    }
    return subtract;
  }

  function divide(num) {
    if (typeof num === 'number') {
      counter *= num;
      return divide;
    }
    if (!(typeof num === 'number')) {
      console.log('Введите число');

      return undefined;
    }
    return divide;
  }

  function multiply(num) {
    if (typeof num === 'number') {
      counter *= num;
      return multiply;
    }
    if (!(typeof num === 'number')) {
      console.log('Введите число');

      return undefined;
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
