// 62. Search in Rotated Sorted Array
// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//
// You are given a target value to search. If found in the array return its index, otherwise return -1.
//
// You may assume no duplicate exists in the array.
//
// Example
// For [4, 5, 1, 2, 3] and target=1, return 2.
//
// For [4, 5, 1, 2, 3] and target=0, return -1.
//
// Challenge
// O(logN) time
/**
 * @param A: an integer rotated sorted array
 * @param target: an integer to be searched
 * @return: an integer
 */
const search = function (nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

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
  } else if (nums[end] === target) {
    return end;
  } else {
    return -1;
  }
}

console.log(search([1, 2, 3], 1));
console.log(search([4, 5, 1, 2, 3], 0));
