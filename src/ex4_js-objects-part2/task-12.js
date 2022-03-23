function numberRounding(number1, number2) {
  const sum = number1 + number2;

  return (+sum.toFixed(3));
}

module.exports = numberRounding;
