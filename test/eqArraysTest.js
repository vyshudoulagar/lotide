const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
    it("returns true if arrays are equal", () => {
        assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    });
    it("returns false if arrays are not strictly equal", () => {
        assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
    });
    it("returns false if one array contains more elements", () => {
        assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
    });
})
