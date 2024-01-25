const tail = function(arr) {
  arr = arr.slice(1);
  return arr;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2); // check if array length is 2
assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[1], "Labs");
