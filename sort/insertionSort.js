// Insertion Sort : 在i这个位置，把i之前的包括i都排好序。
//
// PROPERTIES:
// Stable
// O(1) extra space
// O(n2) comparisons and swaps
// Adaptive: O(n) time when nearly sorted
// Very low overhead

function insertionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        exch(nums, j, j - 1);
      } else{
        break;
      }
    }
  }
  return nums;
}

function exch(nums, i, j) {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}


console.log(insertionSort([7, 10, 5, 3, 8, 4]));
