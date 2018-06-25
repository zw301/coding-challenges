// 159. Find Minimum in Rotated Sorted Array
// Suppose a sorted array is rotated at some pivot unknown to you beforehand.
//
// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
//
// Find the minimum element.
//
// Example
// Given [4, 5, 6, 7, 0, 1, 2] return 0
/**
 * @param nums: a rotated sorted array
 * @return: the minimum number in the array
 */
const findMin = function (nums) {
  if (nums === null || nums.length === 0) {
    return null;
  }

  let start = 0;
  let end = nums.length - 1;
  let target = nums[nums.length - 1];

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] < target) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (nums[start] < target) {
    return nums[start];
  } else {
    return nums[end];
  }
}

console.log(findMin([4, 5, 6, 7, 1, 2]));
