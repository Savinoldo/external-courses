function lowerCamelCase(str) {
    str = str.toLowerCase(); //eslint-disable-line

    str = str.split(" ").map(function (elem) {  //eslint-disable-line
    return elem[0].toUpperCase() + elem.slice(1);
  });

    str = str.join(''); //eslint-disable-line
  return (str[0].toLowerCase() + str.slice(1));
}

module.exports = lowerCamelCase;
