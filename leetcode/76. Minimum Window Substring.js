// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).
//
// Example:
//
// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:
//
// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

const initTargetMap = function(targetMap, t) {
  for (let i = 0; i < t.length; i++) {
    targetMap[t.charCodeAt(i)]++;
  }
}

const isValid = function(sourceMap, targetMap) {
  for (let i = 0; i < 256; i++) {
    if (sourceMap[i] < targetMap[i]) {
      return false;
    }
  }
  return true;
}
var minWindow = function(s, t) {
  let minStr = "";
  let minLen = Infinity;

  const sourceMap = new Array(256).fill(0);
  const targetMap = new Array(256).fill(0);
  initTargetMap(targetMap, t);

  let j = 0;
  for (let i = 0; i < s.length; i++) {
    while (j < s.length && !isValid(sourceMap, targetMap)) {
      sourceMap[s.charCodeAt(j)]++;
      j++;
    }
    if (isValid(sourceMap, targetMap)) {
      if (minLen > j - i) {
        minLen = j - i;
        minStr = s.substring(i, j);
      }
    }
    sourceMap[s.charCodeAt(i)]--;
  }

  return minStr;
};
