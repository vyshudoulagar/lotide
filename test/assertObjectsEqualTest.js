const assertObjectsEqual = require('../assertObjectsEqual');

const obj1 = {
    a: [1, 2, 3],
    b: 4,
    c: [5, 6]
};
const obj2 = {
    a: [1, 2, 3],
    b: 4,
    c: [5, 6]
};
assertObjectsEqual(obj1, obj2);