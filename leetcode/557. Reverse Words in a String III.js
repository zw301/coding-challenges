//
// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
//
// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let arr = s.split("");
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      reverse(arr, start, i - 1);
      start = i + 1;
    }
  }
  reverse(arr, start, arr.length - 1);
  return arr.join("");
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

const s = "Let's take LeetCode contest";

console.log(reverseWords(s));
