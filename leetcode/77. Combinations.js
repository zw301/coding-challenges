// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//
// Example:
//
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const results = [];
  if (n === 0 || k === 0 || n < k) {
    return results;
  }

  const combination = [];
  combineHelper(n, k, 1, combination, results);
  return results;
};

function combineHelper(n, k, start, combination, results) {
  if (combination.length === k) {
    results.push(combination.slice(0));
    return;
  }

  for (var i = start; i <= n; i++) {
    combination.push(i);
    combineHelper(n, k, i + 1, combination, results);
    combination.pop();
  }
}

console.log(combine(4, 2))
