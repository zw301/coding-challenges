// Given a non-empty list of words, return the k most frequent elements.
//
// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.
//
// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.
// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.
// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.
// Follow up:
// Try to solve it in O(n log k) time and O(n) extra space.
class Pair {
    String word;
    int freq;
    public Pair(String word, int freq) {
        this.word = word;
        this.freq = freq;
    }
}
class Solution {
    public List<String> topKFrequent(String[] words, int k) {
        if (k == 0) {
            return new String[0];
        }
        HashMap<String, Integer> map = new HashMap<>();
        for (int i = 0; i < words.length; i++) {
            String word = words[i];
            if (!map.containsKey(word)) {
                map.put(word, 0);
            }
            map.put(word, map.get(word) + 1);
        }
    }

    PriorityQueue<Pair> heap = new PriorityQueue<Pair>(k, new Comparator<Pair>() {
        public int compare(Pair a, Pair b) {
            if (a.freq != b.freq) {
                return a.freq - b.freq;
            }
            return b.word.compareTo(a.word);
        }
    });

    for (Map.Entry<String, Integer> entry : map.entrySet()) {
        Pair p = new Pair(entry.getKey(), entry.getValue());

        heap.offer(p);
        if (heap.size() > k) {
            heap.poll();
        }
    }

    String[] result = new String[k];
    while (!heap.isEmpty) {
        Pair p = heap.poll();
        result[--k] = p.word;
    }

    return result;
}
