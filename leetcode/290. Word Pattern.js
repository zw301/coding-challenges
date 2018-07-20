// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Example 1:
//
// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:
//
// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:
//
// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:
//
// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function(pattern, str) {
  if (pattern.length === 0) {
    return str.length === 0;
  }

  const strArr = str.split(" ");
  if (pattern.length !== strArr.length) {
    return false;
  }

  const map = {};
  const set = new Set();

  for (let i = 0; i < strArr.length; i++) {
    if (map[pattern[i]] === undefined) {
      if (set.has(strArr[i])) {
        return false;
      }
      map[pattern[i]] = strArr[i];
      set.add(strArr[i]);
    } else if (map[pattern[i]] !== strArr[i]){
      return false;
    }
  }
  return true;
};

var wordPattern = function(pattern, str) {
  if (!pattern || !str) {
    return false;
  }

  const strArr = str.split(" ");
  if (pattern.length !== strArr.length) {
    return false;
  }

  const patternToStr = {};
  const strToPattern = {};
  for (let i = 0; i < strArr.length; i++) {
    let p = pattern[i];
    let s = strArr[i];
    if (patternToStr[p] === undefined) {
      patternToStr[p] = s;
    } else {
      if (patternToStr[p] !== s) {
        return false;
      }
    }

    if (strToPattern[s] === undefined) {
      strToPattern[s] = p;
    } else {
      if (strToPattern[s] !== p) {
        return false;
      }
    }
  }
  return true;
}
