const perfectSquare = (n) => {
  const dp = new Array(n + 1);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    dp[i] = i;
    for (let lastSquareRoot = 1; lastSquareRoot * lastSquareRoot <= i; lastSquareRoot++) {
      dp[i] = Math.min(dp[i], dp[i - lastSquareRoot * lastSquareRoot] + 1);
    }
  }

  console.log(dp);

  return dp[n];
};

console.log(perfectSquare(12)); // 3
console.log(perfectSquare(13));  // 2
