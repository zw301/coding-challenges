// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
//
// Example 1:
//
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:
//
// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  const max = new Array(nums.length);
  const min = new Array(nums.length);

  max[0] = nums[0];
  min[0] = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= 0) {
      max[i] = Math.max(max[i - 1] * nums[i], nums[i]);
      min[i] = Math.min(min[i - 1] * nums[i], nums[i]);
    } else {
      max[i] = Math.max(min[i - 1] * nums[i], nums[i]);
      min[i] = Math.min(max[i - 1] * nums[i], nums[i]);
    }
    result = Math.max(result, max[i]);
  }

  return result;
};
