const assertArraysEqual = require('./assertArraysEqual');


const without = function(source, itemsToRemove) {
    const result = [];
    for (let item of source) {
        if (!itemsToRemove.includes(item)) {
            result.push(item);
        }
    }
    return result;
};

module.exports = without;

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
console.log(without([1, 2, 3, 4], [1, 2, 3, 4]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

