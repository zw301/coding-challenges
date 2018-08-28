// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
//
// Note:
//
// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:
//
// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:
//
// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const result = [];
  helper(k, n, 1, [], result);
  return result;
};

const helper = function(k, target, startIndex, list, result) {
  if (target < 0) {
    return;
  }
  if (list.length > k) {
    return;
  }
  if (list.length === k && target === 0) {
    result.push(list.slice());
    return;
  }

  for (let i = startIndex; i <= 9; i++) {
    list.push(i);
    helper(k, target - i, i + 1, list, result);
    list.pop();
  }
};
