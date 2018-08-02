// Given a binary tree, return the vertical order traversal of its nodes' values. (ie, from top to bottom, column by column).
//
// If two nodes are in the same row and column, the order should be from left to right.
//
// Examples 1:
//
// Input: [3,9,20,null,null,15,7]
//
//    3
//   /\
//  /  \
//  9  20
//     /\
//    /  \
//   15   7
//
// Output:
//
// [
//   [9],
//   [3,15],
//   [20],
//   [7]
// ]
// Examples 2:
//
// Input: [3,9,8,4,0,1,7]
//
//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7
//
// Output:
//
// [
//   [4],
//   [9],
//   [3,0,1],
//   [8],
//   [7]
// ]
// Examples 3:
//
// Input: [3,9,8,4,0,1,7,null,null,null,2,5] (0's right child is 2 and 1's left child is 5)
//
//      3
//     /\
//    /  \
//    9   8
//   /\  /\
//  /  \/  \
//  4  01   7
//     /\
//    /  \
//    5   2
//
// Output:
//
// [
//   [4],
//   [9,5],
//   [3,0,1],
//   [8,2],
//   [7]
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
var verticalOrder = function(root) {
  if (root === null) {
    return [];
  }

  const queue = [];
  const weight = [];
  queue.push(root);
  weight.push(0);

  let min = 0;
  let max = 0;

  const hash = {};

  while (queue.length !== 0) {
    let node = queue.shift();
    let w = weight.shift();

    min = Math.min(min, w);
    max = Math.max(max, w);

    if (hash[w] === undefined) {
      hash[w] = new Array();
    }
    hash[w].push(node.val);

    if (node.left) {
      queue.push(node.left);
      weight.push(w - 1);
    }

    if (node.right) {
      queue.push(node.right);
      weight.push(w + 1);
    }
  }

  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(hash[i]);
  }
  return result;
}
