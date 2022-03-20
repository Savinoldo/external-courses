function getRandomNum(max, min) {
  return (Math.floor(Math.random() * (max - min) + min));
}

module.exports = getRandomNum;
