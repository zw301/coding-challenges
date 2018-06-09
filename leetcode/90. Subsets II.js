// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function subsetsWithDup(nums) {
  const results = [];
  if (nums === null || nums.length === 0) {
    return results
  }
  nums.sort(compareTo);
  let subset = [];

  subsetHelper(nums, 0, subset, results);
  return results;
}

function compareTo(x, y) {
  return x - y;
}

function subsetHelper(nums, startIndex, subset, results) {
  results.push(subset.slice(0));

  for (let i = startIndex; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1] && i > startIndex) {
      continue;
    }
    subset.push(nums[i]);
    subsetHelper(nums, i + 1, subset, results);
    subset.pop();
  }
}

console.log(subsetsWithDup([1,2,2]))

// function subsetsWithDup(nums) {
//   const results = [];
//   if (nums === null || nums.length === 0) {
//     return results;
//   }
//
//   let subset = [];
//
//   nums.sort(function(a, b) {
//     return a - b;
//   })
//
//   subsetHelper(nums, 0, subset, results);
//   return results;
// }
//
// function subsetHelper(nums, startIndex, subset, results) {
//   results.push(subset.slice(0));
//
//   for (var i = startIndex; i < nums.length; i++) {
//     if (i >= 0 && nums[i] === nums[i - 1] && i > startIndex) {
//       continue;
//     }
//     subset.push(nums[i]);
//     subsetHelper(nums, i + 1, subset, results);
//     subset.pop();
//   }
// }



// var subsetsWithDup = function(nums) {
//   const results = [];
//   if (nums === null || nums.length === 0) {
//     return results;
//   }
//
//   nums.sort(function(a, b) {
//     return a - b;
//   });
//
//   let subset = [];
//
//   subsetsHelper(nums, 0, subset, results);
//
//   return results;
// };
//
// function subsetsHelper(nums, startIndex, subset, results) {
//
//   // copy subset
//   results.push(subset.slice(0));
//
//   for (let i = startIndex; i < nums.length; i++) {
//     //一样的，且前面的没挑过
//     // 怎么判断没挑过？, 如果i-1被放进来了， 那么下一个starIndex就会是(i-1)+1
//     // i !== starIndex
//     // 说明上一个数挑的是startIndex-1， 当前这个数挑的是i
//     // 此时是：挑了第二个2，却没有挑第一个2，这种情况下要continue
//     if (nums[i] === nums[i - 1] && i > startIndex) {
//       continue;
//     }
//     subset.push(nums[i]);
//     subsetsHelper(nums, i + 1, subset, results);
//     // subset.slice(0, subset.length - 1);
//     subset.pop();
//   }
// }
