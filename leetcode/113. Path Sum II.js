// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Given the below binary tree and sum = 22,
//
//       5
//      / \
//     4   8
//    /   / \
//   11  13  4
//  /  \    / \
// 7    2  5   1
// Return:
//
// [
//    [5,4,11,2],
//    [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  if (root === null) {
    return [];
  }
  const result = [];
  helper(root, result, [], sum);

  return result;
};

function helper(node, result, path, target) {
  if (node === null) {
    return;
  }

  path.push(node.val);
  if (target === node.val && node.left === null && node.right === null) {
    result.push(path.slice());
  }

  helper(node.left, result, path, target - node.val);
  helper(node.right, result, path, target - node.val);

  path.pop();
}
