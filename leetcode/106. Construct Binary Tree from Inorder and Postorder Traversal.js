// Given inorder and postorder traversal of a tree, construct the binary tree.
//
// Note:
// You may assume that duplicates do not exist in the tree.
//
// For example, given
//
// inorder = [9,3,15,20,7]
// postorder = [9,15,7,20,3]
// Return the following binary tree:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder.length !== postorder.length) {
        return null;
    }

    return helper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

const helper = function(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (inStart > inEnd) {
        return null;
    }

    const root = new TreeNode(postorder[postEnd]);
    const position = findPosition(inorder, inStart, inEnd, postorder[postEnd]);

    const rightLen = position - inStart;

    root.left = helper(inorder, inStart, position - 1, postorder, postStart, postStart + rightLen - 1);
    root.right = helper(inorder, position + 1, inEnd, postorder, postStart + rightLen, postEnd - 1);

    return root;
}

const findPosition = function(inorder, inStart, inEnd, target) {
    let i;
    for (i = inStart; i <= inEnd; i++) {
        if (inorder[i] === target) {
            return i;
        }
    }
    return -1;
}
