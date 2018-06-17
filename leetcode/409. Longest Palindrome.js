// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
//
// This is case sensitive, for example "Aa" is not considered a palindrome here.
//
// Note:
// Assume the length of given string will not exceed 1,010.
//
// Example:
//
// Input:
// "abccccdd"
//
// Output:
// 7
//
// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const hash = {};
    for (let i = 0; i < s.length; i++) {
      if (hash[s[i]] !== undefined) {
        hash[s[i]]++;
      } else {
        hash[s[i]] = 1;
      }
    }

    let count = 0;
    let plus = 0;
    for (let key in hash) {
      if (hash[key] % 2 === 0) {
        count += hash[key];
      } else {
        count += hash[key] - 1;
        plus = 1;
      }
    }
    return count + plus;
};
