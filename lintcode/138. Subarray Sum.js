// Given an integer array, find a subarray where the sum of numbers is zero. Your code should return the index of the first number and the index of the last number.
//
// Example
// Given [-3, 1, 2, -3, 4], return [0, 2] or [1, 3].
/**
 * @param nums: A list of integers
 * @return: A list of integers includes the index of the first number and the index of the last number
 */
const subarraySum = function (nums) {
    if (nums === null || nums.length === 0) {
        return [];
    }

    let sum = 0;

    const map = {};
    map[0] = -1;

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        console.log(map)
        sum += nums[i];

        if (map[sum] !== undefined) {
            result.push(map[sum] + 1);
            result.push(i);
            return result;    
        }
        map[sum] = i;
    }
    return result;
}

const arr = [-3, 1, 2, -3, 4];
console.log(subarraySum(arr));
