function findString(str, str1) {
  if (str.indexOf(str1) === -1) {
    return false;
  }

  return true;
}

module.exports = findString();
