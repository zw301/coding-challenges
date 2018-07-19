//
// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
//
//
//
// Given an integer n, return the number of distinct solutions to the n-queens puzzle.
//
// Example:
//
// Input: 4
// Output: 2
// Explanation: There are two distinct solutions to the 4-queens puzzle as shown below.
// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],
//
//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let sum = 0;

  const search = (n, cols) => {
    if (cols.length === n) {
      sum++;
      return;
    }

    for (let colIndex = 0; colIndex < n; colIndex++) {
      if (!isValid(cols, colIndex)) {
        continue;
      }
      cols.push(colIndex);
      search(n, cols);
      cols.pop();
    }
  }
  const isValid = (cols, colIndex) => {
    const row = cols.length;
    for (let rowIndex = 0; rowIndex < cols.length; rowIndex++) {
      if (cols[rowIndex] === colIndex) {
        return false;
      }
      if (row - rowIndex === Math.abs(cols[rowIndex] - colIndex)) {
        return false;
      }
    }
    return true;
  };

  search(n, []);
  return sum;
};
