const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
    let count = {};
    for (const letter of sentence) {
        if (letter !== " ") {
            if (count[letter]) {
                count[letter]++;
            } else {
                count[letter] = 1;
            }
        }
    }
    console.log(count);
    return count;
};

module.exports = countLetters;

countLetters("lighthouse in the house");
countLetters("Good Morning! Have a nice Day.");