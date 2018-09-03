// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

//
// Example:
//
// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.
// Follow up:
// If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  let sum = 0;
  let i = 0;
  let j = 0;
  let result = Infinity;
  for (i = 0; i < nums.length; i++) {
    while (j < nums.length && sum < s) {
      sum += nums[j];
      j++;
    }
    if (sum >= s) {
      result = Math.min(result, j - i);
    }
    sum -= nums[i];
  }

  if (result === Infinity) {
    return 0;
  }
  return result;
};
