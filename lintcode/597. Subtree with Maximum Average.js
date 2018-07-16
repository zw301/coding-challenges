// 597. Subtree with Maximum Average
// Given a binary tree, find the subtree with maximum average. Return the root of the subtree.
//
// Example
// Given a binary tree:
//
//      1
//    /   \
//  -5     11
//  / \   /  \
// 1   2 4    -2
// return the node 11.

/**
 * @param root: the root of binary tree
 * @return: the root of the maximum average of subtree
 */

class ResultType {
    constructor(sum, size) {
        this.sum = sum;
        this.size = size;
    }
}
const findSubtree2 = function (root) {
  let subtree = null;
  let subtreeResult = null;

  const helper = function(node) {
    if (node === null) {
      return new ResultType(0, 0);
    }

    let left = helper(node.left);
    let right = helper(node.right);
    let result = new ResultType(
      left.sum + right.sum + node.val,
      left.size + right.size + 1
    );

    if (subtree === null || subtreeResult.sum * result.size < subtreeResult.size * result.sum) {
      subtree = node;
      subtreeResult = result;
    }
    return result;
  }

  helper(root);
  return subtree;
}
