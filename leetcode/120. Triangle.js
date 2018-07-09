// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.
//
// For example, given the following triangle
//
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
//
// Note:
//
// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    if (triangle === null || triangle.length === 0) {
        return 0;
    }
    if (triangle[0] === null || triangle[0].length === 0) {
        return 0;
    }

    const m = triangle.length;
    const dp = new Array(m);
    for (let i = 0; i < m; i++) {
      dp[i] = new Array(m);
    }

    dp[0][0] = triangle[0][0];
    for (let i = 1; i < m; i++) {
      dp[i][0] = dp[i - 1][0] + triangle[i][0];
      dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
    }

    for (let i = 2; i < m; i++) {
      for (let j = 1; j < i; j++) {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }

    let min = dp[m - 1][0];
    for (let j = 1; j < m; j++) {
      min = Math.min(dp[m - 1][j], min);
    }

    return min;
};
