// Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.
//
// Example 1:
// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
//
// Target = 9
//
// Output: True
// Example 2:
// Input:
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7
//
// Target = 28
//
// Output: False
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (root === null) {
    return false;
  }
  const sortedArr = inorder(root);

  let i = 0;
  let j = sortedArr.length - 1;

  while (i < j) {
    if (sortedArr[i] + sortedArr[j] === target) {
      return true;
    } else if (sortedArr[i] + sortedArr[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

function inorder(root) {
  if (root === null) {
    return null;
  }

  const stack = [];

  const sortedArr = [];

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    sortedArr.push(root.val);
    root = root.right;
  }

  return sortedArr;
}
