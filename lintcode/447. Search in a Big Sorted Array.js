// 447. Search in a Big Sorted Array
// Given a big sorted array with positive integers sorted by ascending order. The array is so big so that you can not get the length of the whole array directly, and you can only access the kth number by ArrayReader.get(k) (or ArrayReader->get(k) for C++). Find the first index of a target number. Your algorithm should be in O(log k), where k is the first index of the target number.
//
// Return -1, if the number doesn't exist in the array.
//
// Example
// Given [1, 3, 6, 9, 21, ...], and target = 3, return 1.
//
// Given [1, 3, 6, 9, 21, ...], and target = 4, return -1.
//
// Challenge
// O(log k), k is the first index of the given target number.
//
const searchBigSortedArray = function(arr, target) {
  let index = 1;

  while (arr[index - 1] < target) {
    index *= 2;
  }

  let start = 0;
  let end = index - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  if (arr[start] === target) {
    return start;
  } else if (arr[end] === target) {
    return end;
  } else {
    return -1;
  }
}
