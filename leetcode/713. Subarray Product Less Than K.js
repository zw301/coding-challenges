//
// Your are given an array of positive integers nums.
//
// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.
//
// Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Note:
//
// 0 < nums.length <= 50000.
// 0 < nums[i] < 1000.
// 0 <= k < 10^6.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 滑动窗口的解法，维护一个数字乘积刚好小于k的滑动窗口窗口，用变量left来记录其左边界的位置，右边界i就是当前遍历到的位置。
// 遍历原数组，用prod乘上当前遍历到的数字，然后进行while循环，如果prod大于等于k，
// 则滑动窗口的左边界需要向右移动一位，删除最左边的数字，那么少了一个数字，乘积就会改变，
// 所以用prod除以最左边的数字，然后左边右移一位，即left自增1。当我们确定了窗口的大小后，
// 就可以统计子数组的个数了，就是窗口的大小。为啥呢，比如[5 2 6]这个窗口，k还是100，
// 右边界刚滑到6这个位置，这个窗口的大小就是包含6的子数组乘积小于k的个数，即[6], [2 6], [5 2 6]，
// 正好是3个。所以窗口每次向右增加一个数字，然后左边去掉需要去掉的数字后，窗口的大小就是新的子数组的个数，
// 每次加到结果count中即可
var numSubarrayProductLessThanK = function(nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  if (k <= 1) {
    return 0;
  }

  let product = 1;
  let count = 0;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    product *= nums[i];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    count += i - left + 1;
  }

  return count;
};
