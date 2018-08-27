// Given a non-empty binary tree, find the maximum path sum.
//
// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.
//
// Example 1:
//
// Input: [1,2,3]
//
//        1
//       / \
//      2   3
//
// Output: 6
// Example 2:
//
// Input: [-10,9,20,null,null,15,7]
//
//    -10
//    / \
//   9  20
//     /  \
//    15   7
//
// Output: 42
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
var maxPathSum = function(root) {
  if (root === null) {
    return null;
  }

  const maxPath = [-Infinity];
  helper(root, maxPath);

  return maxPath[0];
};

const helper = function(root, maxPath) {
  if (root === null) {
    return 0;
  }

  let left = Math.max(helper(root.left, maxPath), 0);
  let right = Math.max(helper(root.right, maxPath), 0);

  maxPath[0] = Math.max(maxPath[0], left + right + root.val);

  return root.val + Math.max(left, right);
}
