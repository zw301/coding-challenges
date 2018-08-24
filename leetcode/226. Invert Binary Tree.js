// Invert a binary tree.
//
// Example:
//
// Input:
//
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:
//
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return null;
  }
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
};

var invertTree = function(root) {
  if (root === null) {
    return null;
  }

  let left = root.left;
  let right = root.right;

  root.left = invertTree(right);
  root.right = invertTree(left);

  return root;
}

// 前序遍历或者后序遍历都可以
var invertTree = function(root) {
  if (root === null) {
    return null;
  }

  const stack = [];
  stack.push(root);

  while(stack.length !== 0) {
    let node = stack.pop();
    left = node.left;
    node.left = node.right;
    node.right = left;

    if (node.left !== null) {
      stack.push(node.left);
    }
    if (node.right !== null) {
      stack.push(node.right);
    }
  }

  return root;
}

//bfs
var invertTree = function(root) {
  if (root === null) {
    return null;
  }

  const queue = [];
  queue.push(root);

  while(queue.length !== 0) {
    let node = queue.shift();
    left = node.left;
    node.left = node.right;
    node.right = left;

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return root;
}
