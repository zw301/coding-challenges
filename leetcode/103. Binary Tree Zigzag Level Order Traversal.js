// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  if (root === null) {
    return [];
  }

  const q = [];
  q.push(root);

  const result = [];
  let level = 0;

  while (q.length !== 0) {
    let size = q.length;
    let curr = [];

    for (let i = 0; i < size; i++) {
      let node = q.shift();

      curr.push(node.val);

      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
    level++;
    
    if (level % 2 === 0) {
      result.push(curr.reverse());
    } else {
      result.push(curr);
    }
  }
  return result;
};
