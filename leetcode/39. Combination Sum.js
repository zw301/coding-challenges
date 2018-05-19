// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target),
// find all unique combinations in candidates where the candidate numbers sums to target.
//
// The same repeated number may be chosen from candidates unlimited number of times.
//
// Note:
//
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:
//
// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const results = [];
  if (candidates === null || candidates.length === 0 || target === null) {
    return results;
  }

  candidates.sort(function(a, b) {
    return a - b;
  });

  const list = [];
  combinationSumHelper(candidates, target, 0, list, results);

  return results;

};

function combinationSumHelper(candidates, target, startIndex, list, results) {
  if (target === 0) {
    results.push(list.slice(0));
    return;
  }

  if (target < 0) {
    return;
  }

  for (let i = startIndex; i < candidates.length; i++) {
    list.push(candidates[i]);
    combinationSumHelper(candidates, target - candidates[i], i, list, results);
    list.pop();
  }
}

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
