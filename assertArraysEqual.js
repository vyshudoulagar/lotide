const eqArrays = function(arr1, arr2){
    if(arr1.length === arr2.length){
      let result = true;
      for(let i = 0; i < arr1.length; i++){
        
        if(arr1[i] === arr2[i] && result === true){
            result = true; 
        }else{
            result = false;
            return result;
        }
        
      }
      return result;
    }else{
        return false;
    }
  }

  const assertArraysEqual = function(array1,array2){
    if(eqArrays(array1,array2) === true){
        console.log(`🟢🟢🟢 Assertion Passed: ${array1} === ${array2}`);
    }else{
        console.log(`🔴🔴🔴 Assertion Failed: ${array1} !== ${array2}`);
    }
  }

  assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
  assertArraysEqual([2, 5, 3, 4], [1, 2, 3, 4]);
  assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);