// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
// Example 1:
// Input:
//     3
//    / \
//   9  20
//     /  \
//    15   7
// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
// Note:
// The range of node's value is in the range of 32-bit signed integer.
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
var averageOfLevels = function(root) {
  const result = [];
  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let size = queue.length;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      sum += node.val;

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    result.push(sum / size);
  }

  return result;
};
