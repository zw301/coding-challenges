// Given a binary tree
//
// struct TreeLinkNode {
//   TreeLinkNode *left;
//   TreeLinkNode *right;
//   TreeLinkNode *next;
// }
// Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
//
// Initially, all next pointers are set to NULL.
//
// Note:
//
// You may only use constant extra space.
// Recursive approach is fine, implicit stack space does not count as extra space for this problem.
// Example:
//
// Given the following binary tree,
//
//      1
//    /  \
//   2    3
//  / \    \
// 4   5    7
// After calling your function, the tree should look like:
//
//      1 -> NULL
//    /  \
//   2 -> 3 -> NULL
//  / \    \
// 4-> 5 -> 7 -> NULL
/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

// space O(n)
var connect = function(root) {
  if (root === null) {
    return;
  }

  const queue = [];
  queue.push(root);

  while (queue.length !== 0) {
    let size = queue.length;
    let prev = null;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (prev !== null) {
        prev.next = node;
      }
      prev = node;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }
};

// space O(1)
var connect = function(root) {
  if (root === null) {
    return;
  }

  const dummy = new TreeLinkNode(0);
  let prev = dummy;

  while (root !== null) {
    while (root !== null) {
      if (root.left) {
        prev.next = root.left;
        prev = prev.next;
      }
      if (root.right) {
        prev.next = root.right;
        prev = prev.next;
      }
      root = root.next;
    }
    root = dummy.next;
    dummy.next = null;
    prev = dummy;
  }
};


var connect = function(root) {
  if (root === null) {
    return;
  }

  const dummy = new TreeLinkNode(0);
  let prev = dummy;

  let curr = root;
  while (curr !== null) {
    while (curr !== null) {
      if (curr.left) {
        prev.next = curr.left;
        prev = prev.next;
      }
      if (curr.right) {
        prev.next = curr.right;
        prev = prev.next;
      }
      curr = curr.next;
    }
    curr = dummy.next;
    dummy.next = null;
    prev = dummy;
  }
}
