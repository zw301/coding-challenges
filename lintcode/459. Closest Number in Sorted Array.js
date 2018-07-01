// 459. Closest Number in Sorted Array
// Given a target number and an integer array A sorted in ascending order, find the index i in A such that A[i] is closest to the given target.
//
// Return -1 if there is no element in the array.
//
// Example
// Given [1, 2, 3] and target = 2, return 1.
//
// Given [1, 4, 6] and target = 3, return 1.
//
// Given [1, 4, 6] and target = 5, return 1 or 2.
//
// Given [1, 3, 3, 4] and target = 2, return 0 or 1 or 2.
//
// Challenge
// O(logn) time complexity.

const closestNumber = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target){
      start = mid;
    } else {
      end = mid;
    }
  }

  console.log({start, end});
  if (Math.abs(start - target) < Math.abs(end - start)) {
    return start;
  } else {
    return end;
  }
}


console.log(closestNumber([1, 2, 3]), 1); // 1
console.log(closestNumber([1, 4, 6]), 1); // 1
console.log(closestNumber([1, 3, 6]), 5); // 1 or 2.
console.log(closestNumber([1, 3, 3, 4]), 2); // 0 or 1 or 2.
