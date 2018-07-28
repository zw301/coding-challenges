//
// 544. Top k Largest Numbers
// Given an integer array, find the top k largest numbers in it.
//
// Example
// Given [3,10,1000,-99,4,100] and k = 3.
// Return [1000, 100, 10].

/**
 * @param nums: an integer array
 * @param k: An integer
 * @return: the top k largest numbers in array
 */
const topk = function (nums, k) {
    k = nums.length - k;
    quickselect(nums, 0, nums.length - 1, k);
    return nums.slice(k);
}

const quickselect = (nums, lo, hi, k) => {
  console.log({lo, hi});
    if (lo >= hi) {
        return;
    }

    let lt = lo;
    let gt = hi;
    let pivot = nums[lo];
    let i = lo;

    while (i <= gt) {
        if (nums[i] < pivot) {
            swap(nums, i, lt);
            i++;
            lt++;
        } else if (nums[i] > pivot) {
            swap(nums, i, gt);
            gt--;
        } else {
            i++;
        }
    }
    if (lt < k) {
        quickselect(nums, lt + 1, hi, k);
    }
    if (lt > k) {
        quickselect(nums, lo, lt - 1, k);
    }
};

const swap = (nums, i, j) => {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
};

let arr = [3,10,1000,-99,4,100];
console.log(topk(arr, 3));
