const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) { //takes array as argument
    const result = [];
    for (let elt of array) {
        if (Array.isArray(elt)) { //if the element is array it iterates through it
            for (let items of elt) {
                result.push(items); //pushes the element to result array
            }
            return;
        }
            result.push(elt); //if element is not an array
        }
    }
    console.log(result);
    return result;
}

module.exports = flatten;

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([['Hello', 'Hai'], 'Bye', 'bye']), ['Hello', 'Hai', 'Bye', 'bye']);