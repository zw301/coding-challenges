// 610. Two Sum - Difference equals to target
// Given an array of integers, find two numbers that their difference equals to a target value.
// where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.
//
// Example
// Given nums = [2, 7, 15, 24], target = 5
// return [1, 2] (7 - 2 = 5)
/**
 * @param nums: an array of Integer
 * @param target: an integer
 * @return: [index1 + 1, index2 + 1] (index1 < index2)
 */
const twoSum7 = function (nums, target) {
    if (nums === null || nums.length <= 1) {
        return [];
    }
    const arr = nums.map((n, idx) => { return {"val": n, "idx": idx}})

    arr.sort((a, b) => a.val - b.val);

    let i = 0;
    let j = 1;

    while (i < arr.length && j < arr.length) {
        if (i >= j) {
            j++;
        }
        let diff = arr[j].val - arr[i].val;
        if (diff < Math.abs(target)) {
            j++;
        } else if (diff > Math.abs(target)) {
            i++;
        } else {
            return [arr[i].idx + 1, arr[j].idx + 1].sort((a, b) => a - b);
        }
    }
    return [];
}

console.log(twoSum7([2, 7, 15, 24], -5));
