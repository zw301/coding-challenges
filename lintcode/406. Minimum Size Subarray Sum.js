// Description
// Given an array of n positive integers and a positive integer s, find the minimal length of a subarray of which the sum ≥ s. If there isn't one, return -1 instead.
//
// Have you met this question in a real interview?
// Example
// Given the array [2,3,1,2,4,3] and s = 7, the subarray [4,3] has the minimal length under the problem constraint.
//
// Challenge
// If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n).
const minimumSize = function (nums, s) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  let left = 0;
  let right = 0;

  let min = Infinity;
  let sum = 0;

  while (left < nums.length) {
    while (right < nums.length && sum < s) {
      sum += nums[right];
      right++;
    }
    if (sum >= s) {
      min = Math.min(min, right - left);
    }
    sum -= nums[left];
    left++;
  }
  return min === Infinity ? -1 : min;
}
