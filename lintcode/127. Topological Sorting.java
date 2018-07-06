// 127. Topological Sorting
// Given an directed graph, a topological order of the graph nodes is defined as follow:
//
// For each directed edge A -> B in graph, A must before B in the order list.
// The first node in the order can be any node in the graph with no nodes direct to it.
// Find any topological order for the given graph.
//
// Example
// For graph as follow:
//
// picture
//
// The topological order can be:
//
// [0, 1, 2, 3, 4, 5]
// [0, 2, 3, 1, 5, 4]
// ...
// Challenge
// Can you do it in both BFS and DFS?
/**
 * Definition for Directed graph.
 * class DirectedGraphNode {
 *     int label;
 *     ArrayList<DirectedGraphNode> neighbors;
 *     DirectedGraphNode(int x) { label = x; neighbors = new ArrayList<DirectedGraphNode>(); }
 * };
 */

public class Solution {
    /*
     * @param graph: A list of Directed graph node
     * @return: Any topological order for the given graph.
     */
    public ArrayList<DirectedGraphNode> topSort(ArrayList<DirectedGraphNode> graph) {
        // write your code here
        ArrayList<DirectedGraphNode> result = new ArrayList<>();
        if (graph == null) {
            return result;
        }
        HashMap<DirectedGraphNode, Integer> inDegree = new HashMap<>();

        for (int i = 0; i < graph.size(); i++) {
            DirectedGraphNode curr = graph.get(i);
            for (int j = 0; j < curr.neighbors.size(); j++) {
                DirectedGraphNode nei = curr.neighbors.get(j);
                if (inDegree.containsKey(nei)) {
                    inDegree.put(nei, inDegree.get(nei) + 1);
                } else {
                    inDegree.put(nei, 1);
                }
            }
        }

        Queue<DirectedGraphNode> queue = new LinkedList<>();
        for (int i = 0; i < graph.size(); i++) {
            DirectedGraphNode curr = graph.get(i);
            if (!inDegree.containsKey(curr)) {
                queue.offer(curr);
            }
        }

        int count = 0;
        while (!queue.isEmpty()) {
            DirectedGraphNode curr = queue.poll();
            result.add(curr);
            count++;
            for (int i = 0; i < curr.neighbors.size(); i++) {
                DirectedGraphNode nei = curr.neighbors.get(i);
                inDegree.put(nei, inDegree.get(nei) - 1);
                if (inDegree.get(nei) == 0) {
                    queue.offer(nei);
                }
            }
        }
        if (count == graph.size()) {
            return result;
        }
        return new ArrayList<DirectedGraphNode>(0);
    }
}
