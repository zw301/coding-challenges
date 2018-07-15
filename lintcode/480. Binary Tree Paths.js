// 480. Binary Tree Paths
// Given a binary tree, return all root-to-leaf paths.
//
// Example
// Given the following binary tree:
//
//    1
//  /   \
// 2     3
//  \
//   5
// All root-to-leaf paths are:
//
// [
//   "1->2->5",
//   "1->3"
// ]

// traverse
const binaryTreePaths = function (root) {
  if (root === null) {
    return [];
  }

  const result = [];

  helper(root, String(root.val), result);
  return result.sort();
}

const helper = function(node, path, result) {
  if (node.left === null && node.right === null) {
    result.push(path);
    return;
  }
  if (node.left) {
    helper(node.left, path + "->" + String(node.left.val), result);
  }
  if (node.right) {
    helper(node.right, path + "->" + String(node.right.val), result);
  }
}

// recursive
const binaryTreePaths = function (root) {
  if (root === null) {
    return [];
  }

  if (root.left === null && root.right === null) {
    return [String(root.val)];
  }

  let left = binaryTreePaths(root.left);
  let right = binaryTreePaths(root.right);

  const result = [];
  left.concat(right).forEach(path => {
    result.push(String(root.val) + '->' + path);
  })

  return result.sort();
}

// bfs
const binaryTreePaths = function (root) {
  if (root === null) {
    return [];
  }

  const queue = [];
  queue.push(root);

  const paths = [];
  paths.push(String(root.val));

  const result = [];

  while (queue.length !== 0) {
    let node = queue.shift();
    let path = paths.shift();

    if (node.left === null && node.right === null) {
      result.push(path);
    }

    if (node.left !== null) {
      queue.push(node.left);
      paths.push(path + "->" + String(node.left.val));
    }

    if (node.right !== null) {
      queue.push(node.right);
      paths.push(path + "->" + String(node.right.val));
    }
  }
  return result.sort();
}
