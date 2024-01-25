const tail = function(arr) {
  const newArr = arr.slice(1);
  console.log(newArr);
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

const words1 = ["Hello"];
tail(words1);
assertEqual(words1.length, 1);

const words2 = [];
tail(words2);
assertEqual(words2.length, 0);