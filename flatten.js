
const flatten = function(array) { //takes array as argument
    const result = [];
    for (let elt of array) {
        if (Array.isArray(elt)) { //if the element is array it iterates through it
            for (let items of elt) {
                result.push(items); //pushes the element to result array
            }
        }else{
            result.push(elt); //if element is not an array
        }
    }
    return result;
}

module.exports = flatten;

