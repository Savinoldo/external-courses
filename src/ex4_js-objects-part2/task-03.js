function spaceDelete(str) {
  str = str.replace(' ', ''); //eslint-disable-line
  str = str.substring(0, str.lastIndexOf(' ')) + str.substring(str.lastIndexOf(' ') + 1); //eslint-disable-line

  return str;
}
module.exports = spaceDelete;
