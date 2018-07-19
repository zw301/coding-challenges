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
function subset(nums) {
  if (nums.length <= 0) {
    return [[]];
  }

  let last = nums[nums.length - 1];

  let prev = subset(nums.slice(0, nums.length - 1));


  let newPart = prev.map(function(subarr) {
    let newSub = subarr.slice();
    newSub.push(last);
    return newSub;
  });


  return prev.concat(newPart);
}



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


var subsets = function(nums) {
  if (nums === null) {
    return [];
  }

  const result = [];
  dfs(nums, 0, [], result);
  return result;
}

const dfs = (nums, index,  subset, result) => {
  if (index === nums.length) {
    result.push(subset.slice());
    return;
  }

  // 选 nums[index]
  subset.push(nums[index]);
  dfs(nums, index + 1, subset, result);


  // 不选 nums[index]
  subset.pop();
  dfs(nums, index + 1, subset, result);
}


// bfs
var subsets = function(nums) {
  const result = [];
  if (nums === null) {
    return result;
  }

  nums.sort((a, b) => a - b);

  const queue = [];
  queue.push([]);
  while (queue.length !== 0) {
    let subset = queue.shift();
    result.push(subset);

    for (let i = 0; i < nums.length; i++) {
      if (subset.length === 0 || subset[subset.length - 1] < nums[i]) {
        nextSubset = subset.slice();
        nextSubset.push(nums[i]);
        queue.push(nextSubset);
      }
    }
  }
  return result;
}

// console.log(subset1([1,2,3]));
console.log(subsets([1,2,3]));
