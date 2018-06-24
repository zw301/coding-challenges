// Description
// Find the last position of a target number in a sorted array. Return -1 if target does not exist.
//
// Example
// Given [1, 2, 2, 4, 5, 5].
//
// For target = 2, return 2.
//
// For target = 5, return 5.
//
// For target = 6, return -1.
/**
 * @param nums: An integer array sorted in ascending order
 * @param target: An integer
 * @return: An integer
 */
const lastPosition = function (nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] <= target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (nums[end] === target) {
    return end;
  } else if (nums[start] === target) {
    return start;
  } else {
    return -1;
  }
}

console.log(lastPosition([1, 2, 2, 4, 5, 5], 2));
console.log(lastPosition([1, 2, 2, 4, 5, 5], 5));
