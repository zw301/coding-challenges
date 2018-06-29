//
// 461. Kth Smallest Numbers in Unsorted Array
// Find the kth smallest numbers in an unsorted integer array.
//
// Example
// Given [3, 4, 1, 2, 5], k = 3, the 3rd smallest numbers are [1, 2, 3].
//
// Challenge
// An O(nlogn) algorithm is acceptable, if you can do it in O(n), that would be great.
/**
 * @param k: An integer
 * @param nums: An integer array
 * @return: kth smallest element
 */
const kthSmallest = function (k, nums) {
    if (nums === null || nums.length === 0) {
        return -1;
    }
    partition(nums, 0, nums.length - 1, k);
    return nums[k - 1];
}


const partition = function(nums, lo, hi, k) {
    if (lo >= hi) {
        return;
    }

    let lt = lo;
    let gt = hi;
    let v = nums[lo];
    let i = lo + 1;

    while (i <= gt) {
        if (nums[i] < v) {
            swap(nums, i, lt);
            lt++;
            i++;
        } else if (nums[i] > v) {
            swap(nums, i, gt);
            gt--;
        } else {
            i++;
        }
    }
    if (lt < k) {
        partition(nums, lt + 1, hi, k);
    } else {
        partition(nums, lo, lt - 1, k);
    }
}
