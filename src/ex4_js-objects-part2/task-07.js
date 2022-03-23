function stringLength(str, num) {
  const threeDots = '…';

  if (str.length > num) {
    str = str.slice(0, num - 1); //eslint-disable-line
    str = str.concat(threeDots); //eslint-disable-line
  }

  return str;
}

module.exports = stringLength;
