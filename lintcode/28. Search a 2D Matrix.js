// 28. Search a 2D Matrix
// Write an efficient algorithm that searches for a value in an m x n matrix.
//
// This matrix has the following properties:
//
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example
// Consider the following matrix:
//
// [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ]
// Given target = 3, return true.
//
// Challenge
// O(log(n) + log(m)) time
/**
 * @param matrix: matrix, a list of lists of integers
 * @param target: An integer
 * @return: a boolean, indicate whether matrix contains target
 */
 var searchMatrix = function(matrix, target) {
     if (matrix === null || matrix.length === 0 || matrix[0] === null || matrix[0].length === 0) {
         return false;
     }

     const n = matrix.length;
     const m = matrix[0].length;

     let start = 0;
     let end = m * n - 1;

     while (start + 1 < end) {
         let mid = start + Math.floor((end - start) / 2);
         let curr = matrix[Math.floor(mid / m)][mid % m];

         if (curr === target) {
             return true;
         } else if (curr < target) {
             start = mid;
         } else {
             end = mid;
         }
     }

     if (matrix[Math.floor(start / m)][start % m] === target) {
         return true;
     } else if (matrix[Math.floor(end / m)][end % m] === target) {
         return true;
     }
     return false;
 };
