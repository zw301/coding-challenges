// Given two strings s and t, determine if they are isomorphic.
//
// Two strings are isomorphic if the characters in s can be replaced to get t.
//
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
//
// Example 1:
//
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
//
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
//
// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let map = {};
  for (var i = 0; i < s.length; i++) {
    let c1 = s[i];
    let c2 = t[i];

    if (map[c1] === undefined) {
      map[c1] = c2;
    } else {
      if (map[c1] !== c2) {
        return false;
      }
    }
  }
  console.log(map)
  map = {};
  for (var i = 0; i < t.length; i++) {
    let c1 = t[i];
    let c2 = s[i];
    if (map[c1] === undefined) {
      map[c1] = c2;
    } else {
      if (map[c1] !== c2) {
        return false;
      }
    }
  }
  console.log(map)
  return true;
};
// console.log(isIsomorphic("egg", "add")); //true
// console.log(isIsomorphic("foo", "bar")); //false
// console.log(isIsomorphic("paper", "title")); //true
// console.log(isIsomorphic("ab", "aa")); //false
console.log(isIsomorphic("ab", "ca")); //true ????
