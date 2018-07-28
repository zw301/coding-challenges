// 513. Perfect Squares
// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
//
// Example
// Given n = 12, return 3 because 12 = 4 + 4 + 4
// Given n = 13, return 2 because 13 = 4 + 9

const perfectSquare = (n) => {
  const dp = new Array(n + 1);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    dp[i] = i;
    for (let lastSquareRoot = 1; lastSquareRoot * lastSquareRoot <= i; lastSquareRoot++) {
      dp[i] = Math.min(dp[i], dp[i - lastSquareRoot * lastSquareRoot] + 1);
    }
  }

  return dp[n];
};

console.log(perfectSquare(12)); // 3
console.log(perfectSquare(13));  // 2
