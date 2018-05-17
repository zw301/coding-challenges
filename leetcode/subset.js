function subsets(nums) {
  const results = [];

  if (nums === null || nums.length === 0) {
    return results;
  }

  nums.sort(function(a, b){return a - b});

  subset = [];
  subsetHelper(nums, 0, subset, results);
  // return results;
}

function subsetHelper(nums, startIndex, subset,  results) {
  // console.log(`befor result: ${results}`)

  results.push(subset.slice(0));

  for (let i = startIndex; i < nums.length; i++) {
    subset.push(nums[i]);
    subsetHelper(nums, i + 1, subset, results);
    subset.splice(subset.length - 1, 1);
  }
}

console.log(subsets([]));
console.log(subsets([1]));
console.log(subsets([1,2]));
