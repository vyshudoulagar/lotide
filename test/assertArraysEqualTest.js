const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);
assertArraysEqual([2, 5, 3, 4], [2, 5, 3, 4]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);