//
// Given a binary tree, find its minimum depth.
//
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Given binary tree [3,9,20,null,null,15,7],
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.
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
var minDepth = function(root) {
  if (root === null) {
    return 0;
  }
  let left = minDepth(root.left);
  let right = minDepth(root.right);

  if (left === 0) {
    return right + 1;
  }
  if (right === 0) {
    return left + 1;
  }
  return Math.min(left, right) + 1;
};

var minDepth = function(root) {
  if (root === null) {
    return 0;
  }

  const q = [];
  q.push(root);

  let depth = 0;

  while (q.length !== 0) {
    let size = q.length;

    for (let i = 0; i < size; i++) {
      let node = q.shift();
      if (node.left === null && node.right === null) {
        return depth + 1;
      }
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    depth++;
  }
  return depth;
}
