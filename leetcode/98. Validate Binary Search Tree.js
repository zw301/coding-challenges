// Given a binary tree, determine if it is a valid binary search tree (BST).
//
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
//
// Input:
//     2
//    / \
//   1   3
// Output: true
// Example 2:
//
//     5
//    / \
//   1   4
//      / \
//     3   6
// Output: false
// Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
//              is 5 but its right child's value is 4.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (root === null) {
    return true;
  }

  const stack = [];
  let prev;

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (prev !== undefined && prev >= root.val) {
      return false;
    }
    prev = root.val;
    root = root.right;
  }
  return true;
};


// divide and conquer
var isValidBST = function(root) {
  return helper(root, null, null)
}

function helper(root, min, max) {
  if (root === null) {
    return true;
  }

  if (min !== null && root.val <= min) {
    return false;
  }
  if (max !== null && root.val >= max) {
    return false;
  }

  return helper(root.left, min, root.val) && helper(root.right, root.val, max);
}

var isValidBST = function(root) {
  if (root === null) {
    return true;
  }

  let isValid = true;
  let lastNode = null;

  const helper = function(root) {
    if (root === null) {
      return;
    }
    helper(root.left);
    if (lastNode !== null && lastNode.val >= root.val) {
      isValid = false;
      return;
    }
    lastNode = root;
    helper(root.right);
  }

  helper(root);
  return isValid;
}


// divide and conquer
class ResultType {
  constructor(isBST) {
    this.isBST = isBST;
    this.maxNode = maxNode;
    this.minNode = minNode;
  }
}

var isValidBST = function(root) {
  return divideConquer(root).isBST;
}

const divideConquer = function(root) {
  if (root === null) {
    return new ResultType(true);
  }

  let left = divideConquer(root.left);
  let right = divideConquer(root.right);

  if (!left.isBST || !right.isBST) {
    return new ResultType(false);
  }
  if (left.maxNode !== null && left.maxNode.val >= root.val) {
    return new ResultType(false);
  }
  if (right.minNode !== null && right.minNode.val <= root.val) {
    return new ResultType(false);
  }

  // is bst
  let result = new ResultType(true);
  result.minNode = left.minNode !== null ? left.minNode : root;
  result.maxNode = right.maxNode !== null ? right.maxNode : root;

  return result;
}
