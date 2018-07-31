// Given an n x n matrix of positive and negative integers, find the submatrix with the largest possible sum.
//
// Example
// Given matrix =
// [
// [1,3,-1],
// [2,3,-2],
// [-1,-2,-3]
// ]
// return 9.
// Explanation:
// the submatrix with the largest possible sum is:
// [
// [1,2],
// [2,3]
// ]
/**
 * @param matrix: the given matrix
 * @return: the largest possible sum
 */
const maxSubmatrix = function (matrix) {
    // write your code here
    if (matrix === null || matrix.length === 0) {
        return 0;
    }
    if (matrix[0] === null || matrix[0].length === 0) {
        return 0;
    }
    const n = matrix.length;
    const m = matrix[0].length;

    const prefixSum = getPrefixColSum(matrix);
    let max = -Infinity;

    for (let up = 0; up < n; up++) {
        for (let down = up; down < n; down++) {
            let arr = compresion(matrix, up, down, prefixSum);
            max = Math.max(max, maximumSubarray(arr, matrix));
        }
    }
    return max;
}

const maximumSubarray = (arr, matrix) => {
    let n = matrix.length;
    let m = matrix[0].length;

    let minSum = 0;
    let max = -Infinity;
    let sum = 0;

    for (let i = 0; i < m; i++) {
        sum += arr[i];
        max = Math.max(max, sum - minSum);
        minSum = Math.min(minSum, sum);
    }
    return max;
};
const compresion = (matrix, up, down, prefixSum) => {
    let n = matrix.length;
    let m = matrix[0].length;

    const arr = new Array(m).fill(0);
    for (let j = 0; j < m; j++) {
        arr[j] = prefixSum[down + 1][j] - prefixSum[up][j];
    }
    return arr;
};

const getPrefixColSum = (matrix) => {
    let n = matrix.length;
    let m = matrix[0].length;

    const sum = new Array(n + 1);
    for (let i = 0; i < n + 1; i++) {
      sum[i] = new Array(m).fill(0);
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            sum[i + 1][j] = sum[i][j] + matrix[i][j];
        }
    }
    return sum;
};

const matrix = [[1,3,-1],[2,3,-2],[-1,-2,-3]];
console.log(maxSubmatrix(matrix));
