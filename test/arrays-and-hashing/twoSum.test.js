const twoSum = require("../../src/arrays-and-hashing/twoSum");

describe("twoSum", () => {
  it("should find indices of two numbers that add up to the target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    expect(twoSum([1, 5, 9, 12, 15], 21)).toEqual([2, 3]);
  });

  it("should handle negative numbers and zero", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    expect(twoSum([-1, 0, 1], 0)).toEqual([0, 2]);
  });

  it("should handle duplicate numbers", () => {
    expect(twoSum([2, 2, 3, 4, 5], 4)).toEqual([0, 1]);
    expect(twoSum([1, 1], 2)).toEqual([0, 1]);
  });

  it("should return [-1, -1] if no such indices are found", () => {
    expect(twoSum([1, 2, 3, 4], 10)).toEqual([-1, -1]);
    expect(twoSum([5, 6, 7, 8], 3)).toEqual([-1, -1]);
  });

  it("should handle an empty array", () => {
    expect(twoSum([], 10)).toEqual([-1, -1]);
  });
});
