// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums === null || nums.length === 0) {
    return [];
  }

  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) {
      continue;
    }
    twoSum(nums, i, result, -nums[i]);
  }

  return result;
};

function twoSum(nums, i, result, target) {
  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      let curr = [];
      curr.push(-target);
      curr.push(nums[left]);
      curr.push(nums[right]);
      result.push(curr);
      left++;
      right--;
      while (left < right && nums[left] === nums[left - 1]) {
        left++;
      }
      while (left < right && nums[right] === nums[right + 1]) {
        right--;
      }
    } else if (nums[left] + nums[right] < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
