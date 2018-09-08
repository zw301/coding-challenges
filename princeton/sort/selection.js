// Selection Sort : 选择i后面所有数字里最小的，放在i这个位置上。
//
// PROPERTIES:
// Not stable
// O(1) extra space
// Θ(n2) comparisons
// Θ(n) swaps
// Not adaptive

function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
      exch(nums, i, min);
    }
  }
  return nums;
}

function exch(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}


console.log(selectionSort([7, 10, 5, 3, 8, 4]))
