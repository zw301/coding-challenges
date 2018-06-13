// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
//
// Example:
//
// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (n === 0) {
    return [[0]];
  }

  const matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
  }

  let num = 1;
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (num <= n * n) {
    if (top > bottom || left > right) {
      break;
    }
    for (let j = left; j <= right; j++) {
      matrix[top][j] = num;
      num++;
    }
    top++;

    if (top > bottom || left > right) {
      break;
    }
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num;
      num++;
    }
    right--;

    if (top > bottom || left > right) {
      break;
    }
    for (let j = right; j >= left; j--) {
      matrix[bottom][j] = num;
      num++;
    }
    bottom--;

    if (top > bottom || left > right) {
      break;
    }
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num;
      num++;
    }
    left++;
  }
  return matrix;
};

console.log(generateMatrix(3));
