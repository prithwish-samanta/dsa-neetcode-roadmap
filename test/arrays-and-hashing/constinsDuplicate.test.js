const containsDuplicate = require("../../src/arrays-and-hashing/containsDuplicate");

describe("#217 - LeetCode - Contains Duplicate", () => {
  it("should return true if the array contains duplicate elements", () => {
    const nums = [1, 2, 3, 1];
    const result = containsDuplicate(nums);
    expect(result).toBe(true);
  });

  it("should return false if the array does not contain duplicate elements", () => {
    const nums = [1, 2, 3, 4];
    const result = containsDuplicate(nums);
    expect(result).toBe(false);
  });

  it("should return false for an empty array", () => {
    const nums = [];
    const result = containsDuplicate(nums);
    expect(result).toBe(false);
  });

  it("should handle negative numbers and zero", () => {
    const nums = [-1, 0, 2, -1, -4];
    const result = containsDuplicate(nums);
    expect(result).toBe(true);
  });

  it("should handle floating-point numbers", () => {
    const nums = [1.1, 2.2, 3.3, 1.1];
    const result = containsDuplicate(nums);
    expect(result).toBe(true);
  });
});
