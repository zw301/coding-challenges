// 596. Minimum Subtree
// Given a binary tree, find the subtree with minimum sum. Return the root of the subtree.
//
// Example
// Given a binary tree:
//
//      1
//    /   \
//  -5     2
//  / \   /  \
// 0   2 -4  -5
// return the node 1.
/**
 * @param root: the root of binary tree
 * @return: the root of the minimum subtree
 */
const findSubtree = function (root) {
  if (root === null) {
    return null;
  }

  let subtree = null;
  let subtreeSum = Infinity;

  const helper = function (node) {
    if (node === null) {
      return 0;
    }

    let sum = node.val + helper(node.left) + helper(node.right);
    if (sum < subtreeSum) {
      subtreeSum = sum;
      subtree = node;
    }
    return sum;
  }

  helper(root);
  return subtree;
}
