// Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.
//
// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).
//
// Note:
//
// s could be empty and contains only lowercase letters a-z.
// p could be empty and contains only lowercase letters a-z, and characters like ? or *.
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
// p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// Example 3:
//
// Input:
// s = "cb"
// p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
// Example 4:
//
// Input:
// s = "adceb"
// p = "*a*b"
// Output: true
// Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".
// Example 5:
//
// Input:
// s = "acdcb"
// p = "a*c?b"
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
    return allStar(p, pIndex);
  }

  if (memo[sIndex][pIndex] !== undefined) {
    return memo[sIndex][pIndex];
  }

  let match;
  if (p[pIndex] === "*") {
    match = isMatchHelper(s, sIndex, p, pIndex + 1, memo) ||
      isMatchHelper(s, sIndex + 1, p, pIndex, memo)
  } else {
    match = charMatch(s[sIndex], p[pIndex]) &&
      isMatchHelper(s, sIndex + 1, p, pIndex + 1, memo);
  }
  memo[sIndex][pIndex] = match;
  return match;
};

const charMatch = (sstr, pstr) => {
  return pstr === "?" || sstr === pstr;
};

const allStar = (p, pIndex) => {
  for (let i = pIndex; i < p.length; i++) {
    if (p[i] !== "*") {
      return false;
    }
  }
  return true;
};
