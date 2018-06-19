// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Determine if you are able to reach the last index.
//
// Example 1:
//
// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:
//
// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i <= maxReach) {
      maxReach = Math.max(i + nums[i], maxReach);
      if (maxReach >= nums.length - 1) {
        return true;
      }
    }
  }
  return false;
};

var canJump = function(nums) {
  const dp = new Array(nums.length);

  dp[0] = true;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = false;

    for (let j = 0; j < i; j++) {
      if (dp[j] && j + nums[j] >= i) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[nums.length - 1];
}
