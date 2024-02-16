const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};

module.exports = assertObjectsEqual;

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

