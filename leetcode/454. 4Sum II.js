// Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.
//
// To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -228 to 228 - 1 and the result is guaranteed to be at most 231 - 1.
//
// Example:
//
// Input:
// A = [ 1, 2]
// B = [-2,-1]
// C = [-1, 2]
// D = [ 0, 2]
//
// Output:
// 2
//
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */

// 思路：一种最brute force的方法是四重循环， 时间复杂度为O(n^4).
// 稍微优化一下将D数组的元素放到hash表中，第四个元素的查找即可达到O(1)，这样总的时间复杂度为O(n^3), 空间复杂度为O(n)。
//
// 再进一步可以两个两个的求元素和，也就是先求出A,B数组的任意两个元素和放到hash表中，
// 然后在计算C, D任意两个元素和的时候查找一下hash看能不能找到C, D这两个元素的负数，
// 如果可以找到说明这四个元素相加是为0的。还需要注意的重复元素，在做hash的时候value为个数即可。
// 这样时间复杂度降为O(n^2), 空间复杂度为O(n^2).

var fourSumCount = function(A, B, C, D) {
  const map = new Map();

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let sum = A[i] + B[j];
      if (!map.has(sum)) {
        map.set(sum, 0);
      }
      map.set(sum, map.get(sum) + 1);
    }
  }

  let count = 0;
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let target = -(C[i] + D[j]);
      if (map.has(target)) {
        count += map.get(target);
      }
    }
  }
  return count;
};
