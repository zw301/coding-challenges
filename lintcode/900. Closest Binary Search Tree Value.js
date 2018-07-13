// 900. Closest Binary Search Tree Value
// Given a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.
//
// Example
// Given root = {1}, target = 4.428571, return 1.
/**
 * @param root: the given BST
 * @param target: the given target
 * @return: the value in the BST that is closest to the target
 */
// const closestValue = function (root, target) {
//     if (root === null) {
//         return null;
//     }
//
//     let min = root.val;
//     while (root !== null) {
//         if (Math.abs(min - target) > Math.abs(root.val - target)) {
//             min = root.val;
//         }
//         if (root.val > target) {
//             root = root.left;
//         } else if (root.val < target) {
//             root = root.right;
//         }
//     }
//     return min;
// }
const closestValue = function (root, target) {
  if (root === null) {
    return null;
  }

  let kid = target < root.val ? root.left : root.right;
  if (kid === null) {
    return root.val;
  }

  let closest = closestValue(kid, target);

  return Math.abs(root.val - target) < Math.abs(closest - target) ? root.val : closest;
}
