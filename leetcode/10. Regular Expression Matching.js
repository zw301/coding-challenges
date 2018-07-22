// Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
//
// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).
//
// Note:
//
// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like . or *.
// Example 1:
//
// Input:
// s = "aa"
// p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:
//
// Input:
// s = "aa"
// p = "a*"
// Output: true
// Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:
//
// Input:
// s = "ab"
// p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
// Example 4:
//
// Input:
// s = "aab"
// p = "c*a*b"
// Output: true
// Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
// Example 5:
//
// Input:
// s = "mississippi"
// p = "mis*is*p*."
// Output: false
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s === null && p === null) {
    return true;
  }
  if (s === null || p === null) {
    return false;
  }

  const memo = [];
  for (let i = 0; i < s.length; i++) {
    memo[i] = [];
    for (let j = 0; j < p.length; j++) {
      memo[i][j] = undefined;
    }
  }

  return isMatchHelper(s, 0, p, 0, memo);
};

const isMatchHelper = (s, sIndex, p, pIndex, memo) => {
  if (pIndex === p.length) {
    return sIndex === s.length;
  }
  if (sIndex === s.length) {
    return isEmpty(p, pIndex);
  }

  if (memo[sIndex][pIndex] !== undefined) {
    return memo[sIndex][pIndex];
  }

  let match;
  if (pIndex + 1 < p.length && p[pIndex + 1] === "*") {
    match = isMatchHelper(s, sIndex, p, pIndex + 2, memo) ||
      charMatch(s[sIndex], p[pIndex]) && isMatchHelper(s, sIndex + 1, p, pIndex, memo);
  } else {
    match = charMatch(s[sIndex], p[pIndex]) &&
      isMatchHelper(s, sIndex + 1, p, pIndex + 1, memo);
  }
  memo[sIndex][pIndex] = match;
  return match;

};

const charMatch = (schar, pchar) => {
  return schar === pchar || pchar === ".";
};

const isEmpty = (p, pIndex) => {
  for (let i = pIndex; i < p.length; i += 2) {
    if (i + 1 >= p.length || p[i + 1] !== "*") {
      return false;
    }
  }
  return true;
};
