// 14. First Position of Target
// For a given sorted array (ascending order) and a target number, find the first index of this number in O(log n) time complexity.
//
// If the target number does not exist in the array, return -1.
//
// Example
// If the array is [1, 2, 3, 3, 4, 5, 10], for given target 3, return 2.
//
// Challenge
// If the count of numbers is bigger than 2^32, can your code work properly?

/**
 * @param nums: The integer array.
 * @param target: Target to find.
 * @return: The first position of target. Position starts from 0.
 */
const binarySearch = function (nums, target) {
    if (nums === null || nums.length === 0) {
        return -1;
    }

    let start = 0;
    let end = nums.length - 1;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (nums[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (nums[start] === target) {
        return start;
    } else if (nums[end] === target){
        return end;
    }
    return -1;
}
