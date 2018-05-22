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
var convertToTitle = function(n) {
  if (n === 0) {
    return "Z";
  }
  let dic = "zabcdefghijklmnopqrstuvwxy".toUpperCase();
  // const map = {};
  // for (var i = 0; i < dic.length; i++) {
  //   map[i] = dic[i];
  // }
  //
  // return map

  let result = "";

  while (n > 1) {
    // if (n === 1) {
    //   return result + dic[1];
    // }
    result = dic[n % 26] + result;
    // n = n - 26 * (n - n % 26) / 26;
    // n = n - 26 * Math.floor(n / 26);
    n = Math.floor(n / 26)
  }

  return result;
};

var convertToTitle = function(n) {
  let dic = "zabcdefghijklmnopqrstuvwxy".toUpperCase();
  if (n < 26) {
    return dic[n];
  }
  let result = "";

  while (n > 0) {
    result = dic[n % 26] + result;
    n = Math.floor(n / 26);
  }
  return result;
};

console.log(convertToTitle(26))
