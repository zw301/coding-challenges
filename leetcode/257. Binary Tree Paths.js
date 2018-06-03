// Given a binary tree, return all root-to-leaf paths.
//
// Note: A leaf is a node with no children.
//
// Example:
//
// Input:
//
//    1
//  /   \
// 2     3
//  \
//   5
//
// Output: ["1->2->5", "1->3"]
//
// Explanation: All root-to-leaf paths are: 1->2->5, 1->3
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let path = [];
  if (root === null) {
    return path;
  }
  if (root.left === null && root.right === null) {
    path.push(String(root.val));
    return path;
  }

  let left = binaryTreePaths(root.left);
  let right = binaryTreePaths(root.right);

  for (var i = 0; i < left.length; i++) {
    path.push(String(root.val) + "->" + left[i]);
  }
  for (var i = 0; i < right.length; i++) {
    path.push(String(root.val) + "->" + right[i]);
  }
  return path;
};

var binaryTreePaths = function(root) {
  if (root === null) {
    return [];
  }
  const path = [];

  helper(path, root, String(root.val));
  return path;
}

function helper(path, node, str) {
  if (node === null) {
    return;
  }

  if (node.left === null && node.right === null) {
    path.push(str);
    return;
  }

  if (node.left !== null) {
    helper(path, node.left, str + "->" + String(node.left.val));
  }

  if (node.right !== null) {
    helper(path, node.right, str + "->" + String(node.right.val));
  }
  return path;
}

var binaryTreePaths = function(root) {
  if (root === null) {
    return [];
  }
  const q = [];
  const paths = [];
  const result = [];

  q.push(root);
  paths.push(String(root.val));

  while (q.length !== 0) {
    let size = q.length;

    for (var i = 0; i < size; i++) {
       let node = q.shift();
       let path = paths.shift();

       if (node.left === null && node.right === null) {
         result.push(path);
         continue;
       }

       if (node.left) {
         q.push(node.left);
         paths.push(path + "->" + String(node.left.val));
       }
       if (node.right) {
         q.push(node.right);
         paths.push(path + "->" + String(node.right.val));
       }
    }
  }
  return result;
}
