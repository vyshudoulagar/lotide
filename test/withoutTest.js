const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
    it("return an array without elements in second array", () => {
        assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
    });
    it("return an array without elements in second array ignoring elements it does not include", () => {
        assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
    });
    it("return an empty array when both arrays have same elements", () => {
        assert.deepEqual(without([1, 2, 3, 4], [1, 2, 3, 4]), []);
    });
})