// Given a non-empty binary search tree and a target value, find k values in the BST that are closest to the target.
//
// Note:
//
// Given target value is a floating point.
// You may assume k is always valid, that is: k ≤ total nodes.
// You are guaranteed to have only one unique set of k values in the BST that are closest to the target.
// Example:
//
// Input: root = [4,2,5,1,3], target = 3.714286, and k = 2
//
//     4
//    / \
//   2   5
//  / \
// 1   3
//
// Output: [4,3]
// Follow up:
// Assume that the BST is balanced, could you solve it in less than O(n) runtime (where n = total nodes)?
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @param {number} k
 * @return {number[]}
 */
 var closestKValues = function (root, target, k) {
     // write your code here
     if (root === null) {
         return [];
     }

     const inorderTraverse = [];
     const stack = [];
     let pivotIndex = 0;

     while (root !== null || stack.length !== 0) {
         while (root !== null) {
             stack.push(root);
             root = root.left;
         }
         root = stack.pop();
         inorderTraverse.push(root.val);
         if (root.val <= target) {
             pivotIndex = inorderTraverse.length - 1;
         }
         root = root.right;
     }

     if (k >= inorderTraverse.length) {
         return inorderTraverse;
     }

 //     let start = 0;
 //     let end = inorderTraverse.length - 1;

 //     let pivotIndex;
 //     while (start + 1 < end) {
 //         let mid = start + Math.floor((end - start) / 2);
 //         if (inorderTraverse[mid] <= target) {
 //             start = mid;
 //         } else {
 //             end = mid;
 //         }
 //     }
 //     if (inorderTraverse[start] <= target) {
 //         pivotIndex = start;
 //     } else if (inorderTraverse[end] <= target) {
 //         pivotIndex = end;
 //     } else {
 //         pivotIndex = 0;
 //     }

     // if (pivotIndex === inorderTraverse.length - 1) {
     //     return inorderTraverse.slice(pivotIndex - k + 1, inorderTraverse.length);
     // }
     let result = [];
     let i = pivotIndex;
     let j = pivotIndex + 1;

     while (result.length < k) {
         if (i < 0) {
             result.push(inorderTraverse[j]);
             j++;
             continue;
         }
         if (j >= inorderTraverse.length) {
             result.push(inorderTraverse[i]);
             i--;
             continue;
         }
         if (target - inorderTraverse[i] <= inorderTraverse[j] - target) {
             result.push(inorderTraverse[i]);
             i--;
         } else {
             result.push(inorderTraverse[j]);
             j++;
         }
     }
     return result;
 };
