//
// Given a positive integer, return its corresponding column title as appear in an Excel sheet.
//
// For example:
//
//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB
//     ...
// Example 1:
//
// Input: 1
// Output: "A"
// Example 2:
//
// Input: 28
// Output: "AB"
// Example 3:
//
// Input: 701
// Output: "ZY"

/**
 * @param {number} n
 * @return {string}
 */

var convertToTitle2 = function(n) {
  let result = "";

  while (n > 0) {
    n--;
    result = String.fromCharCode("A".charCodeAt(0) + n % 26) + result;
    n = Math.floor(n / 26);
  }

  return result;
}

var convertToTitle = function(n) {
  let dic = "abcdefghijklmnopqrstuvwxyz".toUpperCase();

  let result = "";
  while (n > 0) {
    n -= 1;
    result = dic[n % 26] + result;
    n = Math.floor(n / 26);
  }

  return result;
}

console.log(convertToTitle(26))
console.log(convertToTitle(701))
