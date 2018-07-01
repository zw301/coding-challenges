// 61. Search for a Range
// Given a sorted array of n integers, find the starting and ending position of a given target value.
//
// If the target is not found in the array, return [-1, -1].
//
// Example
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].
//
// Challenge
// O(log n) time.
/**
 * @param A: an integer sorted array
 * @param target: an integer to be inserted
 * @return: a list of length 2, [index1, index2]
 */
const searchRange = function (A, target) {
    if (A === null || A.length === 0) {
        return [-1, -1];
    }

    let start = 0;
    let end = A.length - 1;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (A[mid] < target) {
            start = mid;
        } else {
            end = mid;
        }
    }

    let first;
    if (A[start] === target) {
        first = start;
    } else if (A[end] === target) {
        first = end;
    } else {
        return [-1, -1];
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

    return [first, last];
}
