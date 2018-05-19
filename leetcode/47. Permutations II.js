// Given a collection of numbers that might contain duplicates, return all possible unique permutations.
//
// Example:
//
// Input: [1,1,2]
// Output:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const results = [];
  if (nums === null || nums.length === 0) {
    return results;
  }

  nums.sort(function(a, b) {
    return a - b;
  })

  const permutation = [];
  const visited = new Array(nums.length).fill(false);
  permuteHelper(nums, permutation, results, visited);
  return results;
};

function permuteHelper(nums, permutation, results, visited) {
  if (permutation.length === nums.length) {
    results.push(permutation.slice(0));
    return;
  }

  for (var i = 0; i < nums.length; i++) {
    if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
      continue;
    }
    permutation.push(nums[i]);
    visited[i] = true;
    permuteHelper(nums, permutation, results, visited);
    visited[i] = false;
    permutation.pop();
  }
}

console.log(permuteUnique([1,1,2]))
