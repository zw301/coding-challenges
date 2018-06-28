// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
//
// Example 1:
// Input: [1,4,3,2]
//
// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
// Note:
// n is a positive integer, which is in the range of [1, 10000].
// All the integers in the array will be in the range of [-10000, 10000].
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  if (nums === null || nums.length === 0) {
    return 0
  }

  partition(nums, 0, nums.length - 1);
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }
  return sum;
};

const partition = function(nums, lo, hi) {
  if (lo >= hi) {
    return;
  }

  let p = nums[lo];
  let lt = lo;
  let gt = hi;

  let i = lo + 1;
  while (i <= gt) {
    if (nums[i] < p) {
      swap(nums, i, lt);
      i++;
      lt++;
    } else if (nums[i] > p) {
      swap(nums, i, gt);
      gt--;
    } else {
      i++;
    }
  }
  partition(nums, lo, lt - 1);
  partition(nums, lt + 1, hi);
}

const swap = function(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

console.log(arrayPairSum([1,4,3,2]));
