// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
//
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
//
// You may assume the integer does not contain any leading zero, except the number 0 itself.
//
// Example 1:
//
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:
//
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//   let result = [];
//   let carry = 0;
//
//   let i = digits.length - 1;
//
//   while (i >= 0 || carry !== 0) {
//     let digit = 0;
//     if (i >= 0) {
//       digit = digits[i];
//     }
//     if (i === digits.length - 1) {
//       digit += 1;
//     }
//
//     digit += carry;
//     result.unshift(digit % 10);
//     carry = Math.floor(digit / 10);
//     i--;
//   }
//   return result;
//
// };

function plusOne(digits) {
  let i = digits.length - 1;

  while (i >= 0) {
    if (digits[i] !== 9) {
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
    i--;
  }
  const result = new Array(digits.length + 1).fill(0);
  result[0] = 1;
  return result;
};

console.log(plusOne([1,9]))
