// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
//
// Example:
//
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:
//
// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let min = 0;
  let max = -Infinity;

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum - min);
    min = Math.min(min, sum);
  }
  return max;
};

var maxSubArray = function(nums) {
  let localMax = nums[0];
  let globalMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    localMax = Math.max(localMax + nums[i], nums[i]);
    globalMax = Math.max(localMax, globalMax);
  }
  return globalMax;
};

const nums1 = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums1));
