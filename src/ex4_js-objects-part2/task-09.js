function stringInsert(str1, str2, num) {
  str1 = str1.split(' '); // eslint-disable-line
  str1.splice(num + 1, 0, str2);

  return str1.join(' ');
}

module.exports = stringInsert;
