// 578. Lowest Common Ancestor III
// Given the root and two nodes in a Binary Tree. Find the lowest common ancestor(LCA) of the two nodes.
// The lowest common ancestor is the node with largest depth which is the ancestor of both nodes.
// Return null if LCA does not exist.
//
// Example
// For the following binary tree:
//
//   4
//  / \
// 3   7
//    / \
//   5   6
// LCA(3, 5) = 4
//
// LCA(5, 6) = 7
//
// LCA(6, 7) = 7
/**
 * Definition of TreeNode:
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 */
class ResultType {
  boolean a_exist;
  boolean b_exist;
  TreeNode node;
  ResultType(boolean a_exist, boolean b_exist, TreeNode node) {
    this.a_exist = a.exist;
    this.b_exist = b.exist;
    this.node = node;
  }
}

public class Solution {
    /*
     * @param root: The root of the binary tree.
     * @param A: A TreeNode
     * @param B: A TreeNode
     * @return: Return the LCA of the two nodes.
     */
    public TreeNode lowestCommonAncestor3(TreeNode root, TreeNode A, TreeNode B) {
        // write your code here
        ResultType rt = helper(root, A, B);
        if (rt.a_exist && rt.b_exist) {
          return rt.node;
        }
        return null;
    }
    public ResultType helper(TreeNode root, TreeNode A, TreeNode B) {
      if (root == null) {
        return new ResultType(false, false, null);
      }

      ResultType left = helper(root.left);
      ResultType right = helper(root.right);

      boolean a_exist = left.a_exist || right.a_exist || root == A;
      boolean b_exist = left.b_exist || right.b_exist || root == B;

      if (root == A || root == B) {
        return new ResultType(a_exist, b_exist, root);
      }
      if (left.node != null && right.node != null) {
        return new ResultType(a_exist, b_exist, root);
      }
      if (left.node != null) {
        return new ResultType(a_exist, b_exist, left.node);
      }
      if (right.node != null) {
        return new ResultType(a_exist, b_exist, right.node);
      }

      return new ResultType(a_exist, b_exist, null);
    }
}
