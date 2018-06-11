// Given a binary tree, find the length of the longest consecutive sequence path.
//
// The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path need to be from parent to child (cannot be the reverse).
//
// Example 1:
//
// Input:
//
//    1
//     \
//      3
//     / \
//    2   4
//         \
//          5
//
// Output: 3
//
// Explanation: Longest consecutive sequence path is 3-4-5, so return 3.
// Example 2:
//
// Input:
//
//    2
//     \
//      3
//     /
//    2
//   /
//  1
//
// Output: 2
//
// Explanation: Longest consecutive sequence path is 2-3, not 3-2-1, so return 2.
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

var longestConsecutive = function(root) {
   if (root === null) {
     return 0;
   }
   let result = {"max": 1};
   helper(root, 0, root.val, result);
   return result["max"];
};

function helper(node, level, target, result) {
 if (node === null) {
   return;
 }

 if (node.val === target) {
   level++;
   result["max"] = Math.max(result["max"], level);
 } else {
   level = 1;
 }
 helper(node.left, level, node.val + 1, result);
 helper(node.right, level, node.val + 1, result);
}
