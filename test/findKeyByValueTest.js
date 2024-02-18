const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
    it("returns correct value for given key", () => {
        const bestTVShowsByGenre = {
            sci_fi: "The Expanse",
            comedy: "Brooklyn Nine-Nine",
            drama: "The Wire"
        };
        assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
        assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    })
})