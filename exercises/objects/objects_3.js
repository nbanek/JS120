function objectsEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  }
  let sameKeys = String(Object.keys(object1).sort()) === String(Object.keys(object2).sort());
  let sameValues = String(Object.values(object1).sort()) === String(Object.values(object2).sort());
  return sameKeys && sameValues;
}


console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false