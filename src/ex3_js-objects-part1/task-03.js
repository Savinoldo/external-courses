function propertyCheck(obj, a) {
  const obj1 = Object.create(obj);

  if (a in obj1 && !(a in obj)) {
    return false;
  }

  return a in obj;
}

module.exports = propertyCheck();
