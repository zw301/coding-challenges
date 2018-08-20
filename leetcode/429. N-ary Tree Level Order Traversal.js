// Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
//  For example, you may serialize the following 3-ary tree
//              1
//            / | \
//           3  2  4
//          / \
//         5   6
//  We should return its level order traversal:
//   [
//      [1],
//      [3,2,4],
//      [5,6]
//   ]
// Note:
//
// The depth of the tree is at most 1000.
// The total number of nodes is at most 5000.
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    public List<List<Integer>> levelOrder(Node root) {
      List<List<Integer>> result = new ArrayList<List<Integer>>();
      if (root == null) {
        return result;
      }

      Queue<Node> queue = new LinkedList<>();
      queue.offer(root);
      while (!queue.isEmpty()) {
        int size = queue.size();
        List<Integer> tmp = new ArrayList<>();
        for (int i = 0; i < size; i++) {
          Node node = queue.poll();
          tmp.add(node.val);

          for (Node child : node.children) {
            queue.offer(child);
          }
        }
        result.add(tmp);
      }
      return result;
    }
}
