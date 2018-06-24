// Description
// Given a mountain sequence of n integers which increase firstly and then decrease, find the mountain top.
//
// Have you met this question in a real interview?
// Example
// Given nums = [1, 2, 4, 8, 6, 3] return 8
// Given nums = [10, 9, 8, 7], return 10
/**
 * @param nums: a mountain sequence which increase firstly and then decrease
 * @return: then mountain top
 */
const mountainSequence = function (nums) {
  if (nums === null || nums.length === 0) {
    return null;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] < nums[mid + 1]) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (nums[start] > nums[end]) {
    return nums[start];
  } else {
    return nums[end];
  }
}

console.log(mountainSequence([1, 2, 4, 8, 6, 3]));
console.log(mountainSequence([10, 9, 8, 7]));
