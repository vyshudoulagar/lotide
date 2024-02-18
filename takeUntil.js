

const takeUntil = function(array, callback) { /* takes array and callback function as arguments */
    const result = [];
    for (const item of array) {
        if (callback(item)) {
            return result; /* returns when the callback function is true */
        } else {
            result.push(item);
        }
    }
    return result; // return result if callback never returns a truthy value
};

module.exports = takeUntil;
