function propertyCheck(obj, a) {
  for (const key in obj) {//eslint-disable-line
    if (key === a && key in obj) {
      return true;
    }
  }

  return false;
}

module.exports = propertyCheck();
