// Given a binary tree, find its maximum depth.
//
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
// return its depth = 3.
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
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  const q = [];
  q.push(root);
  let depth = 0;

  while (q.length !== 0) {
    let size = q.length;

    for (var i = 0; i < size; i++) {
      let node = q.shift();
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
};

var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}
