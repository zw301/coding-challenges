// 31. Partition Array
// Given an array nums of integers and an int k, partition the array (i.e move the elements in "nums") such that:
//
// All elements < k are moved to the left
// All elements >= k are moved to the right
// Return the partitioning index, i.e the first index i nums[i] >= k.
//
// Example
// If nums = [3,2,2,1] and k=2, a valid answer is 1.
//
// Challenge
// Can you partition the array in-place and in O(n)?
const partitionArray = function (nums, k) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    while (left <= right && nums[left] < k) {
      left++;
    }
    while (left <= right && nums[right] >= k) {
      right--;
    }

    if (left <= right) {
      let tmp = nums[left];
      nums[left] = nums[right];
      nums[right] = tmp;

      left++;
      right--;
    }
  }
  return left;
}


// 3-way partition
const partitionArray = function (nums, k) {
    if (nums === null || nums.length === 0) {
        return 0
    }
    let lt = 0;
    let gt = nums.length - 1;

    let i = lt;

    while (i <= gt) {
        if (nums[i] < k) {
            swap(nums, i , lt);
            i++;
            lt++;
        } else if (nums[i] > k) {
            swap(nums, i, gt);
            gt--;
        } else {
            i++;
        }
    }
    return lt;
}

const swap = function(nums, i, j) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}
