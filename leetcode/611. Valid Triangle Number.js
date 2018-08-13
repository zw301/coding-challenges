// Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
// Example 1:
// Input: [2,2,3,4]
// Output: 3
// Explanation:
// Valid combinations are:
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
// Note:
// The length of the given array won't exceed 1000.
// The integers in the given array are in the range of [0, 1000].
/**
 * @param {number[]} nums
 * @return {number}
 */

//最小的两边之和大于第三边
var triangleNumber = function(nums) {
  if (nums === null || nums.length < 3) {
    return 0;
  }

  let count = 0;
  nums.sort((a, b) => a - b);
  for (let i = 2; i < nums.length; i++) {
    let left = 0;
    let right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return count;
};
