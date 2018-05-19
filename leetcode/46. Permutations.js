// Given a collection of distinct integers, return all possible permutations.
//
// Example:
//
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permute(nums) {
  const results = [];
  if (nums === null || nums.length === 0) {
    return results;
  }

  const permutation = [];
  permuteHelper(nums, permutation, results);

  return results;
}

function permuteHelper(nums, permutation, results) {
  if (permutation.length === nums.length) {
    results.push(permutation.slice(0));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (permutation.includes(nums[i])) {
      continue;
    }
    permutation.push(nums[i]);
    permuteHelper(nums, permutation, results);
    permutation.pop();
  }
}

console.log(permute([1,2,3]))


// var permute = function(nums) {
//   const results = [];
//   if (nums === null || nums.length === 0) {
//     return results;
//   }
//
//   if (nums.length === 1) {
//     return [nums];
//   }
//   const last = nums[nums.length - 1];
//
//   const prev = permute(nums.slice(0, nums.length - 1));
//
//
//   for (var i = 0; i < prev.length; i++) {
//     let len = prev[i].length;
//     for (var j = 0; j <= len; j++) {
//       newArr = prev[i].slice(0, j).concat([last]).concat(prev[i].slice(j + 1));
//       results.push(newArr);
//     }
//   }
//
//   return results;
// };

// console.log(permute([1,2,3]));
