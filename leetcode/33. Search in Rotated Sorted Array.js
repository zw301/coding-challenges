// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// Your algorithm's runtime complexity must be in the order of O(log n).
//
// Example 1:
//
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
//
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start + 1 < end) {
    mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[start] < nums[mid]) {
      // left part
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    } else {
      // right part
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid;
      } else {
        end = mid;
      }
    }
  }
  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }

  return -1;
};

var search = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (nums[start] < nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid;
      } else {
        end = mid;
      }
    }
  }

  if (nums[start] === target) {
    return start;
  }
  if (nums[end] === target) {
    return end;
  }

  return -1;
};

const nums = [4,5,6,7,0,1,2];
console.log(search(nums, 0));

console.log(search(nums, 3));
