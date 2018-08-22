// Given a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.
//
// Example:
//
// Input: [1,2,3,4,5]
//
//     1
//    / \
//   2   3
//  / \
// 4   5
//
// Output: return the root of the binary tree [4,5,2,#,#,3,1]
//
//    4
//   / \
//  5   2
//     / \
//    3   1
//
//    1          1
//   / \        /
//  2   3      2 — 3
// / \        /
// 4   5     4 - 5

// As shown in the figure, 1 shows the original tree,
// you can think about it as a comb, with 1, 2, 4 form the bone,
// and 3, 5 as the teeth. All we need to do is flip the teeth direction as shown in figure 2.
// We will remove the link 1--3, 2--5, and add link 2--3, and 4--5.
// And node 4 will be the new root.
//
// As the recursive solution, we will keep recurse on the left child and once we are are done,
// we found the newRoot, which is 4 for this case. At this point,
// we will need to set the new children for node 2,
// basically the new left node is 3, and right node is 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function(root) {
    if (root === null || root.left === null) {
        return root;
    }

    let left = root.left;
    let right = root.right;
    let parent = root;

    let newRoot = upsideDownBinaryTree(root.left);
    left.left = right;
    left.right = parent;

    root.left = null;
    root.right = null;

    return newRoot;
};
