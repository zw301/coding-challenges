// Convert a BST to a sorted circular doubly-linked list in-place.
// Think of the left and right pointers as synonymous to the previous and next pointers in a doubly-linked list.
//
// We want to transform this BST into a circular doubly linked list.
// Each node in a doubly linked list has a predecessor and successor.
// For a circular doubly linked list, the predecessor of the first element is the last element,
// and the successor of the last element is the first element.
//
//
// Specifically, we want to do the transformation in place.
// After the transformation, the left pointer of the tree node should point to its predecessor,
// and the right pointer should point to its successor.
// We should return the pointer to the first element of the linked list.
//
// The figure below shows the transformed BST. T
// he solid line indicates the successor relationship,
// while the dashed line means the predecessor relationship.
/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;

    public Node() {}

    public Node(int _val,Node _left,Node _right) {
        val = _val;
        left = _left;
        right = _right;
    }
};
*/
class Solution {
    public Node treeToDoublyList(Node root) {
      if (root == null) {
        return null;
      }

      Node curr = root;
      Node head = null;

      Node prev = null;
      Stack<Node> stack = new Stack<>();
      while (root != null || !stack.isEmpty()) {
        while (root != null) {
          stack.push(root);
          root = root.left;
        }
        root = stack.pop();
        if (head == null) {
          head = root;
        }
        if (prev != null) {
          prev.right = root;
          root.left = prev;
        }
        prev = root;
        root = root.right;
      }

      head.left = prev;
      prev.right = head;

      return head;
    }
}
