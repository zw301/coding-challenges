// 95. Validate Binary Search Tree
// Given a binary tree, determine if it is a valid binary search tree (BST).
//
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// A single node tree is a BST
// Example
// An example:
//
//   2
//  / \
// 1   4
//    / \
//   3   5
// The above binary tree is serialized as {2,1,4,#,#,3,5} (in level order).
/**
 * @param root: The root of binary tree.
 * @return: True if the binary tree is BST, or false
 */
const isValidBST = function (root) {
  if (root === null) {
    return true;
  }

  const stack = [];
  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (prev !== null && prev.val >= root.val) {
      return false;
    }
    prev = root;
    root = root.right;
  }
  return true;
}
