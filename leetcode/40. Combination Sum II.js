// Given a collection of candidate numbers (candidates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sums to target.
//
// Each number in candidates may only be used once in the combination.
//
// Note:
//
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:
//
// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const results = [];
  if (candidates === null || candidates.length === 0 || target === null) {
    return results;
  }

  candidates.sort(function(a, b) {
    return a - b;
  })

  const list = [];
  combinationSum2Helper(candidates, target, 0, list, results);
  return results;
};

function combinationSum2Helper(candidates, target, startIndex, list, results) {
  if (target === 0) {
    results.push(list.slice(0));
    return;
  }

  if (target < 0) {
    return;
  }

  for (let i = startIndex; i < candidates.length; i++) {
    if (i > startIndex && candidates[i] === candidates[i - 1]) {
      continue;
    }
    list.push(candidates[i]);
    combinationSum2Helper(candidates, target - candidates[i], i + 1, list, results);
    list.pop();
  }
}

console.log(combinationSum2([10,1,2,7,6,1,5], 8));
