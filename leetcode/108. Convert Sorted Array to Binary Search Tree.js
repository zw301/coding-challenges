// DescriptionHintsSubmissionsDiscussSolution
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
//
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
//
// Example:
//
// Given the sorted array: [-10,-3,0,5,9],
//
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
//
//       0
//      / \
//    -3   9
//    /   /
//  -10  5
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return helper(nums, 0, nums.length - 1);
};

function helper(nums, start, end) {
  if (start > end) {
    return null;
  }
  const mid = Math.floor(start + (end - start) / 2);
  const node = new TreeNode(nums[mid]);
  node.left = helper(nums, start, mid - 1);
  node.right = helper(nums, mid + 1, end);

  return node;
}

// 8.19
var sortedArrayToBST = function(nums) {
    if (nums === null) {
        return null;
    }

    return toBST(nums, 0, nums.length);
};

const toBST = function(nums, start, end) {
    if (start === end) {
        return null;
    }

    let mid = start + Math.floor((end - start) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = toBST(nums, start, mid);
    root.right = toBST(nums, mid + 1, end);

    return root;
}
