// 38. Search a 2D Matrix II
// Write an efficient algorithm that searches for a value in an m x n matrix, return the occurrence of it.
//
// This matrix has the following properties:
//
// Integers in each row are sorted from left to right.
// Integers in each column are sorted from up to bottom.
// No duplicate integers in each row or column.
// Example
// Consider the following matrix:
//
// [
//   [1, 3, 5, 7],
//   [2, 4, 7, 8],
//   [3, 5, 9, 10]
// ]
// Given target = 3, return 2.
//
// Challenge
// O(m+n) time and O(1) extra space
/**
 * @param matrix: A list of lists of integers
 * @param target: An integer you want to search in matrix
 * @return: An integer indicate the total occurrence of target in the given matrix
 */
const searchMatrix = function (matrix, target) {
    if (matrix === null || matrix.length === 0) {
        return 0;
    }
    if (matrix[0] === null || matrix[0].length === 0) {
        return 0;
    }

    let x = 0;
    let y = matrix[0].length - 1;

    let count = 0;

    while (x < matrix.length && y >= 0) {

        if (matrix[x][y] === target) {
            count++;
            x++;
            y--;
        } else if (matrix[x][y] < target) {
            x++;
        } else {
            y--;
        }
    }

    return count;
}
