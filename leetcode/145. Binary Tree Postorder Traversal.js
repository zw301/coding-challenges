// Given a binary tree, return the postorder traversal of its nodes' values.
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
// Output: [3,2,1]
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

// Recursive - divide and conquer
var postorderTraversal = function(root) {
  const result = [];

  if (root === null) {
    return result;
  }

  let left = postorderTraversal(root.left);
  let right = postorderTraversal(root.right);

  return left.concat(right).concat([root.val]);
};

// Iterative
var postorderTraversal = function(root) {
  const result = [];
  if (root === null) {
    return result;
  }

  const stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    let node = stack.pop();
    result.push(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  let i = 0;
  let j = result.length - 1;
  while (i < j) {
    let tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
    i++;
    j--;
  }
  return result;
}

// Recursive - traverse
var postorderTraversal = function(root) {
  const result = [];

  traverse(root, result);
  return result;
};

let traverse = function(node, result) {
  if (node === null) return;
  traverse(node.left, result);
  traverse(node.right, result);
  result.push(node.val)
}
