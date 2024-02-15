const assertArraysEqual = require('./assertArraysEqual');

  const flatten = function(array){
    const result = [];
    for(let elt of array){
        if(Array.isArray(elt)){
            for(let items of elt){
                result.push(items);
            }
        }else{
            result.push(elt);
        }
    }
    console.log(result);
    return result;
  }

  module.exports = flatten;

  assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  assertArraysEqual(flatten([['Hello', 'Hai'], 'Bye', 'bye']), ['Hello', 'Hai', 'Bye', 'Bye']);