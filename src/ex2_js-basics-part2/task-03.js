function countNumbers(array) {
  const array1 = [0, 0, 0];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 2 === 0 && typeof array[i] === 'number' && array[i] !== 0) {
      array1[0] += 1;
    }

    if (array[i] % 2 !== 0 && typeof array[i] === 'number' && array[i] !== 0) {
      array1[1] += 1;
    }

    if (array[i] === 0 && typeof i === 'number') {
      array1[2] += 1;
    }
  }

  console.log(array1);
}

module.exports = countNumbers();
