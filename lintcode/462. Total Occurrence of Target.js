//
// 462. Total Occurrence of Target
// Given a target number and an integer array sorted in ascending order. Find the total number of occurrences of target in the array.
//
// Example
// Given [1, 3, 3, 4, 5] and target = 3, return 2.
//
// Given [2, 2, 3, 4, 6] and target = 4, return 1.
//
// Given [1, 2, 3, 4, 5] and target = 6, return 0.
//
// Challenge
// Time complexity in O(logn)
/**
 * @param A: A an integer array sorted in ascending order
 * @param target: An integer
 * @return: An integer
 */
const totalOccurrence = function (A, target) {
    if (A === null || A.length === 0) {
        return 0;
    }

    let start = 0;
    let end = A.length - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (A[mid] >= target) {
            end = mid;
        } else {
            start = mid;
        }
    }

    let first;
    if (A[start] === target) {
        first = start;
    } else if (A[end] === target){
        first = end;
    } else {
        return 0;
    }

    start = 0;
    end = A.length - 1;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (A[mid] <= target) {
            start = mid;
        } else {
            end = mid;
        }
    }

    let last;
    if (A[end] === target) {
        last = end;
    } else {
        last = start;
    }

    return last - first + 1;
}
