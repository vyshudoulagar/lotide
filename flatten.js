const assertArraysEqual = function(array1,array2) {
    if (eqArrays(array1,array2)) {
      console.log(`🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
    } else {
      console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
    }
  };
  
  const eqArrays = function(arr1, arr2) {
    if (arr1.length === arr2.length) {
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  };

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

  flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
  flatten([['Hello', 'Hai'], 'Bye', 'bye'])