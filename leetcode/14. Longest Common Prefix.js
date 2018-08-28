// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:
//
// All given inputs are in lowercase letters a-z.
/**
 * @param {string[]} strs
 * @return {string}
 */

// Solution:
//
// Method 1:
// We set the entire string of the first input to be prefix.
// Go through the string array, check if the current string has such prefix. If not, decrease the length of prefix and try again.
// After going through the string array, the prefix left is the largest common prefix we are looking for.

var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) {
    return "";
  }
  let prev = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prev) !== 0) {
      prev = prev.slice(0, prev.length - 1);
    }
  }

  return prev;
};

// Method 2: sort
//
// We sort the string array first. Then check the first and last string.
// The prefix of these two is the longest one we are looking for.
var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) {
    return "";
  }

  strs.sort();

  let first = strs[0];
  let last = strs[strs.length - 1];

  let prefix = "";

  for (let i = 0; i < first.length; i++) {
    if (i < last.length && first[i] === last[i]) {
      prefix += first[i];
    } else {
      break;
    }
  }

  return prefix;
}


let strs1 = ["flower","flow","floight"];
let strs2 = ["dog","dracecar","dcar"];

console.log(longestCommonPrefix(strs1));
console.log(longestCommonPrefix(strs2));
