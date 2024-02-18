const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
    it("returns true if objects are equal", () => {
        const shirtObject = { color: "red", size: "medium" };
        const anotherShirtObject = { size: "medium", color: "red" };
        assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true);
    });
    it("returns false if one object have more keys", () => {
        const shirtObject = { color: "red", size: "medium" };
        const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
        assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
    });
    it("returns true even if object's keys are not in order", () => {
        const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
        const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
        assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
    });
})