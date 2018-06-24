// A message containing letters from A-Z is being encoded to numbers using the following mapping:
//
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.
//
// Example 1:
//
// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:
//
// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s === null || s.length === 0) {
    return 0;
  }

  const len = s.length;
  const dp = new Array(len + 1).fill(0);

  dp[0] = 1;

  for (let i = 1; i <= len; i++) {
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }
    if (i >= 2) {
      let val = Number(s[i - 2]) * 10 + Number(s[i - 1]);
      if (val >= 10 && val <= 26) {
        dp[i] += dp[i - 2];
      }
    }
  }
  return dp[len];
};


console.log(numDecodings("000"));
