// Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
//
// Example:
//
// Input: nums = [3,5,2,1,6,4]
// Output: One possible answer is [3,5,1,6,2,4]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 // Solution:
 // The output array should meet these two conditions:
 // 1. If index is odd, nums[index] >= nums[i- 1].
 // 2. If index is even, nums[index] <= nums[i- 1].
 // Therefore, we go through the input array and at each index we check the above conditions.
 // If nums[i] does not meet the conditions, we swap it with the previous number.
 // By doing this, all the elements ahead of nums[i] still satisfy the conditions.
 // The time complexity is O(n).
 
var wiggleSort = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    if ((i % 2 === 0 && nums[i] > nums[i - 1]) ||
        (i % 2 === 1 && nums[i] < nums[i - 1])) {
          let swap = nums[i];
          nums[i] = nums[i - 1];
          nums[i - 1] = swap;
        }
  }
};
