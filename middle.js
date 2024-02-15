
const middle = function(array) {
    let result = [];
    if (array.length < 3) {
        return result;
    } else if (array.length % 2 === 0) {
        result.push(array[(array.length / 2) - 1]);
        result.push(array[(array.length / 2)]);
    } else {
        result.push(array[((array.length + 1) / 2) - 1]);
    }
    return result;
}

module.exports = middle;
