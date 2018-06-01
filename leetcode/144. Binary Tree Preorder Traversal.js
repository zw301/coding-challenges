// Given a binary tree, return the preorder traversal of its nodes' values.
//
// Example:
//
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
//
// Output: [1,2,3]
// Follow up: Recursive solution is trivial, could you do it iteratively?
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


// Recursive
var preorderTraversal = function(root) {
  const result = [];
  if (root === null) {
    return result
  }
  traverse(root, result);
  return result;
};

function traverse(node, result) {
  result.push(node.val);
  traverse(node.left, result);
  traverse(node.right, result);
}

var preorderTraversal = function(root) {
  if (root === null) {
    return [];
  }
  let left = preorderTraversal(root.left);
  let right = preorderTraversal(root.right);

  return [root.value].concat(left).concat(right);
}

var preorderTraversal = function(root) {
  let result = [];
  if (root === null) return result;

  let left = preorderTraversal(root.left);
  let right = preorderTraversal(root.right);

  result.push(root.val);
  result = result.concat(left).concat(right);
  return result;
}

// Iterative
var preorderTraversal = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const stack = [];
  stack.push(root);

  while (stack.length !== 0) {
    let node = stack.pop();
    result.push(node.val);

    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
}
