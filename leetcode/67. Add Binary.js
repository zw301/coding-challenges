// Given two binary strings, return their sum (also a binary string).
//
// The input strings are both non-empty and contains only characters 1 or 0.
//
// Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let result = "";
  let carry = 0;

  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {
    let digit = 0;

    if (i >= 0) {
      digit += parseInt(a[i]);
      i--;
    }
    if (j >= 0) {
      digit += parseInt(b[j]);
      j--;
    }
    digit += carry;

    result = (digit % 2) + result;
    carry = Math.floor(digit / 2);
  }
  return result;
};

console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))
