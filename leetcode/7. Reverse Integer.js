// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = 1;
    if (x < 0) {
      sign = -1;
    }

    let num = Math.abs(x);
    let result = 0;
    while (num > 0) {
      result = result * 10 + num % 10;
      num = Math.floor(num / 10);
    }

    if (result > Math.pow(2, 31)) {
      return 0;
    }
    return result * sign;
};
