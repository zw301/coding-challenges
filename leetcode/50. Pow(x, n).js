// Implement pow(x, n), which calculates x raised to the power n (xn).
//
// Example 1:
//
// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:
//
// Input: 2.10000, 3
// Output: 9.26100
// Example 3:
//
// Input: 2.00000, -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25
// Note:
//
// -100.0 < x < 100.0
// n is a 32-bit signed integer, within the range [−231, 231 − 1]
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//   if (n === 0) return 1;
//   if (n > 0) {
//     return myPow(x, n - 1) * x;
//   }
//   if (n < 0) {
//     return myPow(x, n + 1) * 1 / x;
//   }
// };

// var myPow = function(x, n) {
//   if (n === 0) return 1;
//   let pow;
//   if (n > 0) {
//     pow = myPow(x, Math.floor(n / 2));
//   } else {
//     pow = myPow(x, Math.ceil(n / 2));
//   }
//
//   if (n % 2 === 0) {
//     return pow * pow;
//   }
//
//   return n > 0 ? pow * pow * x : pow * pow * 1 / x;
// }

// 8.27
var myPow = function(x, n) {
    if (n === 0) {
        return 1;
    }

    let pow = myPow(x, Math.trunc(n / 2));

    if (n % 2 === 0) {
        return pow * pow;
    }

    return n > 0 ? pow * pow * x : pow * pow / x;
 };

var myPow2 = function(x, n) {
  let res = 1;
  let positiveN = Math.abs(n);
  while (positiveN > 0) {
    if (positiveN % 2 === 1) {
      res *= x;
    }
    positiveN = Math.floor(positiveN / 2);
    x *= x;
  }
  return n > 0 ? res : 1 / res;
}

console.log(myPow(2.00000, 10));
console.log(myPow(2.10000, 3));
console.log(myPow(2.00000, -2));
