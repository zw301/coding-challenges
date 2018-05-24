// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// If the target is not found in the array, return [-1, -1].
//
// Example 1:
//
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
//
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return [-1, -1];
  }

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] >= target) {
      end = mid;
    } else {
      start = mid;
    }
  }

  let first = -1;
  let last = -1;

  if (nums[start] === target) {
    first = start;
  } else if (nums[end] === target) {
    first = end;
  } else {
    return [-1, -1]
  }

  start = 0;
  end = nums.length -1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] <= target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (nums[end] === target) {
    last = end;
  } else if (nums[start] === target){
    last = start;
  }

  return [first, last];
};
