// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"
var longestPalindrome = function(s) {
  if (s === null || s.length === 0) {
    return "";
  }

  let maxSub = "";
  for (let i = 0; i < s.length; i++) {
    let odd = extend(s, i, i);
    let even = extend(s, i, i + 1);

    if (odd.length > maxSub.length) {
      maxSub = odd;
    }
    if (even.length > maxSub.length) {
      maxSub = even;
    }
  }
  return maxSub;
}

function extend(s, i, j) {
  while (i >= 0 && j < s.length) {
    if (s[i] !== s[j]) {
      break;
    }
    i--;
    j++;
  }
  return s.slice(i + 1, j)
}
