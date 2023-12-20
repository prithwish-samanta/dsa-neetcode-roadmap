const isAnagram = require("../../src/arrays-and-hashing/validAnagram");

describe("#242 - Leetcode - Valid Anagram", () => {
  it("should return true for valid anagrams", () => {
    expect(isAnagram("listen", "silent")).toBe(true);
    expect(isAnagram("heart", "earth")).toBe(true);
    expect(isAnagram("abc", "bca")).toBe(true);
  });

  it("should return false for non-anagrams", () => {
    expect(isAnagram("hello", "world")).toBe(false);
    expect(isAnagram("abc", "def")).toBe(false);
  });

  it("should return false for strings of different lengths", () => {
    expect(isAnagram("abc", "abcd")).toBe(false);
    expect(isAnagram("abcd", "abc")).toBe(false);
  });

  it("should handle empty strings", () => {
    expect(isAnagram("", "")).toBe(true);
    expect(isAnagram("", "abc")).toBe(false);
    expect(isAnagram("abc", "")).toBe(false);
  });

  it("should handle different character cases", () => {
    expect(isAnagram("Listen", "silent")).toBe(true);
    expect(isAnagram("HeArt", "earth")).toBe(true);
  });

  it("should handle repeated characters", () => {
    expect(isAnagram("hello", "ollhe")).toBe(true);
    expect(isAnagram("aaa", "a")).toBe(false);
  });
});
