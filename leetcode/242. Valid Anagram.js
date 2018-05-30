// Given two strings s and t , write a function to determine if t is an anagram of s.
//
// Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // const map = new Map();
  //
  // for (let i = 0; i < s.length; i++) {
  //   if (map.has(s[i])) {
  //     let val = map.get(s[i]);
  //     val++;
  //     map.set(s[i], val);
  //   } else {
  //     map.set(s[i], 1);
  //   }
  // }
  if (s.length !== t.length) return false;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = 1;
    } else {
      map[s[i]] += 1;
    }
  }

  for (var i = 0; i < t.length; i++) {
    if (map[t[i]] === undefined) {
      return false;
    } else {
      map[t[i]]--;
    }
  }

  for (let key in map) {
    if (map[key] !== 0) {
      return false;
    }
  }
  return true;
};
console.log(isAnagram("anagram", "nagaram")) //true
console.log(isAnagram("rat", "car")) //false
