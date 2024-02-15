const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
    it("returns ['Lighthouse', 'Labs'] for ['yo yo', 'Lighthouse', 'Labs']", () => {
        assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),['Lighthouse', 'Labs']);
    });
    it("has arraylength of 2 for tail(['yo yo', 'Lighthouse', 'Labs'])", () => {
        assert.strictEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);
    });
    it("returns [] for ['Hello']", () => {
        assert.deepEqual(tail(["Hello"]),[]);
    });
    it("has arraylength of 0 for tail(['Hello'])", () => {
        assert.strictEqual(tail(['Hello']).length, 0);
    });
})





/*const words = tail(["Yo Yo", "Lighthouse", "Labs"]);
assertEqual(words.length, 2); // check if array length is 2
assertEqual(words[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[1], "Labs");

const words1 = ["Hello"];
tail(words1);
assertEqual(words1.length, 1);
assertEqual(tail(words1).length, 0);

const words2 = [];
tail(words2)
assertEqual(words2.length, 0);*/