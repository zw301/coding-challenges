// Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.
//
// Example 1:
//
// Input: "eceba"
// Output: 3
// Explanation: t is "ece" which its length is 3.
// Example 2:
//
// Input: "ccaabbb"
// Output: 5
// Explanation: t is "aabbb" which its length is 5.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
  const map = new Map();

  let maxLen = 0;
  let j = 0;

  for (let i = 0; i < s.length; i++) {
    while (j < s.length) {
      let c = s[j];
      if (map.has(c)) {
        map.set(c, map.get(c) + 1);
      } else {
        if (map.size === 2) {
          break;
        }
        map.set(c, 1);
      }
      j++;
    }
    maxLen = Math.max(maxLen, j - i);
    let char = s[i];
    if (map.get(char) > 1) {
      map.set(char, map.get(char) - 1);
    } else {
      map.delete(char);
    }
  }
  return maxLen;
};
