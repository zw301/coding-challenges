// 387. The Smallest Difference
// Given two array of integers(the first array is array A, the second array is array B), now we are going to find a element in array A which is A[i], and another element in array B which is B[j], so that the difference between A[i] and B[j] (|A[i] - B[j]|) is as small as possible, return their smallest difference.
//
// Example
// For example, given array A = [3,6,7,4], B = [2,8,9,3], return 0
//
// Challenge
// O(n log n) time

const smallestDifference = function (A, B) {
  if (A === null || B === null || A.length === 0 || B.length === 0) {
    return 0;
  }

  A.sort(compare);
  B.sort(compare);

  let min = Infinity;
  let i = 0;
  let j = 0;
  while (i < A.length && j < B.length) {
    min = Math.min(min, Math.abs(A[i] - B[j]));

    if (A[i] < B[j]) {
      i++;
    } else {
      j++;
    }
  }
  return min;
}

const compare = (a, b) => a - b;
