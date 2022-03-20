function deepClone(obj) {
  const objCopy = {};

  for (const i in obj) { //eslint-disable-line
    if (obj[i] instanceof Object && obj[i] !== null && !(obj[i] instanceof Array)) {
      objCopy[i] = deepClone(obj[i]);
    } else if (obj[i] instanceof Array) {
      objCopy[i] = obj[i].slice();
    } else {
      objCopy[i] = obj[i];
    }
  }
  return objCopy;
}

module.exports = deepClone;
