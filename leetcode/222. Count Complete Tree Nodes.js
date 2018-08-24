// Given a complete binary tree, count the number of nodes.
//
// Note:
//
// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
//
// Example:
//
// Input:
//     1
//    / \
//   2   3
//  / \  /
// 4  5 6
//
// Output: 6
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
  let leftDep = leftDepth(root);
  let rightDep = rightDepth(root);

  if (leftDep === rightDep) {
   return (1 << leftDep) - 1;
  } else {
   return 1 + countNodes(root.left) + countNodes(root.right);
  }
};
const leftDepth = function(root) {
  if (!root) {
   return 0;
  }
  return 1 + leftDepth(root.left);
};

const rightDepth = function(root) {
  if (!root) {
   return 0;
  }
  return 1 + rightDepth(root.right);
};




///
var countNodes = function(root) {
  let hLeft = 0;
  let hRight = 0;
  let pLeft = root;
  let pRight = root;

  while (pLeft !== null) {
    hLeft++;
    pLeft = pLeft.left;
  }

  while (pRight !== null) {
    hRight++;
    pRight = pRight.right;
  }

  if (hLeft == hRight) {
    return Math.pow(2, hLeft) - 1;
  } else {
    return countNodes(root.left) + countNodes(root.right) + 1;
  }
}
