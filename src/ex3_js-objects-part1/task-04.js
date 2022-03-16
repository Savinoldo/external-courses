function propertyCheck(a, obj) {
  if (obj.hasOwnProperty(a)) {
    return obj;
  }

  obj[a] = 'new'; // eslint-disable-line
  return obj;
}

module.exports = propertyCheck;
