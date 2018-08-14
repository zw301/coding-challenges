// Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.
//
// Example 1:
// Input: [1,2,3,4,5], k=4, x=3
// Output: [1,2,3,4]
// Example 2:
// Input: [1,2,3,4,5], k=4, x=-1
// Output: [1,2,3,4]
// Note:
// The value k is positive and will always be smaller than the length of the sorted array.
// Length of the given array is positive and will not exceed 104
// Absolute value of elements in the array and x will not exceed 104
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

 var findClosestElements = function(arr, k, x) {
     let start = 0;
     let end = arr.length - 1;

     while (start < end) {
         let mid = start + Math.floor((end - start) / 2);
         if (x - arr[mid] > arr[mid + k] - x) {
             start = mid + 1;
         } else {
             end = mid;
         }
     }

     return arr.slice(start, end + k);
 };

 
var findClosestElements = function(arr, k, x) {
  if (arr === null || arr.length === 0) {
    return [];
  }
  if (arr.length < k) {
    return arr;
  }

  let index = findIndex(arr, x);
  let left = Math.max(0, index - k);
  let right = Math.min(arr.length - 1, index + k - 1);

  while (right - left + 1 > k) {
    if (left < 0 || (x - arr[left] <= arr[right] - x)) {
      right--;
    } else if (right >= arr.length || (x - arr[left] > arr[right] - x)) {
      left++;
    }
  }

  return arr.slice(left, right + 1);
};

function findIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  let left, right;
  if (arr[start] >= target) {
    return start
  } else {
    return end;
  }
}

console.log(findClosestElements([1,2,3,4,5], 4, 3)); //[1,2,3,4]
console.log(findClosestElements([1,2,3,4,5], 4, -1)); //[1,2,3,4]
