function prototypePropertyCheck(propertyName, object) {
  const obj1 = Object.getPrototypeOf(object);

  for (const key in obj1) { //eslint-disable-line
    if (obj1.hasOwnProperty(propertyName)) {
      return obj1[key];
    }
  }
  return undefined;
}
module.exports = prototypePropertyCheck;
