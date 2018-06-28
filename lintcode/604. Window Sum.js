//
// 604. Window Sum
// Given an array of n integer, and a moving window(size k), move the window at each iteration from the start of the array, find the sum of the element inside the window at each moving.
//
// Example
// For array [1,2,7,8,5], moving window size k = 3.
// 1 + 2 + 7 = 10
// 2 + 7 + 8 = 17
// 7 + 8 + 5 = 20
// return [10,17,20]
/**
 * @param nums: a list of integers.
 * @param k: length of window.
 * @return: the sum of the element inside the window at each moving.
 */
const winSum = function (nums, k) {
    if (nums === null || nums.length === 0) {
        return [];
    }
    if (k <= 1) {
        return nums;
    }

    let left = 0;
    let right = 0;
    let res = [];
    let sum = 0;

    while (left < nums.length && right < nums.length) {

        while (right < nums.length && right - left < k) {
            sum += nums[right];
            right++;
        }
        if (right - left === k) {
            res.push(sum);
        }
        sum -= nums[left];
        left++;
    }
    return res;
}
