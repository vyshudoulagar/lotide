
const findKey = function(object, callback) { //takes object and function as arguments
    for (const key in object) {
        if (callback(object[key])) {
            return key; //returns if callback function is true
        }
    }
};

module.exports = findKey;
