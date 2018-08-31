// Given a non-empty array of integers, return the k most frequent elements.
//
// Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
//
// Input: nums = [1], k = 1
// Output: [1]
// Note:
//
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {};
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] === undefined) {
      map[nums[i]] = 0;
    }
    map[nums[i]] += 1;
    maxCount = Math.max(maxCount, map[nums[i]]);
  }

  const bucket = new Array(maxCount + 1);
  for (let i = 0; i < bucket.length; i++) {
    bucket[i] = new Array();
  }

  for (let key in map) {
    let count = map[key];
    bucket[count].push(Number(key));
  }

  let result = [];
  let index = bucket.length - 1;
  while (result.length < k) {
    let curr = bucket[index];
    for (let i = 0; i < curr.length; i++) {
      result.push(curr[i]);
      if (result.length === k) {
        break;
      }
    }
    index--;
  }

  return result;
};
