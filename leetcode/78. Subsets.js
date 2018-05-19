// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]


//aA
// function subset1(nums) {
//   if (nums.length <= 0) {
//     return [[]];
//   }
//
//   let last = nums[nums.length - 1];
//
//   let prev = subset1(nums.slice(0, nums.length - 1));
//
//
//   let newPart = prev.map(function(subarr) {
//     let newSub = subarr.slice(0);
//     newSub.push(last);
//     return newSub;
//   });
//
//
//   return prev.concat(newPart);
// }

// dfs
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const results = [];
  if (nums === null || nums.length === 0) {
    return results;
  }

  nums.sort(function(a, b) {
    return a - b;
  });

  let subset = [];
  subsethelper(nums, subset, 0, results);
  return results;
};

function subsethelper(nums, subset, startIndex, results) {
  results.push(subset.slice(0));

  for (var i = startIndex; i < nums.length; i++) {
    subset.push(nums[i]);
    subsethelper(nums, subset, i + 1, results);
    subset.pop();
  }
}
// console.log(subset1([1,2,3]));
console.log(subsets([1,2,3]));
