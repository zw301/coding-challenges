// 269. Alien Dictionary
//
// There is a new alien language which uses the latin alphabet.
// However, the order among letters are unknown to you.
// You receive a list of non-empty words from the dictionary,
// where words are sorted lexicographically by the rules of this new language.
// Derive the order of letters in this language.
//
// Example 1:
//
// Input:
// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]
//
// Output: "wertf"
// Example 2:
//
// Input:
// [
//   "z",
//   "x"
// ]
//
// Output: "zx"
// Example 3:
//
// Input:
// [
//   "z",
//   "x",
//   "z"
// ]
//
// Output: ""
//
// Explanation: The order is invalid, so return "".
// Note:
//
// You may assume all letters are in lowercase.
// You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.
// If the order is invalid, return an empty string.
// There may be multiple valid order of letters, return any one of them is fine.
class Solution {
    public String alienOrder(String[] words) {
      Map<Character, Set<Character>> graph = constructGraph(words);
      return topologicalSorting(graph);
    }

    private Map<Character, Set<Character>> constructGraph(String[] words) {
      Map<Character, Set<Character>> graph = new HashMap<>();

      // create nodes
      for (int i = 0; i < words.length; i++) {
        for (int j = 0; j < words[i].length(); j++) {
          char c = words[i].charAt(j);
          graph.put(c, new HashSet<Character>());
        }
      }

      // create edges
      for (int i = 0; i < words.length - 1; i++) {
        int index = 0;
        while (index < words[i].length() && index < words[i + 1].length()) {
          if (words[i].charAt(index) != words[i + 1].charAt(index)) {
            graph.get(words[i].charAt(index)).add(words[i + 1].charAt(index));
            break;
          }
          index++;
        }
      }

      return graph;
    }

    private Map<Character, Integer> getIndegree(Map<Character, Set<Character>> graph) {
      Map<Character, Integer> indegree = new HashMap<>();

      for (Character u : graph.keySet()) {
        indegree.put(u, 0);
      }
      for (Character u : graph.keySet()) {
        for (Character v : graph.get(u)) {
          indegree.put(v, indegree.get(v) + 1);
        }
      }
      return indegree;
    }

    private String topologicalSorting(Map<Character, Set<Character>> graph) {
      Map<Character, Integer> indegree = getIndegree(graph);

      Queue<Character> queue = new PriorityQueue<>();

      for (Character u : indegree.keySet()) {
        if (indegree.get(u) == 0) {
          queue.offer(u);
        }
      }

      StringBuilder sb = new StringBuilder();
      while(!queue.isEmpty()) {
        Character head = queue.poll();
        sb.append(head);
        for (Character neighbor : graph.get(head)) {
          indegree.put(neighbor, indegree.get(neighbor) - 1);
          if (indegree.get(neighbor) == 0) {
            queue.offer(neighbor);
          }
        }
      }

      if (sb.length() != indegree.size()) {
        return "";
      }
      return sb.toString();
    }
}
