// Given a string, find the length of the longest substring T that contains at most k distinct characters.
//
// Example 1:
//
// Input: s = "eceba", k = 2
// Output: 3
// Explanation: T is "ece" which its length is 3.
// Example 2:
//
// Input: s = "aa", k = 1
// Output: 2
// Explanation: T is "aa" which its length is 2.
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  const map = new Map();

  let j = 0;
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    while (j < s.length) {
      let c = s[j];
      if (map.has(c)) {
        map.set(c, map.get(c) + 1);
      } else {
        if (map.size === k) {
          break;
        }
        map.set(c, 1);
      }
      j++;
    }
    maxLen = Math.max(maxLen, j - i);
    if (map.get(s[i]) > 1) {
      map.set(s[i], map.get(s[i]) - 1);
    } else {
      map.delete(s[i]);
    }
  }

  return maxLen;
};
