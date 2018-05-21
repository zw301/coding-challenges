// You are given two arrays (without duplicates) nums1 and nums2 where nums1’s elements are subset of nums2.
// Find all the next greater numbers for nums1's elements in the corresponding places of nums2.
//
// The Next Greater Number of a number x in nums1 is the first greater number to its right in nums2.
// If it does not exist, output -1 for this number.
//
// Example 1:
// Input: nums1 = [4,1,2], nums2 = [1,3,4,2].
// Output: [-1,3,-1]
// Explanation:
//     For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.
//     For number 1 in the first array, the next greater number for it in the second array is 3.
//     For number 2 in the first array, there is no next greater number for it in the second array, so output -1.
// Example 2:
// Input: nums1 = [2,4], nums2 = [1,2,3,4].
// Output: [3,-1]
// Explanation:
//     For number 2 in the first array, the next greater number for it in the second array is 3.
//     For number 4 in the first array, there is no next greater number for it in the second array, so output -1.
// Note:
// All elements in nums1 and nums2 are unique.
// The length of both nums1 and nums2 would not exceed 1000.

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var nextGreaterElement = function(findNums, nums) {
  if (findNums === null || nums === null || nums.length === 0) {
    return null;
  }

  const dummy = new ListNode(-1);
  let head = new ListNode(nums[0]);
  dummy.next = head;

  for (let i = 1; i < nums.length; i++) {
    const node = new ListNode(nums[i]);
    head.next = node;
    head = head.next
  }

  const result = [];

  for (var i = 0; i < findNums.length; i++) {
    let node = findNode(dummy.next, findNums[i]);
    if (node.next !== null && node.next.val > findNums[i]) {
      result[i] = node.next.val;
    } else {
      result[i] = -1;
    }
  }
  return result;

};

function findNode(node, val) {
  while (node !== null) {
     if (node.val === val) {
       return node;
     }
     node = node.next
  }
  return null;
}




// var nextGreaterElement = function(findNums, nums) {
//   const map = {};
//
//   for (let i = 0; i < nums.length; i++) {
//     if (i === nums.length - 1) {
//       map[nums[i]] = nums[i] - 1;
//     } else {
//       map[nums[i]] = nums[i + 1];
//     }
//   }
//
//   const result =[];
//   for (let i = 0; i < findNums.length; i++) {
//     const num = findNums[i];
//     console.log(map[num])
//     if (map[num] === undefined) {
//       return null;
//     }
//
//     if (num < map[num]) {
//       result[i] = map[num];
//     } else {
//       result[i] = -1;
//     }
//   }
//
//   return result;
// }
// const map = nextGreaterElement(1, [1,2,3]);
console.log(nextGreaterElement([4,1,2], [1,3,4,2]))
// console.log(findNode(node, 2))
