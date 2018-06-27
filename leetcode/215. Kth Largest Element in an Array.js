// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
//
// Example 1:
//
// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:
//
// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note:
// You may assume k is always valid, 1 ≤ k ≤ array's length.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (nums === null || nums.length === 0 || k <= 0) {
    return -1;
  }

  k = nums.length - k;
  partition(nums, 0, nums.length - 1, k)

  return nums[k];
};

function partition(nums, lo, hi, pos) {
  if (hi <= lo) {
    return;
  }

  let lt = lo;
  let gt = hi;
  let i = lo;
  let pivot = nums[lo];

  while (i <= gt) {
    if (nums[i] < pivot) {
      exch(nums, i, lt);
      i++;
      lt++;
    } else if (nums[i] > pivot) {
      exch(nums, i, gt);
      gt--;
    } else {
      i++;
    }
  }

  if (lt < pos) {
    partition(nums, lt + 1, hi, pos)
  }

  if (lt > pos) {
    partition(nums, lo, lt - 1, pos);
  }

  function exch(nums, x, y) {
    let tmp = nums[x];
    nums[x] = nums[y];
    nums[y] = tmp;
  }
}

const nums1 = [3,2,1,5,6,4];
const nums2 = [3,2,3,1,2,4,5,5,6];

console.log(findKthLargest(nums1, 2));
console.log(findKthLargest(nums2, 4));
