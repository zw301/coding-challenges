// 139. Subarray Sum Closest
//
// Given an integer array, find a subarray with sum closest to zero. Return the indexes of the first number and last number.
//
// Example
// Given [-3, 1, 1, -3, 5], return [0, 2], [1, 3], [1, 1], [2, 2] or [0, 4].
//
// Challenge
// O(nlogn) time

class Pair {
  constructor(sum, index) {
    this.sum = sum;
    this.index = index;
  }
}
const subarraySumClosest = (nums) => {
  const result = [];
  if (nums === null || nums.length === 0) {
    return result;
  }

  let len = nums.length;
  if (len === 1) {
    return result;
  }

  const sums = new Array(len + 1);
  let prev = 0;
  sums[0] = new Pair(0, 0);

  for (let i = 1; i <= len; i++) {
    sums[i] = new Pair(prev + nums[i - 1], i);
    prev = sums[i].sum;
  }

  sums.sort((a, b) => {
    return a.sum - b.sum;
  })

  console.log(sums);
  let ans = Infinity;
  for (let i = 1; i <= len; i++) {
    if (ans > sums[i].sum - sums[i - 1].sum) {
      ans = sums[i].sum - sums[i - 1].sum;
      let tmp = [sums[i].index - 1, sums[i - 1].index - 1];
      tmp.sort((a, b) => a - b);
      result[0] = tmp[0] + 1;
      result[1] = tmp[1];
    }
  }
  return result;
};

console.log(subarraySumClosest([-3, 1, 1, -3, 5]));
