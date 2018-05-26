// Given an input string , reverse the string word by word.
//
// Example:
//
// Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
// Note:
//
// A word is defined as a sequence of non-space characters.
// The input string does not contain leading or trailing spaces.
// The words are always separated by a single space.
// Follow up: Could you do it in-place without allocating extra space?
//
/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
var reverseWords = function(str) {
  reverse(str, 0, str.length - 1);
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      reverse(str, start, i - 1);
      start = i + 1;
    }
  }
  if (start !== str.length) {
    reverse(str, start, str.length - 1);
  }
  return str;
};

function reverse(arr, i, j) {
  while (i < j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    i++;
    j--;
  }
}
const arr = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"];

console.log(reverseWords(arr));
