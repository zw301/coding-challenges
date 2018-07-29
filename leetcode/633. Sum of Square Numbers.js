// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.
//
// Example 1:
// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5
// Example 2:
// Input: 3
// Output: False
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
  for (let a = 0; a * a <= c; a++) {
    let target = c - a * a;
    if (Number.isInteger(Math.sqrt(target))) {
      return true;
    }
  }
  return false;
}
