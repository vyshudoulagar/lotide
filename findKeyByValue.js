
const findKeyByValue = function(object, value) { //takes an object and a value as arguments
    const keys = Object.keys(object);
    for (const key of keys) {
        if (object[key] === value) {
            return key; // returns key if the value is equal the object[key],
        }
    }
};

module.exports = findKeyByValue;
