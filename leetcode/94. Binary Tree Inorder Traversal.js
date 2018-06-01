// Given a binary tree, return the inorder traversal of its nodes' values.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,3,2]
// Follow up: Recursive solution is trivial, could you do it iteratively?
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// Recursive
var inorderTraversal = function(root) {
  const result = [];

  if (root === null) {
    return result;
  }

  let left = inorderTraversal(root.left);
  let right = inorderTraversal(root.right);

  return left.concat([root.val]).concat(right);
};

// Iterative
var inorderTraversal = function(root) {
  const stack = [];
  const result = [];

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    result.push(node.val);
    root = node.right;
  }
  return result;
}
