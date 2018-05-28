// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// Consider the following matrix:
//
// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Example 1:
//
// Input: matrix, target = 5
// Output: true
// Example 2:
//
// Input: matrix, target = 20
// Output: false
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix === null || matrix.length === 0 || matrix[0] === null || matrix[0].length === 0) {
    return false;
  }
  let n = matrix.length;
  let m = matrix[0].length;

  let x = n - 1;
  let y = 0;

  while (x >= 0 && x < n && y >= 0 && y < m) {
    if (matrix[x][y] === target) {
      return true;
    } else if (matrix[x][y] < target) {
      y++;
    } else {
      x--;
    }
  }
  return false;
};

const arr = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

console.log(searchMatrix(arr, 5)); //true
console.log(searchMatrix(arr, 20)); //false
