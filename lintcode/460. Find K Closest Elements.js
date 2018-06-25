// Description
// Given a target number, a non-negative integer k and an integer array A sorted in ascending order, find the k closest numbers to target in A, sorted in ascending order by the difference between the number and target. Otherwise, sorted in ascending order by number if the difference is same.
//
// The value k is a non-negative integer and will always be smaller than the length of the sorted array.
// Length of the given array is positive and will not exceed 10^4
// Absolute value of elements in the array and x will not exceed 10^4

// Example
// Given A = [1, 2, 3], target = 2 and k = 3, return [2, 1, 3].
//
// Given A = [1, 4, 6, 8], target = 3 and k = 3, return [4, 1, 6].
//
// Challenge
// O(logn + k) time complexity.
/**
 * @param A: an integer array
 * @param target: An integer
 * @param k: An integer
 * @return: an integer array
 */
const kClosestNumbers = function (A, target, k) {
  if (A === null || A.length === 0) {
    return [];
  }

  if (A.length < k) {
    return A;
  }

  let start = 0;
  let end = A.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (A[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  let left;
  let right;
  if (A[start] >= target) {
    left = start - 1;
    right = start;
  } else {
    left = end - 1;
    right = end;
  }

  const result = [];
  let pivot = A[left];

  while (result.length < k) {
    if (left < 0) {
      result.push(A[right]);
      right++;
    } else if (right >= A.length) {
      result.push(A[left]);
      left--;
    } else {
      if (target - A[left] <= A[right] - target) {
        result.push(A[left]);
        left--;
      } else {
        result.push(A[right]);
        right++;
      }
    }
  }

  return result;
}

console.log(kClosestNumbers([1, 2, 3], 2, 3));
console.log(kClosestNumbers([1, 4, 6, 8], 3, 3));
