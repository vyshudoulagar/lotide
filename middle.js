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

  const middle = function(array){
    let result = [];
    if(array.length < 3){
        return result;
    }else if(array.length % 2 === 0){
        result.push(array[(array.length / 2) - 1]);
        result.push(array[(array.length / 2)]);
    }else {
        result.push(array[((array.length + 1) / 2) - 1]);
    }
    return result;
  }

  assertArraysEqual(middle([1, 2, 3]), [2])
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])

  assertArraysEqual(middle([1, 2]), []);
  assertArraysEqual(middle([5]), []);