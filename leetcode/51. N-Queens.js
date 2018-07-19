// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle.
//
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.'
// both indicate a queen and an empty space respectively.
//
// Example:
//
// Input: 4
// Output: [
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
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.
/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {

     const results = [];
     search(results, [], n);
     return results;
 };

 function search(results, cols, n) {
     if (cols.length === n) {
         results.push(drawChessboard(cols));
         return;
     }

     for (let colIndex = 0; colIndex < n; colIndex++) {
         if (!isValid(cols, colIndex)) {
             continue;
         }
         cols.push(colIndex);
         search(results, cols, n);
         cols.pop();
     }
 }

 function drawChessboard(cols) {
     const chessboard = [];
     for (let i = 0; i < cols.length; i++) {
         let str = "";
         for (let j = 0; j < cols.length; j++) {
             if (j === cols[i]) {
                 str += "Q";
             } else {
                 str += ".";
             }
         }
         chessboard.push(str);
     }
     return chessboard;
 }

 function isValid(cols, colIndex) {
     let row = cols.length;

     for (let rowIndex = 0; rowIndex < cols.length; rowIndex++) {
         if (cols[rowIndex] === colIndex) {
             return false;
         }
         if (Math.abs(rowIndex - row) === Math.abs(cols[rowIndex] - colIndex)) {
             return false;
         }
     }
     return true;
 }

console.log(solveNQueens(4));
