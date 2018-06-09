// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
  let map = {};
  let max = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined && start <= map[s[i]]) {
      start = map[s[i]] + 1;
    }
    map[s[i]] = i;
    max = Math.max(max, i - start + 1);
  }
  return max;
}
