const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
    it("returns object with count of each letter in the sentence", () => {
        assert.deepEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
        assert.deepEqual(
            countLetters("Good Morning! Have a nice Day."),
            {
                G: 1,
                o: 3,
                d: 1,
                M: 1,
                r: 1,
                n: 3,
                i: 2,
                g: 1,
                '!': 1,
                H: 1,
                a: 3,
                v: 1,
                e: 2,
                c: 1,
                D: 1,
                y: 1,
                '.': 1
            }
        );
    });
})