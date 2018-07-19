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

// iterative
var permute = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  let next = true;
  while (next) {
    let curr = nums.slice();
    result.push(curr);
    next = nextPermutation(nums);
  }

  return result;
}

const nextPermutation = (nums) => {
  let len = nums.length;

  let i = len - 1;
  while ( i > 0 && nums[i] <= nums[i - 1]) {
    i--;
  }
  if (i <= 0) {
    return false;
  }
  if (i !== 0) {
    let j = len - 1;
    while (nums[j] <= nums[i - 1]) {
      j--;
    }
    swapItem(nums, j, i - 1);
  }
  swapList(nums, i, len - 1);
  return true;
};

const swapItem = (nums, i, j) => {
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
};

const swapList = (nums, i, j) => {
  while (i < j) {
    swapItem(nums, i, j);
    i++;
    j--;
  }
};

// console.log(permute([1,2,3]));
