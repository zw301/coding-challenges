// Given preorder and inorder traversal of a tree, construct the binary tree.
//
// Note:
// You may assume that duplicates do not exist in the tree.
//
// For example, given
//
// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7

// Solution:
// The first element in preorder array is the root of the tree.
// We can use this value to find its index in inorder array.
// When we find the root in inorder array, we know the left part of
// inorder array is its left subtree and the right part of inorder array is its right subtree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder === null || preorder.length === 0 || inorder === null || inorder.length === 0) {
        return null;
    }
    if (preorder.length !== inorder.length) {
        return null;
    }

    return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

const findPosition = function(inorder, inStart, inEnd, target) {
    let i;
    for(i = inStart; i <= inEnd; i++) {
        if (inorder[i] === target) {
            return i;
        }
    }
    return -1;
}
const helper = function(preorder, preStart, preEnd, inorder, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) {
        return null;
    }

    const root = new TreeNode(preorder[preStart]);

    const position = findPosition(inorder, inStart, inEnd, preorder[preStart]);
    const leftLen = position - inStart;

    root.left = helper(preorder, preStart + 1, preStart + leftLen, inorder, inStart, position - 1);
    root.right = helper(preorder, preStart + leftLen + 1, preEnd, inorder, position + 1, inEnd);

    return root;
}
