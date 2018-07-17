// 902. Kth Smallest Element in a BST
// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
//
// Example
// Given root = {1,#,2}, k = 2, return 2.
//
// Challenge
// What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
const kthSmallest = function (root, k) {
  if (root === null) {
    return null;
  }

  const stack = [];
  let count = 0;

  while (root !== null || stack.length !== 0) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    count++;
    if (count === k) {
      return root.val;
    }
    root = root.right;
  }
  return null;
}
