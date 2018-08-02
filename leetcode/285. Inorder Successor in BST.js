// Given a binary search tree and a node in it, find the in-order successor of that node in the BST.
//
// Note: If the given node has no in-order successor in the tree, return null.
//
// Example 1:
//
// Input: root = [2,1,3], p = 1
//
//   2
//  / \
// 1   3
//
// Output: 2
// Example 2:
//
// Input: root = [5,3,6,2,4,null,null,1], p = 6
//
//       5
//      / \
//     3   6
//    / \
//   2   4
//  /
// 1
//
// Output: null
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
  if (root === null) {
    return null;
  }

  const stack = [];

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (root.val > p.val) {
      return root;
    }
    root = root.right;
  }
  return null;
};

var inorderSuccessor = function(root, p) {
  if (root === null) {
    return null;
  }
  let successor = null;
  while (root !== null) {
    if (p.val < root.val) {
      successor = root;
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return successor;
}

var inorderSuccessor = function(root, p) {
    if (root === null || p === null) {
        return null;
    }

    const stack = [];
    let prev = null;
    while (root !== null || stack.length !== 0) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (prev === p) {
            return root;
        }
        prev = root;
        root = root.right;
    }
    return null;
};
