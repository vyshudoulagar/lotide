const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("🟢🟢🟢 Assertion Passed: " + actual + ' === ' + expected);
  } else {
    console.log('🔴🔴🔴 Assertion Failed: ' + actual + ' !== ' + expected);
  }
};

assertEqual('Bootcamp', 'Bootcamp');
assertEqual(1, 3);
assertEqual('Day', 'Night');
assertEqual(5, 5);