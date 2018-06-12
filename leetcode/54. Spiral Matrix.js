// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
//
// Example 1:
//
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:
//
// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix === null || matrix.length === 0 || matrix[0] === null || matrix[0].length === 0) {
    return [];
  }

  const result = [];
  const m = matrix.length;
  const n = matrix[0].length;

  
  return result;
};

const m1 = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];

const m2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
];

console.log(spiralOrder(m1));
console.log(spiralOrder(m2));
