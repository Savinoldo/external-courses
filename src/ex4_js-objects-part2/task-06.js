function firstLetter(str) {
  str = str.split(" ").map(function (elem) {  //eslint-disable-line
    return elem[0].toUpperCase() + elem.slice(1);
  });

  return str.join(' ');
}

module.exports = firstLetter;
