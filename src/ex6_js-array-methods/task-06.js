function reducePolyfill(array, callback, initialValue) {
  let previousValue;

  if (initialValue) {
    previousValue = initialValue;
  }

  if (!initialValue) {
    previousValue = array[0];
  }

  for (let i = 0; i < array.length; i += 1) {
    if (!initialValue) {
      if (array[i + 1] !== undefined) {
        previousValue = callback(i === 0 ? array[i] : previousValue, array[i + 1], i, array);
      }
    } else if (initialValue) {
      previousValue = callback(previousValue, array[i], i, array);
    }
  }
  return previousValue;
}

module.exports = reducePolyfill;
