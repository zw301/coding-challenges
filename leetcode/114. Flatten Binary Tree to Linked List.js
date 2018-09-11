// Given a binary tree, flatten it to a linked list in-place.
//
// For example, given the following tree:
//
//     1
//    / \
//   2   5
//  / \   \
// 3   4   6
// The flattened tree should look like:
//
// 1
//  \
//   2
//    \
//     3
//      \
//       4
//        \
//         5
//          \
//           6
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root === null) {
    return;
  }
  flatten(root.left);
  flatten(root.right);

  let right = root.right;
  root.right = root.left;
  root.left = null;

  let curr = root;

  while (curr.right !== null) {
    curr = curr.right;
  }
  curr.right = right;
};


// 09.11 inorder traverse
var flatten = function(root) {
    if (root === null) {
        return;
    }
    const stack = [];
    stack.push(root);

    let prev = null;

    while (stack.length !== 0) {
        let node = stack.pop();

        if (prev !== null) {
            prev.right = node;
            prev.left = null;
        }
        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
        prev = node;
    }
};
