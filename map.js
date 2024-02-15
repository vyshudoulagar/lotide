const assertArraysEqual = require('./assertArraysEqual');



const map = function(array, callback) {
    const results = [];
    for (const item of array) {
        results.push(callback(item));
    }
    return results;

};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const words1 = ["Apple", "Banana", "Carrot", "Donut", "Eggplant"];
const results2 = map(words1, word => word.length);
assertArraysEqual(results2, [5, 6, 6, 5, 8]);
