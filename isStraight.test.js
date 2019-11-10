const assert = require("assert");
const isStraight = require("./isStraight");

describe("isStraight", () => {
  describe("when there's a Stair present", () => {
    it("should return 'Stair!' message", () => {
      assert.equal(isStraight([2, 3, 4, 5, 6]), "Stair!");
      assert.equal(isStraight([14, 5, 4, 2, 3]), "Stair!");
    });
  });

  describe("when there's a Stair present", () => {
    it("should return 'No Stair' message", () => {
      assert.equal(isStraight([7, 7, 12, 11, 3, 4, 14]), "No Stair");
      assert.equal(isStraight([7, 3, 2]), "No Stair");
    });
  });
});
