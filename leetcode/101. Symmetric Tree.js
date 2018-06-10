// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.
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
var isSymmetric = function(root) {
  return isMirror(root, root);
};

function isMirror(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  return p.val === q.val
    && isMirror(p.left, q.right)
    && isMirror(p.right, q.left);
}

var isSymmetric = function(root) {
  const queue = [];

  queue.push(root);
  queue.push(root);

  while (queue.length !== 0) {
    let p = queue.shift();
    let q = queue.shift();

    if (p === null && q === null) continue;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    queue.push(p.left);
    queue.push(q.right);
    queue.push(p.right);
    queue.push(q.left);
  }

  return true;
}
