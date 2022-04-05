function slicePolyfill(array, begin, end) {
  let newArr = [...array];

  if (begin >= 0 && end >= 0) {
    newArr = newArr.filter((item, index) => index >= begin && index < end);
  }

  if (end === undefined) {
    newArr = newArr.filter((item, index) => index >= begin);
  }

  if (end === undefined && begin === undefined) {
    newArr = [...array];
    return newArr;
  }

  if (begin < 0 && end >= 0) {
    newArr = newArr.filter((item, index) => index >= newArr.length + begin && index < end);
  }

  if (begin >= 0 && end < 0) {
    newArr = newArr.filter((item, index) => index >= begin && index < newArr.length + end);
  }

  if (begin < 0 && end < 0) {
    newArr = newArr.filter((item, index) => index >= newArr.length + begin && index < newArr.length + end); //eslint-disable-line
  }

  return newArr;
}

module.exports = slicePolyfill;
