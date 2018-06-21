// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
//
// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
//
// The median is (2 + 3)/2 = 2.5
var findMedianSortedArrays = function(nums1, nums2) {

  const len = nums1.length + nums2.length;
  const mid = Math.floor(len / 2);

  if (len % 2 !== 0) {
    return findKth(nums1, 0, nums2, 0, mid + 1);
  } else {
    return (findKth(nums1, 0, nums2, 0, mid) + findKth(nums1, 0, nums2, 0, mid + 1)) / 2;
  }
}

function findKth(nums1, start1, nums2, start2, k) {
  if (start1 >= nums1.length) {
    return nums2[start2 + k - 1];
  }
  if (start2 >= nums2.length) {
    return nums1[start1 + k - 1];
  }
  if (k === 1) {
    return Math.min(nums1[start1], nums2[start2]);
  }

  let mid = Math.floor(k / 2);
  let key1 = start1 + mid - 1 < nums1.length ? nums1[start1 + mid - 1] : Infinity;
  let key2 = start2 + mid - 1 < nums2.length ? nums2[start2 + mid - 1] : Infinity;

  if (key1 < key2) {
    return findKth(nums1, start1 + mid, nums2, start2, k - mid);
  } else {
    return findKth(nums1, start1, nums2, start2 + mid, k - mid);
  }
}
