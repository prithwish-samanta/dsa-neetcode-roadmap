/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * @Link https://leetcode.com/problems/valid-anagram/
 */

// time complexity: O(nlog(n))
// space complexity: O(n)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map1 = new Map();
  let map2 = new Map();
  for (let i = 0; i < s.length; ++i) {
    map1.set(s[i].toLowerCase(), (map1.get(s[i]) || 0) + 1);
    map2.set(t[i].toLowerCase(), (map2.get(t[i]) || 0) + 1);
  }
  let keys = [...map1.keys()];
  for (let i = 0; i < keys.length; ++i) {
    if (map1.get(keys[i]) !== map2.get(keys[i])) return false;
  }
  return true;
};

module.exports = isAnagram;
