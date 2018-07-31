// 654. Sparse Matrix Multiplication
// Given two Sparse Matrix A and B, return the result of AB.
//
// You may assume that A's column number is equal to B's row number.
//
// Example
// A = [
//   [ 1, 0, 0],
//   [-1, 0, 3]
// ]
//
// B = [
//   [ 7, 0, 0 ],
//   [ 0, 0, 0 ],
//   [ 0, 0, 1 ]
// ]
//
//
//      |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
// AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
//                   | 0 0 1 |
/**
 * @param A: a sparse matrix
 * @param B: a sparse matrix
 * @return: the result of A * B
 */
const multiply = function (A, B) {
  let n = A.length;
  let m = B[0].length;
  let t = A[0].length;

  const result = new Array(n);
  for (let i = 0; i < n; i++) {
    result[i] = new Array(m).fill(0);
  }

  const col = [];
  for (let i = 0; i < t; i++) {
    col.push([]);
    for (let j = 0; j < m; j++) {
      if (B[i][j] !== 0) {
        col[i].push(j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < t; k++) {
      if (A[i][k] === 0) {
        continue;
      }
      for (let p = 0; p < col[k].length; p++) {
        let j = col[k][p];
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }
  return result;
}
