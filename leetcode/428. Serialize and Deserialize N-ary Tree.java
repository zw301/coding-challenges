//
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
//
// Design an algorithm to serialize and deserialize an N-ary tree. An N-ary tree is a rooted tree in which each node has no more than N children. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that an N-ary tree can be serialized to a string and this string can be deserialized to the original tree structure.
//
// For example, you may serialize the following 3-ary tree
//             1
//           / | \
//          3  2  4
//         / \
//        5   6
//
// as [1 [3[5 6] 2 4]]. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
//
//
//
// Note:
//
// N is in the range of [1, 1000]
// Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
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

// 只能看懂 serialize
// class Codec {
//
//     // Encodes a tree to a single string.
//     public String serialize(Node root) {
//         return serializeHelper(root, new StringBuilder());
//     }
//
//     public String serializeHelper(Node root, StringBuilder sb) {
//         if (root == null) {
//             return "";
//         }
//         sb.append(root.val + "[");
//         for (Node child : root.children) {
//             serializeHelper(child, sb);
//         }
//         sb.append("]");
//
//         System.out.println(sb.toString());
//         return sb.toString();
//     }
//
//     // Decodes your encoded data to tree.
//     public Node deserialize(String data) {
//         int i = 0;
//         int len = data.length();
//
//         Node root = null;
//         Stack<Node> stack = new Stack<>();
//         while (i < len) {
//             int start = i;
//             while (i < len && Character.isDigit(data.charAt(i))) {
//                 i++;
//             }
//             if (start == i) {
//                 Node child = stack.pop();
//                 if (stack.isEmpty()) {
//                     root = child;
//                     break;
//                 }
//                 stack.peek().children.add(child);
//             } else {
//                 stack.push(new Node(Integer.parseInt(data.substring(start, i)), new ArrayList<Node>()));
//             }
//             i++;
//         }
//         return root;
//     }
// }
// System.out.println(sb.toString());
// 1[3[5[]
// 1[3[5[]6[]
// 1[3[5[]6[]]
// 1[3[5[]6[]]2[]
// 1[3[5[]6[]]2[]4[]
// 1[3[5[]6[]]2[]4[]]

// Solution
// Idea: preorder recursive traversal; add count of children after root val,
// in order to know when to terminate.
// Example: The example in description is serialized as: "1,3,3,2,5,0,6,0,2,0,4,0"
class Codec {

    // Encodes a tree to a single string.
    public String serialize(Node root) {
        List<String> list = new LinkedList<>();
        serializeHelper(root, list);
        return String.join(",", list);
    }

    private void serializeHelper(Node root, List<String> list) {
        if (root == null) {
            return;
        }
        list.add(String.valueOf(root.val));
        list.add(String.valueOf(root.children.size()));
        for (Node child : root.children) {
            serializeHelper(child, list);
        }
    }

    // Decodes your encoded data to tree.
    public Node deserialize(String data) {
        if (data.isEmpty()) {
            return null;
        }

        String[] ss = data.split(",");
        Queue<String> q = new LinkedList<>(Arrays.asList(ss));
        return deserializeHelper(q);
    }

    private Node deserializeHelper(Queue<String> q) {
        Node root = new Node();
        root.val = Integer.parseInt(q.poll());
        int size = Integer.parseInt(q.poll());
        root.children = new ArrayList<Node>(size);
        for(int i = 0; i < size; i++) {
            root.children.add(deserializeHelper(q));
        }
        return root;
    }
}


// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
