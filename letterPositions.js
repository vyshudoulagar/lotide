const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
        let letter = sentence[i];
        if (letter !== " ") {
            if (results[letter]) {
                results[letter].push(i);
            } else {
                results[letter] = [i];
            }
        }
    }
    return results;
};

module.exports = letterPositions;

assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertObjectsEqual(
    letterPositions("lighthouse in the house"),
    {
        l: [0],
        i: [1, 11],
        g: [2],
        h: [3, 5, 15, 18],
        t: [4, 14],
        o: [6, 19],
        u: [7, 20],
        s: [8, 21],
        e: [9, 16, 22],
        n: [12]
    });