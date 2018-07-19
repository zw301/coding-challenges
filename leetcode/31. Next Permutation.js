// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
//
// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
//
// The replacement must be in-place and use only constant extra memory.
//
// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
//
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1
//
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let len = nums.length;

  if (len <= 1) {
    return;
  }

  let i = len - 1;
  while (i > 0 && nums[i] <= nums[i - 1]) {
    i--;
  }

  if (i !== 0) {
    let j = len - 1;
    while (nums[j] <= nums[i - 1]) {
      j--;
    }

    swapItem(nums, j, i - 1);
  }
  swapList(nums, i, len - 1);
};

const swapItem = (nums, i, j) => {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}

const swapList = (nums, i, j) => {
  while (i < j) {
    swapItem(nums, i, j);
    i++;
    j--;
  }
}
