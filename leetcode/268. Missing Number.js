// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
//
// Example 1:
//
// Input: [3,0,1]
// Output: 2
// Example 2:
//
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity.
// Could you implement it using only constant extra space complexity?
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;
    let sum = len * (len + 1) / 2;

    let missingSum = nums.reduce((acc, el) => acc + el, 0);

    return sum - missingSum;
};

var missingNumber = function(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
    xor ^= i;
  }
  return xor ^ nums.length;
};
