// Given an input string, reverse the string word by word.
//
// Example:
//
// Input: "the sky is blue",
// Output: "blue is sky the".
// Note:
//
// A word is defined as a sequence of non-space characters.
// Input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
// You need to reduce multiple spaces between two words to a single space in the reversed string.
// Follow up: For C programmers, try to solve it in-place in O(1) space.
/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  const arr = str.split(" ");
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length > 0) {
      result += arr[i] + " ";
    }
  }
  return result;
};

function reverse(arr, i, j) {
  while (i < j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
    j--;
  }
  return arr;
}


const s1 = "   ab  cde   ";
const s2 = " ";
const s3 = "";
// console.log(reverseWords(s1));
console.log(`-${reverseWords(s2)}-`);
// console.log(reverseWords(`-${s3}-`));
