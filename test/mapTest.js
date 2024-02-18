const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
    it("returns first letter of words for word[0]", () => {
        const words = ["ground", "control", "to", "major", "tom"];
        const results1 = map(words, word => word[0]);
        assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
    });
    it("returns length of words for word.length", () => {
        const words1 = ["Apple", "Banana", "Carrot", "Donut", "Eggplant"];
        const results2 = map(words1, word => word.length);
        assert.deepEqual(results2, [5, 6, 6, 5, 8]);
    });
})