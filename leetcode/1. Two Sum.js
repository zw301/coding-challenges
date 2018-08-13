/**
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(nums, target) {
    const map = {};
    for(let i = 0; i < nums.length; i++) {
        let left = target - nums[i];
        // map[0] = 0 => map[0] == false
        if(map[left] !== undefined) {
            return [map[left], i];
        } else {
            map[nums[i]] = i;
        }
    };
};


const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9))
