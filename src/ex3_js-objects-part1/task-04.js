function propertyCheck(obj, a) {
  const obj1 = Object.create(obj);
  let newObj = obj;

  if (a in obj1 && !(a in obj)) {
    newObj = obj1;
    newObj[a] = 'new';
    return newObj;
  }

  if (a in obj) {
    return newObj;
  }

  newObj[a] = 'new';

  return newObj;
}

module.exports = propertyCheck();
