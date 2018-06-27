//
// Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
//
// Note:
//
// The solution set must not contain duplicate quadruplets.
//
// Example:
//
// Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
//
// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return [];
  }

  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      twoSum(nums, i, j, target - nums[i] - nums[j], result);
    }
  }
  return result;
};

const twoSum = function(nums, i, j, target, result) {
  let left = j + 1;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] === target) {
      let tmp = [];
      tmp.push(nums[i]);
      tmp.push(nums[j]);
      tmp.push(nums[left]);
      tmp.push(nums[right]);
      result.push(tmp);

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

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
