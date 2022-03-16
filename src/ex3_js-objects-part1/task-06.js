function getProperty(object, propertyPath) {
  for (const value of propertyPath.split('.')) { //eslint-disable-line
    if (object == null) {
      return undefined;
    }

    object = object[value]; //eslint-disable-line
  }

  return object;
}

module.exports = getProperty;
