// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:
//
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:
//
// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix === null || matrix.length === 0) {
    return false;
  }
  if (matrix[0] === null || matrix[0].length === 0) {
    return false;
  }

  let m = matrix.length;
  let n = matrix[0].length;

  let start = 0;
  let end = m * n - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (matrix[Math.floor(mid / n)][mid % n] <= target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (matrix[Math.floor(start / n)][start % n] === target) {
    return true;
  }
  if (matrix[Math.floor(end / n)][end % n] === target) {
    return true;
  }
  return false;
};
