// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
//
// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 // n < m                                 time            extra space
 // 1 hashmap 小的数组                 => O(n + m)           O(n)
 // 3 sort + merge sorted arrays     => O(nlogn + mlogm)    O(1)
 // ------------
 // 重复的多，下面的不能用
 // 2 sort小的 + binary Search        => O(nlogn + mlogn)   O(1)

var intersect = function(nums1, nums2) {
  const result = [];
  let i = 0;
  let j = 0;

  nums1.sort(compareTo);
  nums2.sort(compareTo);
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};

const compareTo = function(x, y) {
  return x - y;
};

var intersect = function(nums1, nums2) {
    let hash = {};
    for (let i = 0; i < nums1.length; i++) {
        if (hash[nums1[i]] === undefined) {
            hash[nums1[i]] = 0;
        }
        hash[nums1[i]]++;
    }
    let result = [];
    for (let i = 0; i < nums2.length; i++) {
        if (hash[nums2[i]] !== undefined) {
            if(hash[nums2[i]] > 0) {
               result.push(nums2[i]);
            }
            hash[nums2[i]]--;
        }

    }
    return result;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

console.log(intersect(nums1, nums2))
