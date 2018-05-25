// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].
//
// Note:
// Each element in the result must be unique.
// The result can be in any order.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Time Complexity O(n). Space Complexity O(n)
var intersection = function(nums1, nums2) {
  const set1 = new Set();
  const set2 = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (set1.has(nums2[i])) {
      set2.add(nums2[i]);
    }
  }
  return Array.from(set2);
};


// Time Complexity O(nlogn).
var intersection = function(nums1, nums2) {
  const compareTo = function(x, y) {
    return x - y;
  }
  nums1.sort(compareTo);
  nums2.sort(compareTo);

  const set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (!set.has(nums1[i]) && bs(nums2, nums1[i])) {
      set.add(nums1[i]);
    }
  }

  return Array.from(set);
}

function bs(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return true;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }
  }
  return nums[start] === target || nums[end] === target;
}

// Time Complexity O(nlogn)
var intersection = function(nums1, nums2) {
  var compareTo = function(x, y) {
    return x - y;
  }
  nums1.sort(compareTo);
  nums2.sort(compareTo);

  let i = 0;
  let j = 0;
  const set = new Set();

  while (i < nums1.length && j < nums2.length) {
    if(nums1[i] === nums2[j]) {
      set.add(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return Array.from(set);
};


let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2]

console.log(intersection(nums1, nums2))
console.log(intersection([1], [1]))
