// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
//
// Example 1:
//
// Input: [1,2,3,1], k = 3
// Output: true
// Example 2:
//
// Input: [1,0,1,1], k = 1
// Output: true
// Example 3:
//
// Input: [1,2,1], k = 0
// Output: false
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// Time Limit Exceeded
var containsNearbyDuplicate = function(nums, k) {
  if (nums === null || nums.length === 0 || k <= 0) {
    return false;
  }

  for (let i = 0; i < nums.length; i++) {
    for (var j = 1; j <= k; j++) {
      if (nums[i] === nums[j + i]) {
        return true;
      }
    }
  }
  return false;
};


var containsNearbyDuplicate = function(nums, k) {
  if (nums === null || nums.length === 0 || k <= 0) {
    return false;
  }

  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true;
    set.add(nums[i]);
    if (set.size > k) {
       set.delete(nums[i - k]);
    }
  }
  return false;
}

const nums1 = [1,2,3,1];
console.log(containsNearbyDuplicate(nums1, 3)); //true

const nums2 = [1,0,1,1];
console.log(containsNearbyDuplicate(nums2, 1)); //true

const nums3 = [1,2,1];
console.log(containsNearbyDuplicate(nums3, 0)); //false
