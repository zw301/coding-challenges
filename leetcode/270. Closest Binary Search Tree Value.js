// Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.
//
// Note:
//
// Given target value is a floating point.
// You are guaranteed to have only one unique value in the BST that is closest to the target.
// Example:
//
// Input: root = [4,2,5,1,3], target = 3.714286
//
//     4
//    / \
//   2   5
//  / \
// 1   3
//
// Output: 4
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */

var closestValue = function(root, target) {
    if (root === null) {
        return null;
    }

    let min = root.val;
    while (root !== null) {
        if (Math.abs(root.val - target) < Math.abs(min - target)) {
            min = root.val;
        }
        if (root.val > target) {
            root = root.left;
        } else if (root.val < target) {
            root = root.right;
        } else {
            return root.val
        }
    }
    return min;
};

var closestValue = function(root, target) {
  if (root === null) {
    return null;
  }

  let kid = root.val > target ? root.left : root.right;
  if (kid === null) {
    return root.val;
  }
  let closest = closestValue(kid, target);

  return Math.abs(root.val - target) < Math.abs(closest - target) ? root.val : closest;
}
