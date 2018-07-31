// 931. Median of K Sorted Arrays
// There are k sorted arrays nums. Find the median of the given k sorted arrays.
//
// Example
// Given nums = [[1],[2],[3]], return 2.00

/**
 * @param nums: the given k sorted arrays
 * @return: the median of the given k sorted arrays
 */
const findMedian = function (nums) {
    const n = getTotal(nums);
    if (n === 0) {
      return 0;
    }
    const mid = Math.floor(n / 2);

    if (n % 2 !== 0) {
      return findKth(nums, mid + 1);
    } else {
      return (findKth(nums, mid) + findKth(nums, mid + 1)) / 2.0;
    }
}

const getTotal = function(nums) {
  let totalLength = 0;
  for (let i = 0; i < nums.length; i++) {
    totalLength += nums[i].length;
  }
  return totalLength;
};

const findKth = function(nums, k) {
  let start = 0;
  // let end = Infinity;
  let end = nums.length * nums[0].length;

  // find the last number x that >= k numbers are >= x.
  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    // greater than or equal to
    if (getGTE2d(nums, mid) >= k) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (getGTE2d(nums, start) >= k) {
    return start;
  }
  return end;
};

// get how many numbers greater than or equal to val in 2d array
const getGTE2d = function(nums, val) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += getGTE(nums[i], val);
  }
  return sum;
}

// get how many numbers greater than or equal to val in an array
const getGTE = function(nums, val) {
  if (nums === null || nums.length === 0) {
    return 0;
  }
  let start = 0;
  let end = nums.length - 1;
  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] >= val) {
      end = mid;
    } else {
      start = mid;
    }
  }
  if (nums[start] >= val) {
    return nums.length - start;
  }
  if (nums[end] >= val) {
    return nums.length - end;
  }
  return 0;
}

console.log(findMedian([[1],[2],[3]]));
