// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
//
// Example 1:
//
// Input: [1,3,5,6], 5
// Output: 2
// Example 2:
//
// Input: [1,3,5,6], 2
// Output: 1
// Example 3:
//
// Input: [1,3,5,6], 7
// Output: 4
// Example 4:
//
// Input: [1,3,5,6], 0
// Output: 0
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  if (target < nums[0]) {
    return 0;
  }
  if (target > nums[nums.length - 1]) {
    return nums.length
  }

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (nums[start] >= target) {
    return start;
  }
  return end;
}


//5.27 find the first item greater or equal to target
var searchInsert = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  if (nums[0] > target) {
    return 0;
  }
  if (nums[nums.length - 1] < target) {
    return nums.length;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (nums[start] >= target) {
    return start;
  } else {
    return end;
  }
}

console.log(searchInsert([1,3,5,6], 5)) //2
console.log(searchInsert([1,3,5,6], 2)) //1
console.log(searchInsert([1,3,5,6], 7)) //4
console.log(searchInsert([1,3,5,6], 0)) //0
