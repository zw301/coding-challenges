// Given an array of integers, find if the array contains any duplicates.
//
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
//
// Example 1:
//
// Input: [1,2,3,1]
// Output: true
// Example 2:
//
// Input: [1,2,3,4]
// Output: false
// Example 3:
//
// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  if (nums === null || nums.length === 0) {
    return false;
  }
  let map = new Map();
  for (var i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], true);
    }
  }
  return false;
};

const nums1 = [1,2,3,1];
console.log(containsDuplicate(nums1)); //true

const nums2 = [1,2,3,4]
console.log(containsDuplicate(nums2)); //false

const nums3 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums3)); //true
