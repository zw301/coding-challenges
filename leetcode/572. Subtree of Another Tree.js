// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
//
// Example 1:
// Given tree s:
//
//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
// Example 2:
// Given tree s:
//
//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

// Time Limit Exceeded
var isSubtree = function(s, t) {
    const queue = [];
    queue.push(s);

    while (queue.length !== 0) {
        let node = queue.shift();
        if (isSameTree(s, t)) {
            return true;
        }
        if (s.left) {
            queue.push(s.left);
        }
        if (s.right) {
            queue.push(s.right);
        }
    }
    return false;
};

const isSameTree = function(t1, t2) {
    if (t1 === null && t2 === null) {
        return true;
    }
    if (t1 === null || t2 === null) {
        return false;
    }
    if (t1.val !== t2.val) {
        return false;
    }

    return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
}


//

var isSubtree = function(s, t) {
  if (s === null && t === null) {
    return true;
  }
  if (s === null || t === null) {
    return false;
  }
  if (isSameTree(s, t)) {
    return true;
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);
}

const isSameTree = function(t1, t2) {
  if (t1 === null && t2 === null) {
    return true;
  }
  if (t1 === null || t2 === null) {
    return false;
  }
  if (t1.val !== t2.val) {
    return false;
  }

  return isSameTree(t1.left, t2.left) && isSameTree(t1.right, t2.right);
}
