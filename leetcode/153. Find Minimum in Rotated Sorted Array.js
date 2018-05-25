// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//
// (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
//
// Find the minimum element.
//
// You may assume no duplicate exists in the array.
//
// Example 1:
//
// Input: [3,4,5,1,2]
// Output: 1
// Example 2:
//
// Input: [4,5,6,7,0,1,2]
// Output: 0
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let start = 0;
  let end = nums.length - 1;
  let target = nums[nums.length - 1];

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] > target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (nums[start] <= target) {
    return nums[start];
  } else {
    return nums[end];
  }
};

const arr1 = [3,4,5,1,2];
console.log(findMin(arr1))

const arr2 = [4,5,6,7,0,1,2]
console.log(findMin(arr2))
