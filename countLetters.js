
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
    return count;
};

module.exports = countLetters;
